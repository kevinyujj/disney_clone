import React from 'react'
import styled from "styled-components"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function ImgSlider() {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: true
    }
    
    return (
        <Carousel {...settings}>
            <Wrap>
                <img src="/images/slider-badging.jpg" />
            </Wrap>
            <Wrap>
                <img src="/images/slider-badag.jpg" />
            </Wrap>
            {/* <Wrap>
                <img src="https://lumiere-a.akamaihd.net/v1/images/hb_disneyplus_hawkeye_22185_407c8e56.jpeg?region=0,0,2048,878&width=1536" />
            </Wrap> */}
        </Carousel>
    )
}

export default ImgSlider


const Carousel = styled(Slider)`
    margin-top: 20px;
    ul li button {
        &:before {
            font-size: 10px;
            color: white;
        }
    }
    .slick-list {
        overflow: visible;
    }
    button {
        z-index: 1;
    }
`

const Wrap = styled.div`
    cursor: pointer;
    img {
        border: 4px solid transparent;
        border-radius: 4px;
        width: 100%;
        height: 100%;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transition-duration: 300ms;

        &:hover {
            transform: scale(1.02);
            border: 4px solid rgba(249, 249, 249, 0.8);
        }
    }
`
