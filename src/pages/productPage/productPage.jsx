import React, {useState,useEffect} from 'react';
import {commerce} from "../../lib/commerce";
import {Products,Navbar, Cart} from "../../Components"
import {BrowserRouter as Router, Switch,Route} from "react-router-dom"

const ProductPage = ()=> {

    const [products, setProducts]= useState([]);
    const [cart,setCart]= useState({});

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

    const handleUpdateCartQty= async(productId,quantity)=>{
        const {cart}=await commerce.cart.ass(productId, {quantity})
        setCart(cart)
    }

const handleRemoveFromCart= async(productId)=>{
    const {cart}= await commerce.cart.remove(productId);

    setCart(cart)
}

const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();

    setCart(response.cart);
  };
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
            <Route exact path="/store/store">
            <Cart cart={cart} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} onEmptyCart={handleEmptyCart} />
          </Route>
        </Switch>
    </div>
    </Router>
);

}


export default ProductPage