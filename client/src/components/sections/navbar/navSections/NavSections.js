import React from 'react';

import Button from '../../../common/button/Button'

import styles from './NavSections.module.css';

const navSections = () => {
    return (
        <ul id={styles.navSections}> 
            <li>About</li>
            <li>Projects</li>
            <li>Career</li>
            <li>Contact</li>
            <Button>Yo</Button>
        </ul>
    )
} 

export default navSections;