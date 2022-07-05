import React from 'react';
import { FiShoppingCart } from "react-icons/fi";
import CartDropDown from './cartDropDown';
import { getCategoryItems, fetchTitleChange, fetchCurrencyChange } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'All',
            currency: 'USD'
        };
    }
    componentDidMount() {
        this.props.fetchTitleChange(this.state.title.toLowerCase())
    }

    renderClass(name) {
        return this.state.title === name ? 'navbar_link_selected' : 'navbar_link'
    }

    componentDidUpdate = (prevState, prevProps) => {
        if (prevProps.title !== this.state.title) {
            this.props.fetchTitleChange(this.state.title.toLowerCase())
        }
        this.props.fetchCurrencyChange(this.state.currency)
    }

    renderCurrency = () => {
        const data = this.props.categoryItems.category
        if (data) {
            return data.products[0].prices.map((el) => {
                return (
                    <option key={el.currency.label} value={el.currency.label}>{el.currency.symbol} {el.currency.label}</option>
                )

            })
        }
    }

    render() {
        return (
            <div className="navbar">
                <div className="navbar_items">
                    <Link to={`/`} className={this.renderClass('All')} onClick={(e) => {
                        // this.setState()
                        this.setState({ title: e.target.textContent })
                        this.props.getCategoryItems('all')
                    }}>
                        <div ref={this.myRef} className="navbar_element">
                            All
                        </div>
                    </Link>
                    <Link to={`/`} className={this.renderClass('Clothes')} onClick={(e) => {
                        this.setState({ title: e.target.textContent })
                        this.props.getCategoryItems('clothes')
                    }}>
                        <div className="navbar_element">
                            Clothes
                        </div>
                    </Link>
                    <Link to={`/`} className={this.renderClass('Tech')} onClick={(e) => {
                        this.setState({ title: e.target.textContent })
                        this.props.getCategoryItems('tech')
                    }}>

                        <div className="navbar_element">
                            Tech
                        </div>
                    </Link>
                </div>
                <div className="navbar_items">
                    <select name="select" id="" className="navbar_element navbar_select" onChange={(e) => this.setState({ currency: e.target.value })}>
                        {this.renderCurrency()}
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

const mapStateToProps = (state) => {
    return { categoryItems: state.categoryItems, currency: state.currency }
}

export default connect(mapStateToProps, { getCategoryItems, fetchTitleChange, fetchCurrencyChange })(Navbar);