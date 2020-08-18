import React, { Component } from "react";
import Swiper from "swiper/dist/js/swiper.js";
import { _getBanner } from '../../../server'
import "swiper/dist/css/swiper.min.css";
import "./Banner.css";
class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <div className="swiper-container banner _contentM94 ">
                <div className="swiper-wrapper">
                    {
                        this.props.bannerList.map((item, i) => {
                            return (
                                <div className="swiper-slide li" key={i}>
                                    <img src={item.pic} alt='' />
                                    <div className={item.titleColor+' typeTitle'}>{item.typeTitle}</div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="pagination" />
            </div>
        );
    }
    componentDidMount() {

    }
    componentDidUpdate() {
        const that = this; //先存一下this，以防使用箭头函数this会指向我们不希望它所指向的对象。
        that.swiper = new Swiper(".banner", {
            pagination: {
                el: ".banner .pagination"
            },
            spaceBetween: 20,
            speed:300,
            loop: true,
            autoplay: {
                delay: 4000,
                stopOnLastSlide: false,
                disableOnInteraction: false,
            },
        });
    }
}
export default Banner;
