import React from 'react';
import './DisplayCartM.css'

const DisplayCartM = (props) => {
    const {removeFromCart, chooseRandom2} = props;
    const { image, id, name, price } = props.foodInfo;
    return (
        <div>
            <h5 className="course-info"> 
                <span> 
                <img style={{ height: '50px', width: '50px', borderRadius: '50%' }} className="rounded-circle" src={image} alt="" /> 
                </span> 
                <span>{name}</span>
                <p>৳ {price}</p>
                {/* {instructor} */}
            </h5>
        </div>
    );
};

export default DisplayCartM;