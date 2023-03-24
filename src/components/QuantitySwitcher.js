import React, { Component } from 'react'
import { connect } from 'react-redux'
import { quantityInc, quantityDec, removeItem } from '../actions'
import CartItem from './CartItem';

class QuantitySwitcher extends Component {
    render() {
        const cartItem = this.props.cartItems;
        return (
            <div className="cart_view-incdec">
                <a onClick={() => this.props.quantityInc(cartItem)} className="cart_view_link">
                    <div className="cart_view-size">
                        +
                    </div>
                </a>
                <p className="cart_view_num">
                    {cartItem.qty}
                </p>
                <a onClick={() => {
                    if(cartItem.qty > 1) {
                        this.props.quantityDec(cartItem)
                    } else {
                        this.props.removeItem(cartItem)
                    }
                }} className="cart_view_link">
                    <div className="cart_view-size">
                        -
                    </div>
                </a>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {}
}

export default connect(mapStateToProps, { quantityInc, quantityDec, removeItem })(QuantitySwitcher);
