import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { fetchAll, fetchSingleItem, fetchCurrencyChange, getCategoryItems } from '../actions';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

class Items extends React.Component {


  componentDidMount() {
    // this.props.fetchAll()
    this.props.getCategoryItems(this.props.title)
    // this.props.fetchSingleItem('huarache-x-stussy-le')
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.categoryItems.category) {
      if (prevProps.categoryItems.category.name !== this.props.title) {
        this.props.getCategoryItems(this.props.title)
      }
    }
  }

  renderPrice = (price) => {
    const data = this.props.items.category
    if (data) {
      const prices = price.find((el) => {
        return el.currency.label === this.props.currency
      })
      return <p className="box_item box_price">{prices.currency.symbol} {prices.amount}</p>
    }
  }

  renderItem() {
    if (this.props.items.category) {
      return this.props.items.category.products.map(el => {
        return (
          <div key={el.id} className="box">
            <div className="box_image">
              <img className="img" src={el.gallery[0]} alt="" />
              <Link
                to={`/item/${el.id}`}
                className="cart_link"
              >
                <div className="box_cart">
                  <FiShoppingCart className="cart_icon cart_icon_align" />
                </div>
              </Link>
            </div>
            <h2 className="box_item box_title">{el.name}</h2>
            {this.renderPrice(el.prices)}
          </div>
        )
      })
    } else {
      return (
        <div>Loading...</div>
      )
    }
  }

  render() {
    // console.log(this.props.state)
    return (
      <div>
        <div className="heading">
          <h1>{this.props.title.toUpperCase()}</h1>
        </div>
        <div className="content">
          {this.renderItem()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { state: state, items: state.allItems, item: state.singleItem, currency: state.currency, categoryItems: state.categoryItems, title: state.title }
}

export default connect(mapStateToProps, { fetchAll, fetchSingleItem, fetchCurrencyChange, getCategoryItems })(Items);
