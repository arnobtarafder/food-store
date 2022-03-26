import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Card from '../Card/Card';
import './Shop.css';
import swal from 'sweetalert';
import Random from '../Cart/Random';


const Shop = () => {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetch('foods.json')
        .then(res => res.json())
        .then(data => setFoods(data));
    }, []);

    /* Cart functionality */
    const [cart, setCart] = useState([]);
    const handleAddToCart = (food) => {
        // console.log(food);
        const exists = cart.find(pd => food.id !== pd.id)
        
        if(!(cart.length > 4)) {
            const newfood = [...cart, food];
            setCart(newfood);
        }

        else if(!exists) {
            swal({
                title: "Error!",
                text: "Sorry! you cannot buy 1 item two times",
                icon: "error",
                button: "Okay!",
              });
              return;
            //   alert("Sorry")
        }

        else{
            swal({
                title: "Error!",
                text: "Sorry! you cannot buy more than 5 products",
                icon: "error",
                button: "Okay!",
              });
        }}

    const removeFromCart = (id) => {
        const newList = cart.filter((item) => item.id !== id);
        setCart(newList);
    };


    return (
        <div className='card-container'>
            <div className='foods-container reverse-main'>
            {
                foods.map(food => <Card 
                key = {food._id} 
                foodsData = {food} 
                handleAddToCart = {handleAddToCart}
                // chooseRandom = {getRandomItem}
                ></Card>)
            }
            </div>
            <div className="cart-container">
                <Cart key = {cart._id}
                cart = {cart} 
                removeFromCart = {removeFromCart}
                // chooseRandom = {getRandomItem}
                ></Cart>
                {/* <Random></Random> */}
            </div>
        </div>
    );
};

export default Shop;