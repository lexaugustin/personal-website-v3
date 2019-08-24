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

    state = {
        active: 'visa'
    }

    setVisaActive = () => {
        this.setState({
            active: 'visa'
        })
    }

    setExxonActive = () => {
        this.setState({
            active: 'exxon'
        })
    }

    setSECActive = () => {
        this.setState({
            active: 'sec'
        })
    }

    setITActive = () => {
        this.setState({
            active: 'it'
        })
    }

    render() {

        var experience = null;

        switch(this.state.active) {
            case ('visa'):
                experience = (
                    <Experience
                    logo = {exxonMobilIcon}
                    company = "Visa"
                    position = "Software Engineering Intern"
                    date = "June 2019 - August 2019"
                    location="Foster City, California"
                    >
                    <ul>
                        <li>Built GraphQL backend service that returns the exacted data required to the client</li>
                        <li>Implemented GraphQL querries on the front-end using Apollo, React, Redux and Redux-Saga to fetch data asynchronously</li>
                    </ul>
                    </Experience>
                )
                break;

            case ('exxon'):
                experience = (
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
                )
                break;

            case ('sec'):
                experience = (
                    <Experience
                    logo = {exxonMobilIcon}
                    company = "Software Engineering Club"
                    position = "Webmaster"
                    date = "September 2018 - December 2019"
                    location="University of Florida"
                    >
                    <ul>
                        <li>Worked on the design process of an event web application</li>
                        <li>interviewed clients, defined use personas, created user 
                            stories and generated ideas for design
                        </li>
                        <li>Created wireframes and designed a prototype of the application 
                            using Sketch App
                        </li>
                    </ul>
                    </Experience>
                )
                break;

            case ('it'):
                experience = (
                    <Experience
                    logo = {exxonMobilIcon}
                    company = "Info Tech"
                    position = "SHadower"
                    date = "October 2017 - November 2017"
                    location="Gainesville, Florida"
                    >
                    <ul>
                        <li>
                            Became familiar with the Git command line tool and learned JavaScript 
                            to work on a map of their building
                        </li>
                    </ul>
                    </Experience>
                )
                break;
        }

        return (
            <div id={styles.content}>
    
                <div className={styles.icons}>
                    <img src={experiencesIcon}/>
                </div>
    
                <div className={styles.experiences}>
                    <Subheader
                        icon="far fa-heart"
                        title="Experience"
                    />
                    
                    <div className={styles['experiences-content']}>
                        <div className={styles.tabs}>
                            <p 
                                className={styles.active__tab}
                                // className={this.state.active === 'visa' ? 'styles.active__tab' : ''}
                                onClick={this.setVisaActive}
                            > Visa </p>

                            <p onClick={this.setExxonActive}> Exxon Mobile </p>
                            <p onClick={this.setSECActive}> SEC</p>
                            <p onClick={this.setITActive}> Info Tech</p>
                        </div>
                        <div>
                            {experience}
                        </div>
                    </div>
                </div>
    
            </div>

        )
    }
}

export default Experiences;