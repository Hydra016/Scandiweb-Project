import React, { Component } from 'react'

export default class TextSwatch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: false
        };
    }

    render() {
        const el = this.props.el
        const name = this.props.name
        return (
            <div>
                <a onClick={() => {
                    this.props.setAttributes(name, el.value)
                    this.setState({...this.state, selected: true})
                    }} className={this.state.selected ? 'item_selected' : 'size_box_el'}>
                    <div className="item_size_box">
                        {el.value}
                    </div>
                </a>
            </div>
        )
    }
}
