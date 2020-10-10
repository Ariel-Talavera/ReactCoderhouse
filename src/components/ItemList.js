import React, { Component } from 'react';
import Item from './Item';
import Loading from './Loading';
import { getFirestore } from '../firebase';
import '../css/ItemList.css';

export default class ItemList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [],
            loading: true,
            id: this.props.id,
            featured: this.props.featured
        }
    }

    fetchCards = () => {
        // let url = 'https://db.ygoprodeck.com/api/v7/cardinfo.php'
        // this.state.id ? url = url + '?id=' + this.state.id : url = url + '?archetype=Blue-Eyes&num=15&offset=0'
        // fetch(url).then(data => {
        //     return data.json();
        // }).then(results => {
        //     let cards = results.data.map((card) => {
        //         return card
        //     })
        //     debugger
        //     this.setState({cards: cards, loading: false})
        // })

        this.setState({loading: true})
        const db = getFirestore()
        const itemCollection = db.collection('cards');
        if (this.state.id) {
            const item = itemCollection.doc(this.state.id);
            
            item.get().then((doc) => {
                if (!doc.exists) {
                    console.log("Item does not exist!");
                    return true;
                }
                const dataQuery = doc.data();
                let cards = dataQuery;
                this.setState({cards: [cards], loading: false})
            })
            .catch((error) => {
                console.log('Error searching item: ', error);
            })
        } else if (this.state.featured) {
            itemCollection.where('rarity', '==', 'UR').get().then((querySnapshot) => {
                if (querySnapshot.size === 0) {
                    console.log('No data!');
                }
                // setItems(querySnapshot.docs.map(doc => {
                //   return ({ id: doc.id, ...doc.data() });
                // }));
                let cards = querySnapshot.docs.map(card => {
                    let cardData = card.data();
                    cardData["id"] = card.id;
                    return cardData
                })
                this.setState({cards: cards, loading: false})
            })
            .catch((error) => {
                console.log("There was an error trying to get items: ", error);
            })
        } else {
            itemCollection.get().then((querySnapshot) => {
                if (querySnapshot.size === 0) {
                    console.log('No data!');
                }
                // setItems(querySnapshot.docs.map(doc => {
                //   return ({ id: doc.id, ...doc.data() });
                // }));
                let cards = querySnapshot.docs.map(card => {
                    let cardData = card.data();
                    cardData["id"] = card.id;
                    return cardData
                })
                this.setState({cards: cards, loading: false})
            })
            .catch((error) => {
                console.log("There was an error trying to get items: ", error);
            })
        }
    }

    componentDidMount() {
        this.fetchCards()
    }

    render() {
        return (
            <div className="cards-container">
                {this.state.loading ? <Loading/> : this.state.cards.map(element => <Item id={this.state.id} data={element} />)}
            </div>
        )
    }
}