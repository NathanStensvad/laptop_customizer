//This is the cart list on the right of the page
//It contains the items for the cart

import React, { Component } from 'react';
import './CartList.css';
import CartItems from '../CartItems/CartItems';
import CartTotal from '../CartTotal/CartTotal';

class CartList extends Component {
    render() {
        return (
            <section className="main__summary">
                <h2>Your cart</h2>
                <CartItems selected={this.props.selected}/>
                <CartTotal totalCurrency={this.props.totalCurrency}/>
            </section>
        )
    }
}

export default CartList;