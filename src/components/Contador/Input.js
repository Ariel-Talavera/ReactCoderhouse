import React from 'react';

export default function Input(props) {
  return (
    <input className='Contador-input' onChange={props.handleChange} value={props.count}/>
  )
}