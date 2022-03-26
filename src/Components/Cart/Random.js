// import React from 'react';
// import { useEffect, useState } from 'react';


// const Random = () => {
//     const [cart, setCart] = useState([]);
//     console.log(cart);
//     useEffect(() => {
//         fetch('foods.json')
//         .then(res => res.json())
//         .then(data => setCart(data));
//     }, []);

//     function getRandomItem() {
//         // console.log(cart.length);
//         const random = cart[Math.floor(Math.random()* cart.length)];
//         return random;
//     }

//     return (
//         <div>
//             <button className='btn btn-outline-success' onClick={getRandomItem}>Choose one for me</button><br /> <br />
//         </div>
//     );
// };

// export default Random;