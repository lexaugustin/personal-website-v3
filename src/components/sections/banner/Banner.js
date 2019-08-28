import React from 'react';

import portrait from '../../../img/banner/all.png'
import portrait2 from '../../../img/banner/all2.png'
import portrait3 from '../../../img/banner/all3.png'
import Button from '../../common/button/Button';

import styles from './Banner.module.css'

const banner = () => {

    return (
        <div id={styles.banner}>

            <div id={styles['banner-content']}>

                <div id={styles['picture-side']}>
                    <img src={portrait3} alt=""/>
                </div>
    

                <div id={styles['text-side']}>
                    <div id={styles['text-side-content']}>
                        <h2>Computer Engineering Student<span> at The University of Florida</span></h2>
                        <div id={styles.bar}></div>
                        <p>With Interests in Web Development, Mobile Development, UI/UX Design and Machine Learning.</p>

                        {/* <div id={styles.contact__button}><Button>Contact</Button></div> */}
                    </div>
                </div>

            </div>

        </div>
    )
}

export default banner;