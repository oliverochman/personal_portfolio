import React from 'react';
import Popups from './Popup';

const About = () => {
const numbers = ["1", "2"]
    return (
        <div className='ui main container' >
            <h1 id='about-header' className='ui header'>About Me</h1>
            <div id='about-backgroud' style={{ background: 'url("./src/images/me.jpeg")', backgroundSize: 'cover', height: '100vh'}} >
                <div>
                    <ul>
                        {numbers.map(number => {
                            return (
                               <li>
                                    <i aria-hidden="true" class="heart circular icon"></i>                                    
                                    <Popups content={number}/>
                                </li> 
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;

