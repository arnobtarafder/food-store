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
        const exists = cart.find(pd => pd.id !== food.id)
        
        if(!(cart.length > 4)) {
            const newfood = [...cart, food];
            setCart(newfood);
        }

        else if(!exists) {
            swal({
                title: "Error!",
                text: "Sorry! you cannot select more than 5 products",
                icon: "error",
                button: "Okay!",
              });
              return;
            //   alert("Sorry")
        }

        else{
            swal({
                title: "Error!",
                text: "Sorry! you cannot select more than 5 products",
                icon: "error",
                button: "Okay!",
              });
        }}

    const removeFromCart = (id) => {
        // const newList = cart.filter((item) => item.id !== id);
        setCart([]);
    };


    // const [random, setRandom] = useState([])
    const getRandomItem = () => {
        const newCart = cart;
        const randomCart = newCart[Math.floor(newCart.length * Math.random())]
        const newRandom = [randomCart];
        setCart(newRandom)
        // console.log(newRandom);
    }

    

    return (
        <div className='container'>
            <div className='foods-container container reverse-main'>
            {
                foods.map(food => <Card 
                key = {food._id} 
                foodsData = {food} 
                handleAddToCart = {handleAddToCart}
                // chooseRandom = {getRandomItem}
                ></Card>)
            }
            </div>
            <div className="cart-container container">
                <Cart key = {cart._id}
                cart = {cart} 
                removeFromCart = {removeFromCart}
                chooseRandom = {getRandomItem}
                ></Cart>
                {/* <Random></Random> */}
            </div>
        </div>
    );
};

// const random = cart[Math.floor(Math.random() * cart.length)]; 

export default Shop;