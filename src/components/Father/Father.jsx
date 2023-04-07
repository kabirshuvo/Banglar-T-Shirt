import React from 'react';
import Brothers from './Brothers/Brothers';
import './Myself/Myself';
import Myself from './Myself/Myself';
const Father = ({ring}) => {
    return (
        <div>
            <h2>My Respectable father</h2>
           <section className='flex'>
           <Myself ring={ring}></Myself>
            <Brothers ring={ring}></Brothers>
           </section>
        </div>
    );
};

export default Father;