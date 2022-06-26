import React from 'react';

class Item extends React.Component {
    render() {
        return (
            <div class="items">
            <div class="item_panel">
                <a class="item_img_link" href="#">
                    <div class="items_item">
                        <img class="items_img" src="Product D.png" alt="" />
                    </div>
                </a>
                <a class="item_img_link" href="#">
                    <div class="items_item">
                        <img class="items_img" src="Product D.png" alt="" />
                    </div>
                </a>
                <a class="item_img_link" href="#">
                    <div class="items_item">
                        <img class="items_img" src="Product D.png" alt="" />
                    </div>
                </a>
            </div>
            <div class="current_item">
                <img class="item_img" src="Product D.png" alt="" />
            </div>
            <div class="item_description">
                <div class="item_desc">
                    <p class="item_desc_heading">Apollo</p>
                    <p class="item_desc_paragraph">Running Shorts</p>
                </div>
                <div class="item_sizes">
                    <p class="item_size_paragraph">
                        Size:
                    </p>
                    <div class="item_size_boxes">
                        <a href="#" class="size_box_el">
                        <div class="item_size_box">
                                XS
                        </div>
                        </a>

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

                        <a href="#" class="size_box_el">
                        <div class="item_size_box">
                                L
                        </div>
                        </a>
                    </div>
                </div>
                <div class="item_others">
                    <div class="item_amountandprice">
                        <p class="item_price">price</p>
                    <p class="item_amount">$50.00</p>
                    </div>
                    <button class="item_addToCart">Add To Cart</button>
                </div>
                <div class="item_info">
                    <p class="item_info_paragraph">
                        Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.
                    </p>
                </div>
            </div>
        </div>
        )
    }
}

export default Item;