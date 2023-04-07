import React from 'react';
import Kajeans from './KaJeans/Kajeans';
const Uncle = ({ring}) => {
    return (
        <div >
            <h2>Uncle Chand</h2>

            <div className='flex'>
            <Kajeans ring={ring}>Liton</Kajeans>
            <Kajeans>Ripon</Kajeans>
            </div>
        </div>
    );
};

export default Uncle;