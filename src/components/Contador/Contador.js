import React, { Component } from 'react';
import Button from './Button';
import '../../css/Contador.css';

export default class Contador extends Component {
    constructor(props) {
        super(props);
        this.state = {
          count: 0,
          cardType: this.props.cardType
        }
        this.lowerLimit = 0;
        this.upperLimit = 3;
    }

    handleChange = (event) => {
        this.setState({
            count: event.target.value
        });
    }

    handleAdd = () => {
        if(this.state.count < this.upperLimit) {
            this.setState((state) => ({
                count: state.count + 1
            }));
        } else {
            alert('No se permiten llevar más de 3 copias de una carta en un deck');
        }
    }
    
    handleSubstract = () => {
        if(this.state.count > this.lowerLimit) {
            this.setState((state) => ({
                count: state.count - 1
            }));
        }
    }

    render() {
        return (
            <div className='Contador'>
                <div className={`Buy-button ${this.state.cardType}`}>
                    <span id="amount-span" amount={this.state.count}>{this.state.count} copias seleccionadas</span>
                </div>
                <Button onClick={this.handleSubstract} operator={'-'}></Button>
                <Button onClick={this.handleAdd} operator={'+'}></Button>
            </div>
        )
    }
}