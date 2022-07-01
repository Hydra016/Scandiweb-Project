import React from 'react';
import { fetchSingleItem } from '../actions';
import { connect } from 'react-redux';

let init_id;

class Item extends React.Component {
    componentDidMount() {
        const { id } = this.props.match.params
        this.props.fetchSingleItem(id)
    
    }


    render() {
        console.log(init_id)
        console.log(this.props.data)
        return (
            <div className="items">
            <div className="item_panel">
                <a className="item_img_link" href="#">
                    <div className="items_item">
                        <img className="items_img" src="Product D.png" alt="" />
                    </div>
                </a>
                <a className="item_img_link" href="#">
                    <div className="items_item">
                        <img className="items_img" src="Product D.png" alt="" />
                    </div>
                </a>
                <a className="item_img_link" href="#">
                    <div className="items_item">
                        <img className="items_img" src="Product D.png" alt="" />
                    </div>
                </a>
            </div>
            <div className="current_item">
                <img className="item_img" src="Product D.png" alt="" />
            </div>
            <div className="item_description">
                <div className="item_desc">
                    <p className="item_desc_heading">Apollo</p>
                    <p className="item_desc_paragraph">Running Shorts</p>
                </div>
                <div className="item_sizes">
                    <p className="item_size_paragraph">
                        Size:
                    </p>
                    <div className="item_size_boxes">
                        <a href="#" className="size_box_el">
                        <div className="item_size_box">
                                XS
                        </div>
                        </a>

                        <a href="#" className="size_box_el">
                        <div className="item_size_box">
                                S
                        </div>
                        </a>

                        <a href="#" className="size_box_el">
                        <div className="item_size_box">
                                M
                        </div>
                        </a>

                        <a href="#" className="size_box_el">
                        <div className="item_size_box">
                                L
                        </div>
                        </a>
                    </div>
                </div>
                <div className="item_others">
                    <div className="item_amountandprice">
                        <p className="item_price">price</p>
                    <p className="item_amount">$50.00</p>
                    </div>
                    <button className="item_addToCart">Add To Cart</button>
                </div>
                <div className="item_info">
                    <p className="item_info_paragraph">
                        Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.
                    </p>
                </div>
            </div>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { item: state.allItems.product}
}

export default connect(mapStateToProps, { fetchSingleItem })(Item)