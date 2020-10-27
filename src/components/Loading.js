import React from 'react';
import cart from '../utils/img/card.png';
import '../css/loading.css';

export function Loading() {
    return (
        <div>
            <img src={cart} className='rotate'/>
            <span className='loading-span'><div className='loading-text'>Cargando la mejor mano...</div></span>
        </div>
    )
}

export default Loading;