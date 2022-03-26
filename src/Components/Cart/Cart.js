import React from 'react';
import './Cart.css';
import { FiDelete } from 'react-icons/fi';
import DisplayCartM from '../DisplayCartM/DisplayCartM';

const Cart = (props) => {
    // console.log(props.chooseRandom);
    const {cart, removeFromCart, id} = props;
    const {chooseRandom} = props;
    let grandTotal = 0;
    for(const price of cart){
        grandTotal = grandTotal + price.price;
    };

    return (
        <div className='cart-container col-md-4 col-sm-12 reverse-main'>
            <h3>Order Summary</h3>
            <p>Total Selected Items: <span className='cart-length'>{cart.length}</span></p>
            <p>Total Price: <span className='grand-total'>$ {grandTotal}</span></p>
            {/* <h4>{chooseRandom.length}</h4> */}
            {
                    cart.map(cart => <DisplayCartM
                        key= {cart._id}
                        foodInfo= {cart} 
                        // chooseRandom = {chooseRandom}
                        removeFromCart= {chooseRandom}
                    ></DisplayCartM>)
                }
                <button className='btn btn-outline-success' onClick={() => chooseRandom(id)}>Choose One Food</button><br /> <br />
                {/* <h1>{chooseRandom.length}</h1> */}

                <button className='btn btn-outline-success' onClick={() => removeFromCart(id)}>Choose Again<FiDelete className='del-icon'/></button>
            
        </div>
    );
};

export default Cart;
