import React from 'react';
import { FiShoppingCart } from "react-icons/fi";
import CartDropDown from './cartDropDown';
// import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar">
            <div className="navbar_items">
            <a className="navbar_link" href="#">
                <div className="navbar_element">
                    All
                </div>
                </a>
            <a className="navbar_link" href="#">
                <div className="navbar_element">
                    Clothes
                </div>
                </a>
            <a className="navbar_link" href="#">

            <div className="navbar_element">
                Tech
            </div>
            </a>
        </div>
        <div className="navbar_items">
            <select name="select" id="" className="navbar_element navbar_select">
                <option value="dollar">$ USD</option>
                <option value="euro">€ EUR</option>
                <option value="yen">¥ JPY</option>
            </select>
            <div className="navbar_icon navbar_item">
                <a href="#">
                    <FiShoppingCart className="cart_icon" />
                </a>
                <CartDropDown />
            </div>
        </div>
    </div>
        )
    }
}

export default Navbar;