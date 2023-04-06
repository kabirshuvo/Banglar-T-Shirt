import React from 'react';

const TShirt = ({tShirt}) => {
    const{picture, name, price, gender} = tShirt;
    return (
        <div>
            <h1>{name}</h1>
            <img src={picture} alt="" />
            <div>
                <p>Price: ${price}</p>
                <p>{gender}</p>
            </div>
        </div>
    );
};

export default TShirt;