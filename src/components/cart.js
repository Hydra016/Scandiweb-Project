import React from 'react';
import { Link } from 'react-router-dom';

class Cart extends React.Component {
    render() {
        return (
            <div class="cart">
            <p class="cart_heading">cart</p>
            <div class="cart_item">
                <div class="cart_item_desc">
                    <p class="cart_item_heading">
                        Apollo
                    </p>
                    <p class="cart_item_paragraph">
                        Running Short
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
                        <a href="#" class="size_box_el">
                            <div class="cart_item_change">
                                    +
                            </div>
                        </a>
                        <p class="cart_item_num">
                            1
                        </p>
                        <a href="#" class="size_box_el">
                            <div class="cart_item_change">
                                    -
                            </div>
                        </a>
                    </div>
                    <div class="cart_item_img">
                        <img src="Product D.png" alt="" class="cart_item_image" />
                        <div class="cart_item_link-align">
                            <div class="cart_xyz">
                                <a href="#" class="cart_item_link">&#60;</a>
                            <a href="#" class="cart_item_link">&#62;</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="cart_item">
                <div class="cart_item_desc">
                    <p class="cart_item_heading">
                        Apollo
                    </p>
                    <p class="cart_item_paragraph">
                        Running Short
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
                        <a href="#" class="size_box_el">
                            <div class="cart_item_change">
                                    +
                            </div>
                        </a>
                        <p class="cart_item_num">
                            1
                        </p>
                        <a href="#" class="size_box_el">
                            <div class="cart_item_change">
                                    -
                            </div>
                        </a>
                    </div>
                    <div class="cart_item_img">
                        <img src="Product D.png" alt="" class="cart_item_image" />
                        <div class="cart_item_link-align">
                            <div class="cart_xyz">
                                <a href="#" class="cart_item_link">&#60;</a>
                                <a href="#" class="cart_item_link">&#62;</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Cart;