import React from 'react'

import styles from "./Interest.module.css";

const interest = (props) => {
    return (
        <div id={styles.interest}>

            <div className={styles.icon}>
                <img src="https://lexaugustin.github.io/img/icons/software-engineering.svg"/>
            </div>

            <div className={styles.description}>
                <h3>Software Development</h3>
                <p>I have a lot of interests in anything software related, 
                    especially web and mobile development.
                </p>
                <p className={styles.skills}>
                    Java, JavaScript/jQuery, Swift, C, C++, HTML/CSS, Bootstrap, 
                    Express.js, NodeJS, ReactJS, AngularJS, MongoDB, MySQL, 
                    Agile Development, Git and RESTful service
                </p>
            </div>

        </div>
    )
}

export default interest;
