import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CartItem from './CartItem';

class CartDropDown extends React.Component {
    render() {
        return (
            <div className="cart_view">
            <div className="cart_view_header">
                <p className="cart_view_header-text">
                    My Bag,
                </p>
                <p className="cart_view_header-item">
                    {this.props.items.length} items
                </p>
            </div>
            <CartItem item={this.props.items} />
            <div className="cart_view_footer">
                <div className="cart_view_footer-info">
                    <p className="cart_view_footer-total">Total</p>
                    <p className="cart_view_footer-amount">$125.00</p>
                </div>
                <div className="cart_view_footer-buttons">
                    <Link to={'/cart'} className="cart_view_footer-button cart_view_footer-view">
                        View Bag
                    </Link>
                    <Link to="/scandiwebproject/cart" className="cart_view_footer-button cart_view_footer-checkOut">
                        Check Out
                    </Link>
                </div>
            </div>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { items: state.cartItems }
}

export default connect(mapStateToProps, {})(CartDropDown);