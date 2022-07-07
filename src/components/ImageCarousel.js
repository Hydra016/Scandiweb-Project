import React, { Component } from 'react'

export default class ImageCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: this.props.item[0]
        };
    }

  render() {
    return (
        <>
        <div className="item_panel">
        {
            this.props.item.map((el) => {
                return (
                    <a key={el} className="item_img_link" onClick={() => this.setState({ image: el })}>
            <div className="items_item">
                <img className="items_img" src={el} alt="" />
            </div>
        </a>
                ) 
            })
        }
    </div>
    <div className="current_item">
    <img className="item_img" src={this.state.image} alt="" />
</div>
</>
    )
  }
}
