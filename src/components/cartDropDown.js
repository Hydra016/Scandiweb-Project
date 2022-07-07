import React from 'react';
import productC from './Product C.png';
import productD from './Product D.png'
import { Link } from 'react-router-dom';

class CartDropDown extends React.Component {
    render() {
        return (
            <div className="cart_view">
            <div className="cart_view_header">
                <p className="cart_view_header-text">
                    My Bag,
                </p>
                <p className="cart_view_header-item">
                    2 items
                </p>
            </div>
            <div className="cart_view_item">
                <div className="cart_view_item-info">
                    <div>
                    <p className="cart_view_item-text">Apollo</p>
                    <p className="cart_view_item-text">Running Short</p>
                    <p className="cart_view_item-price">$50.00</p>
                    </div>
                    <div className="cart_view_item-sizes">
                        <a href="#" className="cart_view_item-sizeLink">
                            <div className="cart_view_item-sizeBox">
                                    S
                            </div>
                        </a>
                        <a href="#" className="cart_view_item-sizeLink">
                            <div className="cart_view_item-sizeBox">
                                    M
                            </div>
                        </a>
                    </div>
                </div>
                <div className="cart_view_item-image">
                    <div className="cart_view-incdec">
                        <a href="#" className="cart_view_link">
                            <div className="cart_view-size">
                                    +
                            </div>
                        </a>
                        <p className="cart_view_num">
                            1
                        </p>
                        <a href="#" className="cart_view_link">
                            <div className="cart_view-size">
                                    -
                            </div>
                        </a>
                    </div>
                    <img src={productD} alt="" className="cart_view_item-img" />
                </div>
            </div>
    
            <div className="cart_view_item">
                <div className="cart_view_item-info">
                    <div>
                    <p className="cart_view_item-text">Apollo</p>
                    <p className="cart_view_item-text">Running Shirt</p>
                    <p className="cart_view_item-price">$75.00</p>
                    </div>
                    <div className="cart_view_item-sizes">
                        <a href="#" className="cart_view_item-sizeLink">
                            <div className="cart_view_item-sizeBox">
                                    S
                            </div>
                        </a>
                        <a href="#" className="cart_view_item-sizeLink">
                            <div className="cart_view_item-sizeBox">
                                    M
                            </div>
                        </a>
                    </div>
                </div>
                <div className="cart_view_item-image">
                    <div className="cart_view-incdec">
                        <a href="#" className="cart_view_link">
                            <div className="cart_view-size">
                                    +
                            </div>
                        </a>
                        <p className="cart_view_num">
                            1
                        </p>
                        <a href="#" className="cart_view_link">
                            <div className="cart_view-size">
                                    -
                            </div>
                        </a>
                    </div>
                    <img src={productC} alt="" className="cart_view_item-img" />
                </div>
            </div>
    
    
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

export default CartDropDown;