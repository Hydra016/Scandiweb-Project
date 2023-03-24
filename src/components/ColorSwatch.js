import React, { Component } from 'react'

export default class ColorSwatch extends Component {
    constructor(props) {
        super(props);
        this.state = false;
    }

    getSelectedColor = (selected, value) => {
      if(selected === value) {
        return <div style={{ width: 20, height: 20, backgroundColor: value, border: '3px solid #000', marginRight:10 }}></div>
      }
      return <div style={{ width: 20, height: 20, backgroundColor: value, marginRight:10 }}></div>
    }

  render() {
    const value = this.props.value
    if(this.props.selected) {
      var selected = this.props.selected.Color
    }
    
    return (
      <>
      {
        selected ? this.getSelectedColor(selected, value) : (
          <div style={{ width: 20, height: 20, backgroundColor: value }}></div>
        )
      }        
      </>
    )
  }
}
