import React from 'react';
import { Icon, Popup } from 'semantic-ui-react';

const About = () => {
const infos = [
    "I'm 25 years old and still dreaming about how it will be when I grow up", 
    "I live in Västerås, a small town outside of Stockholm, in Sweden",
    "I'm right now studying at Craft Academy to become a Junior Developer",
    "I can make the best Old Fashion that you probably ever tasted",
    "I have competed up to international Grand Prix in Showjumping" ]
    return (
        <div className='ui main container' >
            <h1 id='about-header' className='ui header'>About Me</h1>
            <div id='about-backgroud' style={{ background: 'url("./src/images/flowergirl.jpeg")', backgroundSize: 'cover', height: '100vh'}} >
                <div>
                    {infos.map (info => {
                        return (
                            <p id='popups'>                                   
                                <Popup
                                    trigger={<Icon size='huge' circular name='lemon outline' />}
                                    content={info}
                                    size='huge'
                                    offset='0, 50px'
                                    position='right center'
                                    font= 'Courier'
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