import React from 'react'

import Interest from './interest/Interest'
import devIcon from '../../../../img/career/interests/dev.svg';
import uiIcon from '../../../../img/career/interests/ui.svg';
import mlIcon from '../../../../img/career/interests/ml.svg';

import Header from '../../../common/header/Header';
import Subheader from '../../../common/subheader/Subheader';
import aboutIcon from '../../../../img/icons/person.svg'

import interestsIcon from '../../../../img/career/interests/interests.png';

import styles from "./Interests.module.css";

const interests = (props) => {
    return (
        <div id={styles.content}>

            <div className={styles.icons}>
                <img src={interestsIcon}/>
            </div>

            <div className={styles.interests}>

                <Subheader
                    icon="far fa-heart"
                    title="Software development area of interest"
                />

                <Interest
                    icon={devIcon}
                    title="Software Development"
                    description="I have a lot of interests in anything software related, 
                                especially web and mobile development."
                    skills="Java, JavaScript/jQuery, Swift, C, C++, HTML/CSS, Bootstrap, 
                            Express.js, NodeJS, ReactJS, AngularJS, MongoDB, MySQL, 
                            Agile Development, Git and RESTful service"
                />

                <Interest
                    icon={uiIcon}
                    title="UI/UX Design"
                    description="I am also interesed in UI/UX design as I like to put a 
                                lot of work in the user interface of my projects to make 
                                them look the best possible."
                    skills="Sketch, AdobeXD"
                />

                <Interest
                    icon={mlIcon}
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
