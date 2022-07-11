import React, { Component } from 'react'
import item from '../Screens/item';
import ColorSwatch from './ColorSwatch';

export default class Attributes extends Component {
    constructor(props) {
        super(props);
    }

    renderDetails = (name, arr) => {
        const item = this.props.item;
        const state = this.props.state;
        if (item) {
            if (name === "Color") {
                return arr.map(el => {
                    return <a onClick={() => this.props.setAttributes(name, el.value)}><ColorSwatch value={el.value} /></a>
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
                                    <a onClick={() => this.props.setAttributes(name, el.value)} className="size_box_el">
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

    render() {
        const item = this.props.item;
        return (
            <div>
                <div className="item_desc">
                    <p className="item_desc_heading">{item.brand}</p>
                    <p className="item_desc_paragraph">{item.name}</p>
                </div>
                {item.attributes.map(el => {
                    return this.renderDetails(el.name, el.value || el.items)
                })}
            </div>
        )
    }
}
