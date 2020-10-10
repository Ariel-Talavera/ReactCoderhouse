import React, { useState, useContext} from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { CartContext } from './cartContext';

function Product({ data }) {
    const [cart, setCart] = useContext(CartContext);
    const { id } = useParams();
    return (
        <ItemList id={id}/>
    );
}

export default Product; 