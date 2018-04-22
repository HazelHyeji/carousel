import React, { Component } from 'react';
import './Carousel.css';
export class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageWidth: 800,
            scrollMove: 0,
            indicatorActive: 0,
            frames:
                [
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/One_TV_Logo.svg/2000px-One_TV_Logo.svg.png",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd7AlD92fsMz_G4Rzum9f_xLfB-TwlFNvmwsSG2cmpVrEu_O79",
                    "http://phones.dzyne.net/wp-content/uploads/2013/10/Three-Mobile-Phones-Logo.jpg",
                    "https://www.thesun.co.uk/wp-content/uploads/2017/01/mobile-image-channel4-black.jpg?strip=all&w=750&h=352&crop=1",
                    "http://patrickmulick.com/wp-content/uploads/2017/08/five.jpg",
                    "https://media-cdn.tripadvisor.com/media/photo-s/09/58/b9/b6/six.jpg",
                    "http://www.courtmetrange.eu/images/unis-vers-7-arrive.png",
                    "https://i.ytimg.com/vi/LYUJYLD1XR0/maxresdefault.jpg",
                    "https://imageresizer.static9.net.au/PC2gg12dQB_JUtuNHqXClisq1mw=/1920x0/https%3A%2F%2Fs3-ap-southeast-2.amazonaws.com%2Fvms-tv-images-prod%2F2015%2F11%2F11%2F9_Colour_RGB.png",
                    "https://cdn.vox-cdn.com/thumbor/JiAq71flI9bQ8nTOKOCF0YwB6eQ=/0x0:2040x1361/1200x800/filters:focal(857x518:1183x844)/cdn.vox-cdn.com/uploads/chorus_image/image/58559945/mswindows2_2040.0.0.jpg",
                    "https://cdn.lonerwolf.com/wp-content/uploads/2017/05/11-11-Meaning-min.jpg",
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Big_12_Conference_%28cropped%29_logo.svg/1200px-Big_12_Conference_%28cropped%29_logo.svg.png",
                    "http://www.izodiaque.com/wp-content/uploads/2017/07/Number-13.jpg",
                ],
        };
    }

    buttonClickLeft = () => {
        this.setState({
            scrollMove: this.state.scrollMove - this.state.imageWidth,
            indicatorActive: this.state.indicatorActive - 1,
        });
        const { carouselViewport } = this.refs;
        carouselViewport.scrollLeft = this.state.scrollMove;
    }

    buttonClickRight = () => {
        this.setState({
            scrollMove: this.state.scrollMove + this.state.imageWidth,
            indicatorActive: this.state.indicatorActive + 1,
        });
        const { carouselViewport } = this.refs;
        carouselViewport.scrollLeft = this.state.scrollMove;
        console.log(this.state.scrollMove / this.state.imageWidth, this.state.indicatorActive);
    }
    
    render() {
        const sliderRender =  this.state.frames.map((frame, i) => (
            <li><img width="800px" height="300px" src={frame} alt="carousel-images"></img></li>
        ))
        const indicatorRender =  this.state.frames.map(dd => <dd className={ this.state.indicatorActive === this.state.scrollMove / this.state.imageWidth ?  "active" : null }></dd>)
        return (
            <div className="carousel-container">
                <div className="carousel-wrapper">
                    <button 
                        onClick={this.state.scrollMove <= this.state.imageWidth * (this.state.frames.length + 1) && this.state.scrollMove >= 0 ? this.buttonClickLeft : undefined }
                    >left</button>
                    <ul ref="carouselViewport">
                        { sliderRender }
                    </ul>
                    <button 
                        onClick={this.state.scrollMove >= this.state.imageWidth * (this.state.frames.length + 1) ? undefined : this.buttonClickRight}
                        >right</button>
                    <dl className="indicator">
                        { indicatorRender }
                    </dl>
                </div>
            </div>
        )
    }
};

export default Carousel;
