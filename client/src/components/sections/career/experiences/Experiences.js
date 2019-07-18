import React, {Component} from 'react';

import Experience from './experience/Experience'
import secIcon from '../../../../img/career/experiences/sec.png';
import exxonMobilIcon from '../../../../img/career/experiences/exxonMobil.png';
import visaIcon from '../../../../img/career/experiences/visa.png';

import experiencesIcon from '../../../../img/career/interests/interests.png';

import Header from '../../../common/header/Header';
import Subheader from '../../../common/subheader/Subheader';
import aboutIcon from '../../../../img/icons/person.svg'

import styles from './Experiences.module.css'

class Experiences extends Component {
    render() {
        return (
            <div id={styles.content}>
    
                <div className={styles.icons}>
                    <img src={experiencesIcon}/>
                </div>
    
                <div className={styles.experiences}>
                    <Subheader
                        icon="far fa-heart"
                        title="Software development area of interest"
                    />
                    
                    <Experience
                        logo = {exxonMobilIcon}
                        company = "Exxon Mobile"
                        position = "UI/UX Researcher"
                        date = "March 2019 - April 2019"
                        location="Gainesville, Florida"
                    >
                        <ul>
                            <li>Worked on the design process of an event web application</li>
                            <li>interviewed clients, defined use personas, created user stories and generated ideas for design</li>
                            <li>Created wireframes and designed a prototype of the application using Sketch App</li>
                        </ul>
                    </Experience>
                </div>
    
            </div>
        )
    }
}

export default Experiences;





