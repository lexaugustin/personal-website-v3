import React from 'react';

import Experience from './experience/Experience'
import styles from './Experiences.module.css'

const experiences = () => {
    return (
        <div className={styles.experiences}>

                <Experience
                    logo = "https://cdn0.iconfinder.com/data/icons/shift-ecommerce/32/Visa_initial-512.png"
                    company = "Visa"
                    position = "Software Engineering Intern"
                    date = "June 2019 - August 2019"
                    location="Foster City, California"
                >
                    <ul>
                        <li>To be honest with you, I have no idea of what I will be working on there, 
                            but Jesus will lead the way
                        </li>
                        <li>To be honest with you, I have no idea of what I will be working on there, 
                            but Jesus will lead the way
                        </li>
                    </ul>
                </Experience>
       
                <Experience
                    logo = "https://cdn0.iconfinder.com/data/icons/shift-ecommerce/32/Visa_initial-512.png"
                    company = "Visa"
                    position = "Software Engineering Intern"
                    date = "June 2019 - August 2019"
                    location="Foster City, California"
                >
                    <ul>
                        <li>To be honest with you, I have no idea of what I will be working on there, 
                            but Jesus will lead the way
                        </li>
                        <li>To be honest with you, I have no idea of what I will be working on there, 
                            but Jesus will lead the way
                        </li>
                    </ul>
                </Experience>

                <Experience
                    logo = "https://cdn0.iconfinder.com/data/icons/shift-ecommerce/32/Visa_initial-512.png"
                    company = "Visa"
                    position = "Software Engineering Intern"
                    date = "June 2019 - August 2019"
                    location="Foster City, California"
                >
                    <ul>
                        <li>To be honest with you, I have no idea of what I will be working on there, 
                            but Jesus will lead the way
                        </li>
                        <li>To be honest with you, I have no idea of what I will be working on there, 
                            but Jesus will lead the way
                        </li>
                    </ul>
                </Experience>

        </div>
    )
}

export default experiences;