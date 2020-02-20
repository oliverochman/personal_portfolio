import React from "react";
import { Slide } from "react-slideshow-image";


const slideImages = [
    'src/images/linkedin.jpeg',
    'images/instagram.jpeg',
    'images/facebook.jpeg'
  ];
   
  const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    onChange: (oldIndex, newIndex) => {
      console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    }
  }
   
  const Contact = () => {
      return (
        <div className="slide-container">
          <Slide {...properties}>
            <div className="each-slide">
              <div>
                <span><i class="instagram icon"></i> @emthalen</span>
              </div>
            </div>
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
                <span><i class="linkedin icon"></i>Emma-Maria Thalen</span>
              </div>
            </div>
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
                <span><i class="facebook square icon"></i>Emma-Maria Thalen</span>
              </div>
            </div>
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
                <span><i class="envelope icon"></i>thalen.emma@gmail.com</span>
              </div>
            </div>
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
                <span><i class="mobile alternate icon"></i>+46(0)76-105 8101</span>
              </div>
            </div>
          </Slide>
        </div>
      )
  }
  
  export default Contact