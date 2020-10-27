import React, { useState } from 'react';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import { NavLink, useHistory  } from 'react-router-dom';
import { CartIcon } from './Cart/CartIcon'
import { CartAmount } from './Cart/CartAmount'
import '../css/navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function MainNavbar({data}) {
  const [id, setId] = useState('');
  const history = useHistory()

  const onSubmit = () => {
    history.push("/my-order/" + id);
  }

  return(
    <>
      <Navbar bg="primary" variant="dark">
        <NavLink className='Navbar-Link' to={'/featured'}>Yugi-cueva</NavLink>
        <Nav className="mr-auto">
          <NavLink className='Navbar-Link' to={'/'}>Productos</NavLink>
        </Nav>
        <CartAmount amount='2'/>
        <NavLink to={'/cart'}>
          <CartIcon />
        </NavLink>
        <Form inline>
          <FormControl value={id} onChange={e => setId(e.target.value)} type="text" placeholder="ID de pedido..." className="mr-sm-2" />
          <Button variant="outline-light" onClick={onSubmit}>Buscar</Button>
        </Form>
      </Navbar>
    </>
  )
}

export default MainNavbar;