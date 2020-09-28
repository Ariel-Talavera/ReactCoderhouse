import React from 'react';
import cart from '../../utils/img/cart.svg';
import '../../css/cart.css';

export function CartIcon() {
    return (
        <img 
            src={cart} 
            className='cart' 
            alt='Carrito-de-productos'
        />
    )
}

export default CartIcon;