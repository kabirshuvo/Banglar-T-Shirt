import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';


const Home = () => {
    const tShirts = useLoaderData();
    return (
        <div>
        {
            tShirts.map(tShirt => <TShirt key={tShirt._id} tShirt={tShirt}></TShirt>)
        }
        </div>
    );
};

export default Home;