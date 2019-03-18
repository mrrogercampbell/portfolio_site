import React, { Component } from 'react';
import './ProjectList.css'

class ProjectList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            projectName: '',
        }
        this.mouseOver = this.mouseOver.bind(this)
    }
    mouseOver(evt) {
        this.setState({ [evt.target.name]: evt.target.value })
        console.log(this.state.projectName)
        console.log(this.state)
        console.log('MouseOver Ran!')
    }
    render() {
        return (
            <div className='project-list'>
                <ul>
                    {/* how to setState with onMouseEnter?? */}
                    <li className='project-name' onMouseEnter={this.mouseOver} data='project' name='projectOne'>Project 1</li>
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