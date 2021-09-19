import React from 'react'
import {Elements} from "@stripe/react-stripe-js"
import {loadStripe} from "@stripe/stripe-js"




const PUBLIC_KEY="pk_test_51JaqkEKwkgLNkQsOFduwPE5qt5OQsmTO6gJIMqWhRP7KxhRXlXGXsbhJHhIAyW1nRBozDmbdOL5YeRUTq1bomyBL000uiaD34A"
const stripeTestPromise=loadStripe(PUBLIC_KEY)

const StripeContainer = () => {
    return (
        <Elements stripe={stripeTestPromise}>
            <PaymentForm/>
        </Elements>
    )
}

export default StripeContainer
