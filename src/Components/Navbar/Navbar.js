import React from "react";
import "./Navbar.css";
// import { BsFillCartFill } from "react-icons/bs";
// import {ImCart} from "react-icons/im"


const Navbar = () => {
  return (
    <nav className='navbar'>
        <h1>Food Store</h1>

       <div className="cart-counter">
       {/* <button button onClick={openModal}> */}
           {/* <span>{cart.length}</span> */}
            {/* <BsFillCartFill className="icon" color=""></BsFillCartFill> */}
            {/* </button> */}
       </div>

    </nav>
  );
};
export default Navbar;