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
            const randomOne = cart[Math.floor(Math.random() * cart.length)];
            let newCart = [];
            newCart.push(randomOne)
            // let newCart.push(randomOne)
            // newCart = [randomOne];
            setCart(newCart);
      }
    

    return (
        <div className='container overflow-hidden'> {/*  col-md-12 col-lg-12 col-sm-12 */}
            <div className='foods-container container reverse-main'> {/*  col-md-8 col-sm-12 */}
            {
                foods.map(food => <Card 
                key = {food._id} 
                foodsData = {food} 
                handleAddToCart = {handleAddToCart}
                // chooseRandom = {getRandomItem}
                ></Card>)
            }
            </div>
            <div className="cart-container ms-0">{/*  col-md-8 col-sm-12 */}
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