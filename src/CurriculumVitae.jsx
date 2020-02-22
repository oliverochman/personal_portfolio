import React, { Component } from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Icon } from 'semantic-ui-react';
import axios from 'axios'

class Cv extends Component {
    state = {
        cvExperience: []
    };
    componentDidMount() {
        axios.get('./src/data/experience.json')
            .then(response => {
                const cvExperience = response.data
                this.setState({ cvExperience })
            })
    };

    render() {
        return (
            <div className='ui main container' >
                <h1 id='about-header' className='ui header'>My CV</h1>
                
            <VerticalTimeline>
                {this.state.cvExperience.map(experience =>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(255, 255, 255)', color: '#fffff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(255, 255, 255)' }}
                    date={experience.date} 
                    iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fffff'}}
                    icon={<Icon size='huge' name={experience.icon} />}
                > 
                    <h3 className="vertical-timeline-element-title">{experience.title}</h3>
                    <h4 className="vertical-timeline-element-subtitle">{experience.location}</h4>
                    <p>
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