import React, { Component } from "react";

class HomeContenedor extends Component {
    constructor(props) {
        super(props);
    }

    render() {
      return <p>¡Saludos, {this.props.greeting}!</p>;
    }
}

export default HomeContenedor;