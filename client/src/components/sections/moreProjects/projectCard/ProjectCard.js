import React from 'react';

import styles from './ProjectCard.module.css'

const projectCard = (props) => {
    return (
        <div className={styles.card}>
            <div className={styles.icon}>
                <img src='https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png'/>
            </div>
            <h3 className={styles.name}>Night Owls</h3>
            <p className={styles.title}>Desktop Web Application to find study spots on campus</p>
            <p className={styles.description}>
                Night Owls is web application that makes finding study spots easier on campus. 
                The application allows students to see where the study spots are with real-time 
                spots availability.
            </p>
            
            <ul className={styles.techs}>
                <li>Java</li>
                <li>MongoDB</li>
                <li>React</li>
            </ul>

            <div className={styles.links}>
                <i className="fas fa-external-link-alt"></i>
                <i className="fab fa-github"></i>
            </div>

        </div>
    )
}

export default projectCard;