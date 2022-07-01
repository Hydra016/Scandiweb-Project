import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { fetchAll, fetchSingleItem, fetchCurrencyChange, getCategoryItems } from '../actions';
import product from "./Product D.png";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

class Items extends React.Component {
  componentDidMount() {
    this.props.fetchAll()
    // this.props.fetchSingleItem('huarache-x-stussy-le')
}

  renderItem() {
    if(this.props.items.category) {
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
            <p className="box_item box_price">50$</p>
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
    console.log(this.props.items)

    return (
      <div>
        <div className="heading">
          <h1>Category name</h1>
        </div>
        <div className="content">
        {this.renderItem()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { items: state.allItems, item: state.singleItem, currency: state.currency, categoryItems: state.categoryItems }
}

export default connect(mapStateToProps, { fetchAll, fetchSingleItem, fetchCurrencyChange, getCategoryItems })(Items);
