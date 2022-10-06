import React, { useEffect, useState } from 'react';
import CheckoutProduct from './CheckoutProduct.js';
import './Payment.css';
import { useStateValue } from './StateProvider.js';
import {Link, useNavigate} from "react-router-dom";
import {CardElement, useStripe, useElements} from "@stripe/react-stripe-js";
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer.js';
import axios from "./axios.js"

function Payment() {
    const [{basket,user},dispatch] = useStateValue();
    const navigate=useNavigate();
    const stripe = useStripe();
    const elemets = useElements();
    const [succeeded,setSuccedded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);
    let [distance, setDistance] = useState('0');
    function move(){
      setDistance('100%');
    }

    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `/payments/create?total = ${getBasketTotal(basket) *100}`
            });
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    },[basket])

    console.log('THE SECRET IS >>>', clientSecret)

    const handleSubmit = async (event) =>{
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret,{payment_method:{
            card : elemets.getElement(CardElement)
        }}).then(({paymentIntent}) => {
            setSuccedded(true);
            setError(null);
            setProcessing(false);
            navigate('/orders');
        })
        // const payload = await stripe
    }
    const handleChange = event =>{
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");

    }
  return (
    <div className='payment'>
        <div className='payment__container'>
            <h1>
                Checkout (<Link to="/checkout">{basket?.length} items </Link>)
            </h1>
            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Delivery Address</h3>
                </div>
                <div className='payment__address'>
                    <p>{user?.email}</p>
                    <p>9th Floor, Nalapad Brigade Centre, Whitefield Main Rd</p>
                    <p>Mahadevapura, Bengaluru, Karnataka 560048</p>
                </div>
            </div>
            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Review items and delivery</h3>
                </div>
                <div className='payment__items'>
                    {basket.map(item => (
                        <CheckoutProduct 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
            </div>
            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Payment Method</h3>
                </div>
                <div className='payment__details'>
                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange}/>
                        <div className='payment__priceContainer'>
                            <CurrencyFormat
                                renderText={(value) => (
                                    <h3>Order Total:{value}</h3>
                                )}
                                decimalScale={2}
                                value={getBasketTotal(basket)}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={" Rs."}
                            />       
                            <button disabled={processing || disabled || succeeded} onClick={move}>
                                <span>{processing ?<p>Processing</p>:"Buy now"}</span>
                            </button>
                        </div> 
                        {error && <div>{error}</div>}
                    </form>
                </div>
            </div>
            <div className="progress-box">
                <div className="mover" style={{width: distance}}></div>
            </div>
        </div>
    </div>
  )
}

export default Payment