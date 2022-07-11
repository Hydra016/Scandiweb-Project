import React from 'react';
import ImageCarousel from '../components/ImageCarousel';
import { fetchSingleItem, fetchCurrencyChange, postCartItems } from '../actions';
import { connect } from 'react-redux';
import Attributes from '../components/Attributes';
import { Link } from 'react-router-dom';

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.setAttributes.bind(this);
    }

    componentDidMount = () => {
        const { id } = this.props.match.params
        this.props.fetchSingleItem(id)
    }

    // componentDidUpdate(prevProps, prevState) {
    //     const item = this.props.item;

    //     if (this.state === prevState) {
    //         if (item) {
    //             this.setState({
    //                 ...this.state,
    //                 id: item.id,
    //                 img: item.gallery[0],
    //                 brand: item.brand,
    //                 name: item.name,
    //                 inStock: item.inStock
    //             })
    //         }
    //     }
    //   }

    setAttributes = (name, value) => {
        this.setState({ ...this.state, [name]: value })
        const item = this.props.item;
        if (item) {
            this.setState({
                ...this.state,
                id: item.id,
                img: item.gallery,
                brand: item.brand,
                name: item.name,
                inStock: item.inStock,
                attributes: item.attributes,
                qty: 1
            })
        }
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

    handleSubmit = () => {
        const item = this.props.item;
        if(item) {
            const attributes = item.attributes;
            let result = [];
            attributes.map(el => {
                result.push(el.name in this.state)
            })
            let final = result.every(el => el===true);
            if(final) {
                this.props.postCartItems(this.state)
                alert('item added')
            } else {
                alert('please select all')
            }
        }
    }

    renderItem() {
        const item = this.props.item;
        if (item) {
            return (
                <div className="items">
                    <ImageCarousel item={item.gallery} />
                    <div className="item_description">
                        <Attributes item={item} setAttributes={this.setAttributes} />
                        <div className="item_others">
                            <div className="item_amountandprice">
                                <p className="item_price">price</p>
                                {this.renderPrice(item.prices)}
                            </div>
                            {item.inStock ? (
                                <Link to={'/'} onClick={this.handleSubmit} className="item_addToCart">Add To Cart</Link>
                            ) : (
                                <button disabled className="item_addToCart_disabled">Add To Cart</button>
                            )}
                            
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

    displayCartData = () => {
        if(this.props.cartItems) {
            console.log(this.props.cartItems)
        }
    }

    render() {
        console.log(this.props.cartItems)
        return (
            <>
                {this.renderItem()}
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return { item: state.allItems.product, currency: state.currency, cartItems: state.cartItems }
}

export default connect(mapStateToProps, { fetchSingleItem, fetchCurrencyChange, postCartItems })(Item)