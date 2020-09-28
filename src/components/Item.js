import React, { Component } from 'react';
import Contador from './Contador/Contador';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import '../css/icons.css';
import { NavLink } from 'react-router-dom';

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardInfo: this.props.data,
      id: this.props.id
    }
    console.log(this.state)
  }

  render() {
    return (
      <div className="card-container" id={this.state.cardInfo.id}>
        <NavLink to={`/product/${this.state.cardInfo.id}`}>
          <div className='card-Image'>
            <img src={this.state.id? this.state.cardInfo.card_images[0].image_url : this.state.cardInfo.card_images[0].image_url_small} alt={this.state.cardInfo.name}/>
          </div>
        </NavLink>
        <p><u>Nombre:</u> {this.state.cardInfo.name}</p>
        <p><u>Tipo:</u> {this.state.cardInfo.type}</p>
        <p><u>Arquetipo:</u> {this.state.cardInfo.archetype}</p>
        <p><u>Precio estimado:</u> US${this.state.cardInfo.card_prices[0].amazon_price}</p>
        <span className='card-buy-span'>Comprar: </span><Contador /><NavLink to='/cart/'><i className='fa fa-shopping-cart'></i></NavLink>
      </div>
    )
  }
}