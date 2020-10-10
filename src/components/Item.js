import React, { useContext } from 'react';
import { render } from '@testing-library/react';
import { NavLink, useParams, useHistory  } from 'react-router-dom';
import Swal from 'sweetalert2'

import Contador from './Contador/Contador';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import { CartContext } from './cartContext';
import '../css/icons.css';

function Item({data}) {
  const { id } = useParams();
  const card = data
  const [cart, setCart] = useContext(CartContext);
  const history = useHistory()

  const addToCart = () => {
    let amount = document.getElementById('amount-span').getAttribute('amount')
    if (amount >= 1 ) {
      for(let i = 1; i <= amount; i++) {
        setCart(currentCart => [...currentCart, card])
      }
      Swal.fire({
        title: 'Hecho!',
        text: 'Las cartas fueron agregadas al carrito',
        icon: 'success',
        showCancelButton: true,
        confirmButtonText: 'Ver más cartas',
        cancelButtonText: 'Ir al carrito',
        showLoaderOnConfirm: true,
      }).then((result) => {
        if(result.isConfirmed) {
          history.push("/");
        } else {
          history.push("/cart");
        }
      })
    } else {
      Swal.fire('Error', 'Debe seleccionar la cantidad de cartas que quiere comprar', 'error')
    }
  }

  return (
    <div className="card-container" id={card.id}>
      <div className='card-Image'>
        <NavLink to={`/product/${card.id}`}>
          <img src={id? card.img : card.img_small} alt={card.name}/>
        </NavLink>
      </div>
      <p><u>Nombre:</u> {card.name}</p>
      <p><u>Tipo:</u> {card.type}</p>
      <p><u>Arquetipo:</u> {card.archetype}</p>
      <p><u>Precio (Amazon US):</u> US${card.amazon_price}</p>
      <div className={(id ? 'showBuyingInterface' : 'hideBuyingInterface')}>
        <Contador cardType={card.type.replace(/ .*/,'')}/>
        <div class='Buttons'>
          <button onClick={addToCart}>Comprar cartas</button>
        </div>
      </div>
    </div>
  )
}

export default Item;