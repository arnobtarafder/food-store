import React from 'react';
import './Card.css';
import {FaShoppingCart} from 'react-icons/fa'

const Card = ({foodsData, handleAddToCart}) => {
    const {image, name, price} = foodsData;

    return (
        <div className='product'>
             <img src= {image} alt="" />
           <div className="product-information">
           <p className='product-name'>{name}</p>
             <p>Price: <span className='product-price'>৳ {price}</span></p>   
              
             <button onClick={()=> handleAddToCart(foodsData)} className='addToCart btn btn-success mt-4'> Add To Cart <FaShoppingCart></FaShoppingCart> </button>

           </div>
           </div>
    );
};


export default Card;