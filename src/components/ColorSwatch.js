import React, { Component } from 'react'

export default class ColorSwatch extends Component {
    constructor(props) {
        super(props);
        this.state = false;
    }
  render() {
    const value = this.props.value
    return (
        <div style={{ width: 20, height: 20, backgroundColor: value }}></div>
    )
  }
}
