import React from "react";
import { Slide } from "react-slideshow-image";
import { Icon } from 'semantic-ui-react'
   
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
          <div lassName='ui main container' >
        <div className="slide-container" >
          <Slide {...properties}>
            <div className="each-slide">
              <div>
                <span><Icon size='huge' name='instagram'/> @emthalen</span>
              </div>
            </div>
            <div className="each-slide">
              <div>
                <span><Icon size='huge' name='linkedin symbol'/>Emma-Maria Thalen</span>
              </div>
            </div>
            <div className="each-slide">
              <div>
                <span><Icon size='huge' name='facebook square icon'/>Emma-Maria Thalen</span>
              </div>
            </div>
            <div className="each-slide">
              <div>
                <span><Icon size='huge' name='envelope icon'/>thalen.emma@gmail.com</span>
              </div>
            </div>
            <div className="each-slide">
              <div>
                <span><Icon size='huge' name='mobile alternate icon'/>+46(0)76-105 8101</span>
              </div>
            </div>
          </Slide>
          <img id='contact-pic' src='/src/images/rose.jpeg'/>
        </div>
        </div>
      )
  }
  
  export default Contact