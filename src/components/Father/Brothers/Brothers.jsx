import React, { useContext } from 'react';
import { RingContext } from '../../Grandpa/Grandpa';

const Brothers = () => {
    const uRing = useContext(RingContext)
    return (
        <div>
            <h3>My Brothers</h3>
            {uRing}
        </div>
    );
};

export default Brothers;