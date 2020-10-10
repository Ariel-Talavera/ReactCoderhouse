import React from 'react';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import style from 'bootstrap/dist/css/bootstrap.css';
import { CartIcon } from './Cart/CartIcon'
import { CartAmount } from './Cart/CartAmount'
import { NavLink } from 'react-router-dom';
import '../css/navbar.css';

class mainNavbar extends React.Component {
  render(){
    return(
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
          <FormControl type="text" placeholder="Nombre del producto..." className="mr-sm-2" />
          <Button variant="outline-light" onClick={() => alert("Sin stock!")}>Buscar</Button>
        </Form>
      </Navbar>
    )
  }
}

export default mainNavbar;