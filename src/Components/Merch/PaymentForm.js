// import React, {useState} from 'react'
// import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js"
// import axios from "axios"



// export default function PaymentForm() {

//    const [success,setSuccess]=useState(false)
//    const stripe= useStripe()
//    const elements = useElements()




//    const handleSubmit= async(e)=>{
//         e.preventDefault()
//         const{error,paymentMethod}=await stripe.createPaymentMethod({
//             type:"car",
//             card:elements.getElement(CardElement)
//         })


//    }
//    if(!error){
//        try{
//            const{id}= paymentMethod
//            const response= await. axious.post("http//localhost:3001/")
//        }
//    }

//     return (
//         <div>
            
//         </div>
//     )
// }
