import React from 'react';
import { Icon, Popup } from 'semantic-ui-react';

const About = () => {
const numbers = [
    "I'm 25 years old", 
    "I live in Västerås, small town outside of Stockholm, in Sweden",
    "I'm right now stuying at Craft Academt to become a Junior Developer",
    "I can make the best Old Fashion that you probably ever tasted",
    "I have competed up to international Grand Prix in Showjumping" ]
    return (
        <div className='ui main container' >
            <h1 id='about-header' className='ui header'>About Me</h1>
            <div id='about-backgroud' style={{ background: 'url("./src/images/me.jpeg")', backgroundSize: 'cover', height: '100vh'}} >
                <div>
                    {numbers.map(number => {
                        return (
                            <p id='popups'>                                   
                                <Popup
                                    trigger={<Icon size='huge' circular name='gem' />}
                                    content={number}
                                    size='huge'
                                    offset='0, 50px'
                                    position='right center'
                                />
                            </p>
                        )
                    })}    
                    
                </div>
            </div>
        </div>
    );
};

export default About;

