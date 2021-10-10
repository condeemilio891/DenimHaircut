import React, {useState,useEffect} from 'react';
import {commerce} from "../../lib/commerce";
import {Products,Navbar, Cart,Checkout} from "../../Components"
import {BrowserRouter as Router, Switch,Route} from "react-router-dom"


const ProductPage = ()=> {

    const [products, setProducts]= useState([]);
    const [cart,setCart]= useState({});
    const [order,setOrder]= useState({})
    const [errorMessage,setErrorMessage]=useState('')

    const fetchProducts=async () =>{
        
        const {data} =await commerce.products.list();

        setProducts(data);
    }


    const fetchCart= async()=>{
        setCart(await commerce.cart.retrieve());

        
    }

    const handleAddToCart= async(productId,quantity)=>{
        const {cart}= await commerce.cart.add(productId,quantity);
    
        setCart(cart)
    }

    const handleUpdateCartQty = async (lineItemId, quantity) => {
        const response = await commerce.cart.update(lineItemId, { quantity });
    
        setCart(response.cart);
      };
    

    const handleRemoveFromCart = async (lineItemId) => {
        const response = await commerce.cart.remove(lineItemId);
    
        setCart(response.cart);
      };

const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();

    setCart(response.cart);
  };

  const refreshCart=async()=>{
      const newCart= await commerce.cart.refresh();

      setCart(newCart)
  }

  const handleCaptureCheckout= async (checkoutTokenId,newOrder)=>{
      try{
          const incomingOrder= await commerce.checkout.capture(checkoutTokenId,newOrder);
        
          setOrder(incomingOrder);
          refreshCart();
        } catch(error){
            setErrorMessage(error.data.error.message)
          
      }
  }

    useEffect (()=>{
            fetchProducts();
            fetchCart();
    }, [])

    console.log(cart);
return (
    <Router>
    <div>
        <Navbar totalItems={cart.total_items}/>
        <Switch>
            <Route exact path="/store">
                <Products products={products} onAddToCart={handleAddToCart}/>
            </Route>
            <Route exact path="/store/cart">
            <Cart cart={cart} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} onEmptyCart={handleEmptyCart} />
          </Route>
          <Route exact path="/store/checkout">
                <Checkout cart={cart} 
                products={products} 
                
                onAddToCart={handleAddToCart}
                order={order}
                onCaptureCheckout={handleCaptureCheckout}
                error={errorMessage}/>
            </Route>
        </Switch>
    </div>
    </Router>
);

}


export default ProductPage