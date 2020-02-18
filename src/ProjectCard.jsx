import React from 'react';

const ProjectCard = ({ project }) => {
    return (
        <div>
            <div class='ui card'>
                <div class='image'>
                    <img src={project.image}/>
                </div>
                <div class='content'>
                    <h3 class='ui header'>{project.name}</h3>
                    <p class='description'>{project.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;