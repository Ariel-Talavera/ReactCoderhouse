import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';

import MainNavbar from './components/Navbar';
import ItemList from './components/ItemList';
import Product from "./components/Product";
import Cart from "./components/Cart/Cart";
import MyOrder from "./components/Order/Order";
import { CartProvider } from './components/cartContext';

export default class App extends Component {
  redirectTo = () => {
    return <Redirect to={'cart'}></Redirect>
  }

  render() {
    return (
      <div>
        <CartProvider>
          <BrowserRouter>
            <MainNavbar />
            <div className="App">
              <header className="App-header">
                <Route exact path='/featured'>
                  <h3 className='rarity-banner'><u>Cartas ultra raras!</u></h3>
                  <ItemList featured='true'/>
                </Route>
                <Route exact path='/'>
                  <ItemList />
                </Route>
                <Route path='/product/:id'>
                  <Product data={this} />
                </Route>
                <Route path='/cart/'>
                  <Cart />
                </Route>
                <Route path='/my-order/:id'>
                  <MyOrder />  
                </Route>
              </header>
            </div>
          </BrowserRouter>
        </CartProvider>
      </div>
    );
  }
}
