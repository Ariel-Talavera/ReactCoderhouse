import React, { Component } from 'react';
import Button from './Button';
import Input from './Input';
import '../../css/Contador.css';

export default class Contador extends Component {
    constructor() {
        super();
        this.state = {
          count: 0
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
                <Button onClick={this.handleSubstract} operator={'-'}></Button>
                <Input count={this.state.count} handleChange={this.handleChange}></Input>
                <Button onClick={this.handleAdd} operator={'+'}></Button>
            </div>
        )
    }
}