import React, { Component } from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Icon } from 'semantic-ui-react';
import axios from 'axios';

class Cv extends Component {
    state = {
        cvExperience: []
    };
    componentDidMount() {
        axios.get('./src/data/experience.json')
            .then(response => {
                this.setState({
                    cvExperience: response.data
                })
            })
    };

    render() {
        return (
            <div className='ui main container' >
                <h1 id='cv-header' className='ui header'>My CV</h1>
                <div className="ui grid">
                    <div className="four wide column"></div>
                    <div className="four wide column">
                        <h3 className='column-header'>Personal Skills</h3>
                            <ul>
                                <li>Great team player</li>
                                <li>Commited to the given task</li>
                                <li>Service minded</li>
                                <li>Curious and not afraid of the unknown</li>
                                <li>Responsible and organised</li>
                            </ul>
                    </div>
                    <div className="four wide column">
                    <h3 className='column-header'>Competence</h3>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>React JS</li>
                                <li>Ruby</li>
                                <li>Ruby on Rails</li>
                            </ul>
                    </div>
                    <div className="four wide column"></div>
                </div>
            <VerticalTimeline>
                {this.state.cvExperience.map(experience =>
                    <VerticalTimelineElement
                        key={experience.id}
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(255, 255, 255)', color: '#fffff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(255, 255, 255)' }}
                        date={experience.date} 
                        iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fffff'}}
                        icon={<Icon size='huge' name={experience.icon} />}
                    > 
                        <h3 className="vertical-timeline-element-title">{experience.title}</h3>
                        <h4 className="vertical-timeline-element-subtitle">{experience.location}</h4>
                        <p className='experience-description'>
                        {experience.description}            
                        </p>
                    </VerticalTimelineElement>
                )}
            </VerticalTimeline>
        </div>
        );
    }
}

export default Cv;