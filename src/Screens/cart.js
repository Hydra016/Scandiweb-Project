import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import items from './items';
import ImageSlider from '../components/ImageSlider';
import { quantityInc, quantityDec, removeItem } from '../actions'

class Cart extends React.Component {
    renderItems = () => {
        if (this.props.items) {
            return this.props.items.map(el => {
                return (
                    <>
                        <div class="cart_item">
                            <div class="cart_item_desc">
                                <p class="cart_item_heading">
                                    {el.brand}
                                </p>
                                <p class="cart_item_paragraph">
                                    {el.name}
                                </p>
                                <p class="cart_item_price">
                                    $50.00
                                </p>
                                <div class="cart_item_size">
                                    <a href="#" class="size_box_el">
                                        <div class="item_size_box">
                                            S
                                        </div>
                                    </a>
                                    <a href="#" class="size_box_el">
                                        <div class="item_size_box">
                                            M
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="cart_item_info">
                                <div class="cart_item_incdec">
                                    <a onClick={() => this.props.quantityInc(el)} class="size_box_el">
                                        <div class="cart_item_change">
                                            +
                                        </div>
                                    </a>
                                    <p class="cart_item_num">
                                        {el.qty}
                                    </p>
                                    <a onClick={() => {
                    if(el.qty > 1) {
                        this.props.quantityDec(el)
                    } else {
                        this.props.removeItem(el)
                    }
                }} class="size_box_el">
                                        <div class="cart_item_change">
                                            -
                                        </div>
                                    </a>
                                </div>
                                <ImageSlider images={el.img} dynamicClass='cart_item_image' />
                            </div>
                        </div>
                    </>
                )
            })
        }
    }

    render() {
        console.log(this.props.items)
        return (
            <div className="cart">
                <p class="cart_heading">cart</p>

                {this.renderItems()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { items: state.cartItems }
}

export default connect(mapStateToProps, { quantityInc, quantityDec, removeItem })(Cart);