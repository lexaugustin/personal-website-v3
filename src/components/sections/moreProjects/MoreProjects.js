import React, {Component} from 'react';

import ProjectCard from './projectCard/ProjectCard'
import styles from './MoreProjects.module.css'

import data from '../../../data/Data'

class MoreProjects extends Component {

    state = {
        showMoreProjects: false
    }


    showLessProjects = () => {
        this.setState({
            showMoreProjects: false
        })
    }

    showMoreProjects = () => {
        console.log("More");
        this.setState({
            showMoreProjects: true
        })
    }

    render(){

        const projects = data.projects.map(project => {
            return (
                <li className={styles.project}>
                    <ProjectCard
                        name={project.name}
                        platform={project.platform}
                        description={project.description}
                    />
                </li> 
            )
        })

        let displayProjects = projects.slice(0,3);

        let projectsToggleButton = (
            <div 
                id={styles.seeMoreButton}
                onClick={this.showMoreProjects}
            >
                See More Projects<i className="fas fa-long-arrow-alt-right"></i>
            </div>
        )

        if(this.state.showMoreProjects) {
            displayProjects = projects;

            projectsToggleButton = (
                <div 
                    id={styles.seeMoreButton}
                    onClick={this.showLessProjects}
                >
                    See Less Projects<i className="fas fa-long-arrow-alt-right"></i>
                </div>
            )
        }

        console.log(data)

        return (
            <div className={styles.content}>

                <ul className={styles.cards}>
                    {displayProjects}
                </ul>

                {projectsToggleButton}
            </div>
        )
    }
}

export default MoreProjects;