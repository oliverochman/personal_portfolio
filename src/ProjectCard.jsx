import React from 'react';

const ProjectCard = ({ project }) => {
    return (
        <div>
            <div class='ui cards' style={{marginBottom: 20}} >
                <div class='card'>
                <div class='image'>
                    <img src={project.image}/>
                </div>
                <div class='content'>
                    <h3 class='ui header'>{project.name}</h3>
                    <div class='description'>{project.description}</div>
                    <div class='ui bottom attached button'>
                        Show Project <br/>
                    <i class="external alternate icon"></i> 
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;