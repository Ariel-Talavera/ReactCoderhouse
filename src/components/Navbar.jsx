import React from 'react';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import style from 'bootstrap/dist/css/bootstrap.css';
import { CartIcon } from './Cart/CartIcon'
import { CartAmount } from './Cart/CartAmount'

class mainNavbar extends React.Component {
  render(){
    return(
        <Navbar bg="primary" variant="dark">
        <Navbar.Brand href='/'>Yugi-cueva</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Productos</Nav.Link>
        </Nav>
        <CartAmount amount='2'/>
        <Nav.Link href='/cart/'>
          <CartIcon />
        </Nav.Link>
        <Form inline>
          <FormControl type="text" placeholder="Nombre del producto..." className="mr-sm-2" />
          <Button variant="outline-light" onClick={() => alert("Sin stock!")}>Buscar</Button>
        </Form>
      </Navbar>
    )
  }
}

export default mainNavbar;