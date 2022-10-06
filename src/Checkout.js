import React from 'react';
import "./Checkout.css";
import Banner from "../src/images/banner.jpg";
import Subtotal from './Subtotal.js';
import {useStateValue} from "./StateProvider.js";
import CheckoutProduct from './CheckoutProduct.js';
 
function Checkout() {
const [{basket,user},dispatch] = useStateValue();
  return (
    <div className='checkout'>
        <div className='checkout__left'>
            <img className='checkout__add' src={Banner} alt=''/>
            <div>
                <h3>Hello,{user?.email}</h3>
                <h2 className='checkout__title'>
                    Your Shopping Basket 
                </h2>
                {basket.map(item => (<CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}/>))}

            </div>
        </div>
        <div className='checkout__right'>
            <Subtotal/>
        </div>
    </div>
  )
}
export default Checkout