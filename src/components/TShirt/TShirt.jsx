import React from 'react';
import { Link } from 'react-router-dom';
import './TShirt.css';

const TShirt = ({tShirt, handleAddtoCart}) => {
    const{picture, name, price, gender} = tShirt;
    return (
        <div className='single-t-Shirt'>
            <h1>{name}</h1>
            <img src={picture} alt="" />
            <div>
                <p>Price: ${price}</p>
                <p>{gender}</p>
            </div>

            <Link ><button onClick={()=>handleAddtoCart(tShirt)}>Buy Now</button></Link>
        </div>
    );
};

export default TShirt;