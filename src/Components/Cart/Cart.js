import React from 'react';
import './Cart.css';
import { FiDelete } from 'react-icons/fi';
import DisplayCartM from '../DisplayCartM/DisplayCartM';

const Cart = (props) => {
    console.log(props);
    const {cart, removeFromCart, id, chooseRandom} = props;
    let grandTotal = 0;
    for(const price of cart){
        grandTotal = grandTotal + price.price;
    };

    return (
        <div className='cart reverse-main'>
            <h3>Order Summary</h3>
            <p>Total Selected Items: <span className='cart-length'>{cart.length}</span></p>
            <p>Total Price: <span className='grand-total'>$ {grandTotal}</span></p>
            {
                    cart.map(cart => <DisplayCartM
                        key= {cart._id}
                        foodInfo= {cart} 
                        removeFromCart= {removeFromCart}
                    ></DisplayCartM>)
                }
                <button className='btn btn-outline-success' onClick={() => chooseRandom(id)}>Choose one for me</button><br /> <br />

                <button className='btn btn-outline-success' onClick={() => removeFromCart(id)}>Choose again<FiDelete className='del-icon'/></button>
            
        </div>
    );
};

export default Cart;