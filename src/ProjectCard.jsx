import React from 'react';

const ProjectCard = ({ project }) => {
    return (
        <div className="ui card">
            <a className="image" href={project.link}>
                <img src={project.image}/>
            </a>
            <div className="content">
                <a className="header" href={project.link}>{project.name}</a>
                <div className="meta">
                    <p>{project.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;