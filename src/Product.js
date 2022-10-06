import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider.js';

function Product({ id, title,image, price, rating }) {

  const [{basket}, dispatch] = useStateValue();
  const addToBasket =() => {
    dispatch({
      type:"ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });

  };

  return (
    <div className='product'>
        <div className='product__info'>
            <p className='product__I'> {title}</p>
            <p className='product__price'>
                <small>Rs.</small>
                <strong>{price}</strong>
            </p>
            <div className='product__rating'>
                {Array(rating).fill().map((_, i) => ( <p>⭐</p> ))}
                
            </div>
        </div>
            <img className='product__image' src={image} alt=""/>
            <button onClick ={addToBasket}> Add to Basket </button>
    </div>
  );
}

export default Product