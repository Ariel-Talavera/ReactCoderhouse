import React from 'react';
import '../../css/icons.css';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';

export function CartAmount(props) {
    return (
        <span className="fa-stack">
            <span className="fa fa-circle-o fa-stack-2x"></span>
            <strong className="fa-stack-1x">{props.amount}</strong>
        </span>
    );
}

export default CartAmount;