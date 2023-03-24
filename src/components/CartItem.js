import React, { Component } from 'react'
import item from '../Screens/item'
import ColorSwatchDropdown from './ColorSwatchDropdown'
import ImageSlider from './ImageSlider'
import CartAttribute from './CartAttribute'
import QuantitySwitcher from './QuantitySwitcher'

export default class CartItem extends Component {
    render() {
        const items = this.props.item

        const renderItems = () => {
            if (items) {
                return items.map(el => {
                    return (
                        <div key={el.itemId} className="cart_view_item">
                            <div className="cart_view_item-info">
                                <div>
                                    <p className="cart_view_item-text">{el.brand}</p>
                                    <p className="cart_view_item-text">{el.name}</p>
                                    <p className="cart_view_item-price">$75.00</p>
                                </div>
                                <div className="cart_view_item-sizes">
                                    <CartAttribute item={el.attributes} selected={el.selected}/>
                                </div>
                            </div>
                            <div className="cart_view_item-image">
                                <QuantitySwitcher cartItems={el} />
                                <ImageSlider images={el.img} dynamicClass='cart_view_item-img' />
                            </div>
                        </div>
                    )
                })
            } else {
                return <div>no item...</div>
            }
        }

        return (
            <div>
                {renderItems()}
            </div>
        )
    }
}
