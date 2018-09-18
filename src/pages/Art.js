import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel';
import './Art.css'
export default function Art(){

  
    return (
        <Carousel>
            <div>
                <img src="https://i.imgur.com/2P91WXM.png" />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src="https://i.imgur.com/2P91WXM.png" />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src="https://i.imgur.com/2P91WXM.png" />
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>
    );



}