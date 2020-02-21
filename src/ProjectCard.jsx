import React from 'react';

const ProjectCard = ({ project }) => {
    return (
        <div class='ui card' style={{marginBottom:'10%'}}>
            <a class="image" href={project.link}>
                <img src={project.image}/>
            </a>
                <div class='content'>
                <a class='header' href={project.link}>{project.name}</a>
                    <div class='meta'>
                <p style={{fontWeight: 'bold'}}>{project.description}</p>
                    </div>
                </div>
        </div>
    );
};

export default ProjectCard;