import React from 'react';

import Experience from './experience/Experience'
import secIcon from '../../../../img/career/experiences/sec.png';
import exxonMobilIcon from '../../../../img/career/experiences/exxonMobil.png';
import visaIcon from '../../../../img/career/experiences/visa.png';


import styles from './Experiences.module.css'

const experiences = () => {
    return (
        <div className={styles.experiences}>

                <Experience
                    logo = {visaIcon}
                    company = "Visa"
                    position = "Software Engineer Intern"
                    date = "June 2019 - August 2019"
                    location="Foster City, California"
                >
                    <ul>
                        <li>
                            Built GraphQL backend service that returns the exacted data required to the client.
                        </li>
                    </ul>
                </Experience>
       
                <Experience
                    logo = {exxonMobilIcon}
                    company = "Exxon Mobile"
                    position = "UI/UX Researcher"
                    date = "March 2019 - April 2019"
                    location="Gainesville, Florida"
                >
                    <ul>
                        <li>Worked on the design process of an event web application</li>
                        <li>interviewed clients, defined user personas, created user stories and generated ideas for design</li>
                        <li>Created wireframes and designed a prototype of the application using Sketch App</li>
                    </ul>
                </Experience>

                <Experience
                    logo = {secIcon}
                    company = "UF Software Engineering Club"
                    position = "Webmaster"
                    date = "September 2018 - December 2019"
                    location="Gainesville, Florida"
                >
                    <ul>
                        <li>
                            Designing and implementing a new website to facilitate the connections with members
                            and sponsors
                        </li>
                        <li>
                            Collaborate with the executive officers to plan activities and determine actions 
                            necessary for the growth of the club
                        </li>
                    </ul>
                </Experience>

        </div>
    )
}

export default experiences;