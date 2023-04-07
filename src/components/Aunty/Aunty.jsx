import React from 'react';
import AuntySons from './AuntySons/AuntySons';
const Aunty = () => {
    return (
        <div>
            <h2>Aunty Monty</h2>
            <div className='flex'>
            <AuntySons>Monika</AuntySons>
            <AuntySons>Rozina</AuntySons>
            <AuntySons>Drishty</AuntySons>

            </div>
        </div>
    );
};

export default Aunty;