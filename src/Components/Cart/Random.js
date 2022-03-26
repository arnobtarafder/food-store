import React from 'react';
import { useEffect, useState } from 'react';
import './Random.css'


const Random = ({randomData}) => {

    return (
        <div>
            <h3 className="random-info"> 
                <span> 
                <img style={{ height: '50px', width: '50px', borderRadius: '50%' }} className="rounded-circle" src={randomData.image} alt="" /> 
                </span> 
                <span>{randomData.name}</span>
                <h5>৳ {randomData.price}</h5>
                <p>{randomData.weight}</p>    
                {/* {instructor} */}
            </h3>
        </div>
    );
};

export default Random;