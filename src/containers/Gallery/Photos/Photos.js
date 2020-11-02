import React, { Component } from 'react';
import Slider from 'react-slick';

import './Photos.css'
import Photo from '../../../components/Photo/Photo';
import pictures from '../../../data.json';

class Photos extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 0,
            lazyLoad: true,
            infinite: true,
            responsive: [
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };        
        const arr = []
        Object.keys(pictures).forEach(key => arr.push({name: key, value: pictures[key]}))
        return (            
            <div className="Photos" >
                <h1>Ponuda restorana</h1>
                <Slider {...settings}>
                    {arr.map(picture => (
                        <Photo key={picture} link={picture.value}/>
                    ))}



                </Slider>
            </div>
        );
    };
}

export default Photos;