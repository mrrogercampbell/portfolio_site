import React, { Component } from 'react';
import './ProjectList.css'

class ProjectList extends Component {
    render() {
        return (
            <div className='project-list'>
                <ul>
                    <li className='project-name'>Project 1</li>
                    <li className='project-name'>Project 2</li>
                    <li className='project-name'>Project 3</li>
                    <li className='project-name'>Project 4</li>
                    <li className='project-name'>Project 5</li>
                </ul>
            </div>
        );
    }
}

export default ProjectList;