import React from 'react';

const Cart = ({cart, handleRemoveFromCart }) => {
    let message;
    if(cart.length === 0){
            message = <h6>Please add some products</h6>
    }else {
        message = <h6>Great Choice, Collect More</h6>
    }
    return (
        <div>
            {message}
            <h2>Order Summary {cart.length}</h2>
            {cart.length > 2 ? <span>Double Another</span> : <span>Left the confution, Collect Some Products</span>}
            
            {
                cart.map(tShirt => <p key={tShirt._id}>{tShirt.name} 
                <button onClick={()=> handleRemoveFromCart(tShirt._id)}>X</button></p> )
            }
            {
                cart.length === 3 && <p>You are elegible for bonus</p>

            }{
                cart.length === 4 || <p>Great Choice, Keep Collection</p>
            }
        </div>
    );
};

export default Cart;