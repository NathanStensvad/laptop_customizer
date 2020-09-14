//This is the total amount for the cart list

import React, { Component } from 'react';
import './CartTotal.css';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

class CartTotal extends Component {
    render() {
        return (
            <div className="summary__total">
                <div className="summary__total__label">Total</div>
                <div className="summary__total__value">
                    {USCurrencyFormat.format(this.props.totalCurrency)}
                </div>
            </div>
        )
    }
}

export default CartTotal;