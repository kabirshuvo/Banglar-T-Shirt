import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';


const Home = () => {
    const tShirts = useLoaderData();
    return (
        <div className='home-container'>
        <div className='t-shirt-container'>
        {
            tShirts.map(tShirt => <TShirt key={tShirt._id} tShirt={tShirt}></TShirt>)
        }
        </div>
        <div className='cart-container'>
            <Cart></Cart>
        </div>
        </div>
    );
};

export default Home;