import React, { Component } from 'react';
import Item from './Item';
import '../css/ItemList.css';

export default class ItemList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [],
            loading: true,
            id: this.props.id
        }
    }

    fetchCards = () => {
        let url = 'https://db.ygoprodeck.com/api/v7/cardinfo.php'
        this.state.id ? url = url + '?id=' + this.state.id : url = url + '?archetype=Blue-Eyes&num=6&offset=0'
        fetch(url).then(data => {
            return data.json();
        }).then(results => {
            let cards = results.data.map((card) => {
                return card
            })
            this.setState({cards: cards, loading: false})
        })
    }

    componentDidMount() {
        setTimeout(() => {
            this.fetchCards()
        }, 10);
    }

    render() {
        return (
            <div className="cards-container">
                {this.state.loading ? <div>Getting the best hand...</div> : this.state.cards.map(element => <Item id={this.state.id} data={element} />)}
            </div>
        )
    }
}