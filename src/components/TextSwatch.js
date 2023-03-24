import React, { Component } from 'react'

export default class TextSwatch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: false
        };
    }

    getSelectedText = (values, value) => {
        return values.map((el) => {
            if(el === value) {
                return <div style={{color: 'red', fontSize: 20 }}>{value}</div>
              }
              return <div>{value}</div>
        })
      }

    render() {
        const value = this.props.value
        const selected = this.props.selected
        const values = Object.values(selected)
        console.log(values)

        return (
            <div>
                {/* <a onClick={() => {
                    this.props.setAttributes(name, el.value)
                    this.setState({...this.state, selected: true})
                    }} className={this.state.selected ? 'item_selected' : 'size_box_el'}>
                    <div className="item_size_box">
                        {el.value}
                    </div>
                </a> */}
                {this.getSelectedText(values, value)}
            </div>
        )
    }
}
