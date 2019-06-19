import React from 'react';

import portrait from '../../../img/banner/all.png'


import styles from './Banner.module.css'

const banner = () => {

    return (
        <div id={styles.banner}>
            {/* <div className={styles['header-bg']}></div> */}

            <div id={styles['banner-content']}>

                <div id={styles['picture-side']}>
                    <img src={portrait} alt=""/>
                </div>
    

                <div id={styles['text-side']}>
                    <p>Computer Engineering <span>Student</span></p>
                    <div id={styles.bar}></div>
                    <p>With Interests in Web Development, Mobile Development, UI/UX Design and Machine Learning.</p>
                </div>
 
            </div>
        </div>
    )
}

export default banner;