import React, {Component} from 'react';

import ProjectCard from './projectCard/ProjectCard'

import styles from './MoreProjects.module.css'

class MoreProjects extends Component {
    render(){
        return (
            <div className={styles.content}>
                <ul className={styles.cards}>
                    <li><ProjectCard/></li>
                    <li><ProjectCard/></li>
                    <li><ProjectCard/></li>
                </ul>
            </div>
        )
    }
}

export default MoreProjects;