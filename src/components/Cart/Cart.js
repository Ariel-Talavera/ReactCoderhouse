import React, { useContext } from 'react';
import { CartContext } from '../cartContext';
import CartTable from '../Cart/CartTable';

export default function Cart() {
  const [cart] = useContext(CartContext);
  return (
    <>
    <div className="Home-Cart">
      <h2 className="Home-Title"><u>Carrito de compras</u></h2>
      {cart.length > 0 &&
        <div className="cards-container">
          <CartTable/>
        </div>
      }
      {cart.length === 0 &&
        <div>
          <span>No tiene items en el carrito!</span>
        </div>
      }
    </div>
    </>
  )
}