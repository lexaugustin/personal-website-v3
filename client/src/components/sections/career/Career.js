import React, {Component} from 'react'

import Interests from './interests/Interests'
import Experience from './experiences/Experiences'

import styles from "./Career.module.css";

class Career extends Component {

    state = {
        subsection: 1
    }

    displayInterests = () => {
        this.setState({
            subsection: 1
        })
    }

    displayExperiences = () => {
        this.setState({
            subsection: 2
        })
    }

    render(){

        let toDisplay = <Interests/>

        if (this.state.subsection == 1) {
            toDisplay = <Interests/>
        }
        else {
            toDisplay = <Experience/>
        }

        return (
            <div id={styles.career}>
    
                <div id={styles.subsectionButtons}>
                    <button onClick={this.displayInterests}>Interests</button>
                    <button onClick={this.displayExperiences}>Experiences</button>
                </div>
                
                {toDisplay}

            </div>
        )
    }
}

export default Career;
