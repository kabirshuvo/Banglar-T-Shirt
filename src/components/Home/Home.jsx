import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';
import './Home.css';


const Home = () => {
    const tShirts = useLoaderData();

    const [cart, setCart] = useState([])

    const handleAddtoCart = (tShirt) => {
        const exist = cart.find(ts => ts._id === tShirt._id);
        if(exist){
            toast('Item Already Exist')
        } else {
            const newCart = [...cart, tShirt];
            setCart(newCart);
        }
     
    }
    const handleRemoveFromCart = (id) => {
           const remaining = cart.filter(ts => ts._id !== id);
           setCart(remaining);
    }


    return (
        <div className='home-container'>
        <div className='t-shirt-container'>
        {
            tShirts.map(tShirt => <TShirt 
                key={tShirt._id} 
                tShirt={tShirt}
                handleAddtoCart={handleAddtoCart}
                
                ></TShirt>)
        }
        </div>
        <div className='cart-container'>
            <Cart 
            cart={cart} 
            handleRemoveFromCart={handleRemoveFromCart}
            ></Cart>
        </div>
        </div>
    );
};

export default Home;