import React from 'react';

const ProjectCard = ({ project }) => {
    return (
        <div className="ui card" style={{marginBottom:'10%'}}>
            <a className="image" href={project.link}>
                <img src={project.image}/>
            </a>
                <div className="content">
                <a className="header" href={project.link}>{project.name}</a>
                    <div className="meta">
                <p className="description" style={{fontWeight: 'bold'}}>{project.description}</p>
                    </div>
                </div>
        </div>
    );
};

export default ProjectCard;