import React, { Component } from 'react'
import item from '../Screens/item'
import ColorSwatchDropdown from './ColorSwatchDropdown'
import ImageSlider from './ImageSlider'

export default class CartItem extends Component {
    render() {
        const items = this.props.item
        const renderItems = () => {
            if (items) {
                return items.map(el => {
                    return (
                        <div className="cart_view_item">
                            <div className="cart_view_item-info">
                                <div>
                                    <p className="cart_view_item-text">{el.brand}</p>
                                    <p className="cart_view_item-text">{el.name}</p>
                                    <p className="cart_view_item-price">$75.00</p>
                                </div>
                                <div className="cart_view_item-sizes">
                                    {
                                        el.attributes.map(attribute => {
                                            return (
                                                <div>
                                                    <div>
                                                        {attribute.name}
                                                    </div>
                                                    <div>
                                                        {/* {attribute.items.map(item => {
                                    if
                                })} */}
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
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
                                <ImageSlider images={el.img} />
                                {/* <img alt="" className="cart_view_item-img" /> */}
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
