import React from 'react'

import Button from '../../common/button/Button';

import styles from './LatestProjects.module.css'

const latestProjects = (props) => {
    return (
        <div className={styles.content}>
            <div className={styles.details}>
                <div className={styles['title-icon']}>
                    <i className='far fa-sun'></i>
                </div>

                <p className={styles.name}>Today</p>
                <p className={styles.intro}>Weather from your location and Calendar</p>

                <div className={styles.description}>
                    <p>
                        A simple weather app with a calendar. It shows the weather of the 
                        current location and the current day is highlited with the circle. 
                        The background color changes to light green, orange and bleu based 
                        on the time of the day. I worked on this app after learning how to 
                        use api in iOS development with Swift and the Cocoapods libraries. 
                        The weather source is OpenWeatherMap.
                    </p>
                </div>

                <div className={styles.links}>
                    <p>See More<i class="fas fa-long-arrow-alt-right"></i></p>
                    <p className={styles.igithub}>See Project on Github<i class="fab fa-github-alt"></i></p>
                </div>
            </div>

            <div className={styles.screen}>
                <img src='https://lexaugustin.github.io/img/projects/today/today-screen.png' alt="Alexander's Portrait"/>
            </div>
        </div>
    )
}

export default latestProjects;
