import React from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css';
const Grandpa = () => {
    const ring = 'Diamond Ring ';
    const ringContext = createContext();
    return (
        <div className='grandpapa'>
            <h3>Grandpa is Slipping</h3>
            <section className='flex'>
                <Father ring={ring}></Father>
                <Uncle ring={ring}></Uncle>
                <Aunty ring={ring}></Aunty>
            </section>
        </div>
    );
};

export default Grandpa;