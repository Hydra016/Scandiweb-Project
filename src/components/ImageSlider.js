import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

export default class ImageSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgIndex: 0,
            count: 0
        };
    }
    setImage = (direction) => {
        const images = this.props.images;
        if (this.state.imgIndex !== images.length - 1 && direction == 'right') {
            this.setState({ ...this.state, imgIndex: this.state.imgIndex + 1 })
        } else if (this.state.imgIndex !== 0 && direction === 'left') {
            this.setState({ ...this.state, imgIndex: this.state.imgIndex - 1 })
        } else if (this.state.imgIndex === images.length - 1 && direction === 'right') {
            this.setState({ ...this.state, imgIndex: 0 })
        } else if (this.state.imgIndex === 0 && direction === 'left') {
            this.setState({ ...this.state, imgIndex: images.length - 1 })
        }
    }

    renderImage = () => {
        const images = this.props.images;
        const propClass = this.props.dynamicClass;
        return (
            <div>
                {images.length !== 1 ? (
                    <div className="cart_item_img">
                    <img src={images[this.state.imgIndex]} alt="" className={propClass} />
                    <div className="cart_item_link-align">
                        <div className="cart_xyz">
                            <a onClick={() => this.setImage('right')} className="cart_item_link">&#60;</a>
                        <a onClick={() => this.setImage('left')} className="cart_item_link">&#62;</a>
                        </div>
                    </div>
                </div>
                ) : <img src={images[0]} alt="" className={propClass} />}
            </div>
        )
    }

    render() {
        return (
            <div>{this.renderImage()}</div>
        )
    }
}
