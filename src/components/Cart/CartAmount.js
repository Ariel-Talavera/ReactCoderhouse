import React, { useContext } from 'react';
import { CartContext } from '../cartContext';
import '../../css/icons.css';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';

export function CartAmount() {
    const [cart] = useContext(CartContext);
    return (
        <span className="fa-stack">
            <span className="fa fa-circle-o fa-stack-2x"></span>
            <strong className="fa-stack-1x">{cart.length}</strong>
        </span>
    );
}

export default CartAmount;