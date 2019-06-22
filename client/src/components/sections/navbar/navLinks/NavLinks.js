import React from 'react';

import Button from '../../../common/button/Button'

import styles from './NavLinks.module.css';

const navSections = () => {
    return (
        <ul id={styles.navSections}> 
            <li>About</li>
            <li>Projects</li>
            <li>Career</li>
            <li>Contact</li>
            <span id={styles.resumeButton}>
                <Button>Yo</Button>
            </span>
        </ul>
    )
} 

export default navSections;