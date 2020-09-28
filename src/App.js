import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import MainNavbar from './components/Navbar';
import ItemList from './components/ItemList';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Product from "./components/Product";
import Cart from "./components/Cart/Cart";

export default class App extends Component {
  render() {
    return (
      <div>
        <MainNavbar />
        <div className="App">
          <header className="App-header">
            <BrowserRouter>
              <Switch>
                <Route exact path='/'>
                  <ItemList />
                </Route>
                <Route path='/product/:id'>
                  <Product data={this} />
                </Route>
                <Route path='/cart/'>
                  <Cart />
                </Route>
              </Switch>
            </BrowserRouter>
          </header>
        </div>
      </div>
    );
  }
}
