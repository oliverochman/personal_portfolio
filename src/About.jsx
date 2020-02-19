import React from 'react';
import { Icon, Popup } from 'semantic-ui-react';

const About = () => {
const numbers = ["Jag är 25 år gammla", "Jag bor i Västerås"]
    return (
        <div className='ui main container' >
            <h1 id='about-header' className='ui header'>About Me</h1>
            <div id='about-backgroud' style={{ background: 'url("./src/images/me.jpeg")', backgroundSize: 'cover', height: '100vh'}} >
                <div>
                    <ul>
                        {numbers.map(number => {
                            return (
                               <li>
                                                                      
                                    <Popup
                                        trigger={<Icon circular name='heart' />}
                                        content={number}
                                        size='small'
                                    />
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

