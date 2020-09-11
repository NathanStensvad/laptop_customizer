//This is the cart list on the right of the page
//It contains the items for the cart

import React, { Component } from 'react';
import './CartList.css';
import CartItems from '../CartItems/CartItems';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

class CartList extends Component {
    render() {
        return (
            <section className="main__summary">
                <h2>Your cart</h2>
                <CartItems selected={this.props.selected}/>
                <div className="summary__total">
                    <div className="summary__total__label">Total</div>
                    <div className="summary__total__value">
                        {USCurrencyFormat.format(this.props.totalCurrency)}
                    </div>
                </div>
            </section>
        )
    }
}

export default CartList;