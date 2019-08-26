import React from 'react'

import Interest from './interest/Interest'

import Subheader from '../../../common/subheader/Subheader';

import interestsIcon from '../../../../img/career/interests/icon.png';
import interestsIllustration from '../../../../img/career/interests/interests.png';

import styles from "./Interests.module.css";

const interests = (props) => {
    return (
        <div id={styles.content}>

            <div className={styles.icons}>
                <img src={interestsIllustration}/>
            </div>

            <div className={styles.interests}>

                <Subheader
                    icon={interestsIcon}
                    title="Computer Science Area of Interest"
                />

                <Interest
                    icon="fas fa-code"
                    title="Software Development"
                    description="I have a lot of interests in anything software related, 
                                especially web and mobile development."
                    skills="Java, JavaScript/jQuery, Swift, C, C++, HTML/CSS, Bootstrap, 
                            Express.js, NodeJS, ReactJS, AngularJS, MongoDB, MySQL, 
                            Agile Development, Git and RESTful service"
                />

                <Interest
                    icon="fab fa-quinscape"
                    title="UI/UX Design"
                    description="I am also interesed in UI/UX design as I like to put a 
                                lot of work in the user interface of my projects to make 
                                them look the best possible."
                    skills="Sketch, AdobeXD"
                />

                <Interest
                    icon="fas fa-brain"
                    title="Machine Learning"
                    description="Machine learning is the last area of computer science that 
                                has caught my attention after attending some workshops and 
                                watching some crash courses about the subject."
                />
            </div>

        </div>
    )
}

export default interests;
