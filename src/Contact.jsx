import React from 'react';
import { Slide } from 'react-slideshow-image';
import { Icon } from 'semantic-ui-react';
  
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
    const contactInfo = [
      {name: "envelope", content: "thalen.emma@gmail.com"},
      {name: "mobile alternate", content: "+46(0)76-105 8101"},
      {name: "instagram", content: "@emthalen"},
      {name: "linkedin square", content: "Emma-Maria Thalen"},
      {name: "facebook square", content: "Emma-Maria Thalen"},
    ]
      return (
        <div className='slide-container'>
          <Slide {...properties}>
            {contactInfo.map (info => {
              return (
                <div className='each-slide' key={info.name}>
                  <div>
                    <span><Icon size='big' name={info.name}/>{info.content}</span>
                  </div>
                </div>
              )
            })}

          </Slide>
          <img id='contact-pic' src='/src/images/rose.jpeg'/>
        </div>
      )
  }
  export default Contact;