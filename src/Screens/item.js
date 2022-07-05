import React from 'react';
import ImageCarousel from '../components/ImageCarousel';
import { fetchSingleItem, fetchCurrencyChange } from '../actions';
import { connect } from 'react-redux';

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: {
                size: null
            }
        };
    }

    componentDidMount() {
        const { id } = this.props.match.params
        this.props.fetchSingleItem(id)

    }

    renderPrice = (price) => {
        const data = this.props.item
        if (data) {
            const prices = price.find((el) => {
                return el.currency.label === this.props.currency
            })
            return <p className="item_amount">{prices.currency.symbol} {prices.amount}</p>
        }
    }

    //rendering detials

    renderDetails = (name, arr) => {
        const item = this.props.item;
        if (item) {
            if(name === "Color") {
                return arr.map(el => {
                    return <a href='#'><div style={{ width: 20, height: 20, backgroundColor: el.value }}></div></a>
                    })
                    
            }
            return (
                <div className="item_sizes">
                    <div>
                        <p className="item_size_paragraph">{name}</p></div>
                    <div>
                        {arr.map(el => {
                            return (
                                <div className="item_size_boxes">
                                    <a href="#" className="size_box_el">
                                        <div className="item_size_box">
                                            {el.value}
                                        </div>
                                    </a>


                                </div>
                            )
                        })}
                    </div>
                </div>
            )
        }
    }

    renderItem() {
        const item = this.props.item;
        if (item) {
            // console.log(item.prices)
            return (
                <div className="items">
                    <ImageCarousel item={item.gallery} />
                    <div className="item_description">
                        <div className="item_desc">
                            <p className="item_desc_heading">{item.brand}</p>
                            <p className="item_desc_paragraph">{item.name}</p>
                        </div>
                            {item.attributes.map(el => {
                                return this.renderDetails(el.name, el.value || el.items)
                            })}
                        <div className="item_others">
                            <div className="item_amountandprice">
                                <p className="item_price">price</p>
                                {this.renderPrice(item.prices)}
                            </div>
                            <button className="item_addToCart">Add To Cart</button>
                        </div>
                        <div className="item_info">
                            <p className="item_info_paragraph">
                                {item.description}
                            </p>
                        </div>
                    </div>
                </div>
            )
        } else {
            return <div>Loading...</div>
        }
    }


    render() {
        // console.log(init_id)
        // console.log(this.props.item)
        return (
            <>
                {this.renderItem()}
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return { item: state.allItems.product, currency: state.currency }
}

export default connect(mapStateToProps, { fetchSingleItem, fetchCurrencyChange })(Item)