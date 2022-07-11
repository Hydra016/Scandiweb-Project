import React, { Component } from 'react'

export default class ImageSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgIndex: 0,
            count: 0
        };
    }
    // setImage = (direction) => {
    //     const images = this.props.images;
    //     if (this.state.imgIndex !== images.length) {
    //         if (direction == 'right') {
    //             this.setState({ ...this.state, imgIndex: this.state.imgIndex + 1 })
    //         } else if (direction === 'left') {
    //             this.setState({ ...this.state, imgIndex: this.state.imgIndex - 1 })
    //         }
    //     } else if(this.state.imgIndex === images.length) {
    //         console.log()
    //         console.log(this.state.imgIndex)
    //         this.setState({...this.state, imgIndex: 0})
    //     }
    // }

    nextImage = () => {
        const images = this.props.images;
        if(this.state.imgIndex !== images.length) {
            this.setState({...this.state, imgIndex: this.state.imgIndex + 1})
        } else if (this.state.imgIndex === images.length) {
            this.setState({...this.state, imgIndex: 0})
        }
    }

    setCount = () => {
        this.setState({...this.state, count: this.state.count + 1})
        console.log(this.state.count)
        if(this.state.count === 5) {
            
            console.log('done');
        }
    }

    renderImage = () => {
        const images = this.props.images;

        return (
            <div>
                <img src={images.length !== 1 ? images[this.state.imgIndex] : images[0]} alt="" className="cart_view_item-img" />
                {images.length !== 1 ? (
                    <div className='cart_view_item-img-buttons'>
                        <div>
                            <a onClick={() => this.setImage('left')}>L</a>
                        </div>
                        <div>
                            <a onClick={() => this.nextImage()}>R</a>
                        </div>
                    </div>
                ) : null}
            </div>
        )
    }

    render() {
        // console.log(this.props.images.length)
        // console.log(this.state.imgIndex)
        return (
            <div>{this.renderImage()}</div>
        )
    }
}
