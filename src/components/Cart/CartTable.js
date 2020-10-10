import React, { useState, useContext} from 'react';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import '../../css/icons.css';
import { CartContext } from '../cartContext';
import { NavLink, useParams } from 'react-router-dom';

function CartTable() {
  const [cart, setCart] = useContext(CartContext);
  //Agrupamos los elementos repetidos
  let card_groups = cart.reduce((r, a) => {
    console.log("a", a);
    console.log('r', r);
    r[a.cardId] = [...r[a.cardId] || [], a];
    return r;
  }, {});
  //Formamos un array de índices
  let cart_ids = []
  cart.map((elem) => {
    if (!cart_ids.includes(elem.cardId)) {
      cart_ids.push(elem.cardId)
    }
  })
  //Total de compra
  let cart_total = 0
  cart_ids.map(element => {
    cart_total = cart_total + card_groups[element][0].amazon_price * card_groups[element].length
  })
  return (
    <div className='table-container'>
      <table className='cart-table'>
        <thead>
          <tr>
            <th>Cantidad</th>
            <th>Carta</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
        {cart_ids.map(element =>
          <tr>
            <td>{card_groups[element].length}</td>
            <td>{card_groups[element][0].name}</td>
            <td>${card_groups[element][0].amazon_price * card_groups[element].length}</td>
          </tr>
        )}
        <tr>
          <td>Total</td>
          <td></td>
          <td>${cart_total}</td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}

export default CartTable;