import React, { Component } from 'react'
import ColorSwatch from './ColorSwatch'
import TextSwatch from './TextSwatch'

export default class CartAttribute extends Component {
    render() {
        const item = this.props.item
        const selected = this.props.selected

        const renderAttributes = (arr, name) => {
            return arr.map(el => {
                return (
                    <div key={el.id}>
                        {
                            name === 'Color' ? (
                                    <ColorSwatch value={el.value} selected={selected} />
                            ) : (
                                <div className='cart_view-attribute-text'>
                                    <TextSwatch value={el.value} selected={selected} />
                                </div>
                            )
                        }

                    </div>
                )
            })
        }

        const renderItems = () => {
            return item.map(el => {
                return (
                    <div key={el.id}>
                        <div>
                            <h3>{el.name}</h3>
                        </div>
                        <div className='cart_view-attributes'>
                            {renderAttributes(el.items, el.name)}
                        </div>
                    </div>
                )
            })
        }

        return (
            <div>
                {renderItems()}
            </div>
        )
    }
}
