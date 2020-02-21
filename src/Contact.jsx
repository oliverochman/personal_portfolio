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
    const contacts = [
      <div className='each-slide'>
      <span><Icon size='big' name='facebook square icon'/> Emma-Maria Thalen</span>,
      <span><Icon size='big' name='linkedin symbol'/> Emma-Maria Thalen</span>
      </div>
      // <span><Icon size='big' name='facebook square icon'/> Emma-Maria Thalen</span>,
      // <span><Icon size='big' name='envelope icon'/> thalen.emma@gmail.com</span>,
      // <span><Icon size='big' name='mobile alternate icon'/> +46(0)76-105 8101</span>
    ]
      return (
        <div className='slide-container'>
          {contacts.map = (contact => {
            return (
          
          <Slide {...properties}>
            {/* <div className='each-slide'> */}
              <div>
                {contact}
              </div>
            {/* </div> */}
            </Slide>
            )
          })}
          
          <img id='contact-pic' src='/src/images/rose.jpeg'/>
        </div>
      )
  }
  
  export default Contact;