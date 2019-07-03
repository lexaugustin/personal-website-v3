import React from 'react'

import Interest from './interest/Interest'
import devIcon from '../../../../img/career/interests/dev.svg';
import uiIcon from '../../../../img/career/interests/ui.svg';
import mlIcon from '../../../../img/career/interests/ml.svg';

import styles from "./Interests.module.css";

const interests = (props) => {
    return (
        <div id={styles.interests}>
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
    )
}

export default interests;
