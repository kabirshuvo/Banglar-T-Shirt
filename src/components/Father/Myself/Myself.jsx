import React, { useContext } from 'react';
import { RingContext } from '../../Grandpa/Grandpa';

const Myself = ({ring}) => {
    const uRing = useContext(RingContext);
    return (
        <div>
            <h3>This is me</h3>
            <p>The {uRing}</p>
        </div>
    );
};

export default Myself;