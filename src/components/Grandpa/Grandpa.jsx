import React, { createContext, useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css';

export const RingContext = createContext('Urenium Ring');
export const MoneyContext = createContext(0);



const Grandpa = () => {
    const ring = 'Diamond Ring ';
    const [money, setMoney] = useState(0);
    
    return (
        <div className='grandpapa'>
            <h3>Grandpa has <span style={{color: 'rebeccapurple'}}>{money}</span> money</h3>
           <MoneyContext.Provider value={[money, setMoney]}>
           <RingContext.Provider value='Urenium Ring'>
            <section className='flex'>
                <Father ring={ring}></Father>
                <Uncle ring={ring}></Uncle>
                <Aunty ring={ring}></Aunty>
            </section>
            </RingContext.Provider>
           </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;