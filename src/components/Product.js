import React from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

function Product({ data }) {
    const { id } = useParams();
    return (
        <ItemList id={id}/>
    );
}

export default Product; 