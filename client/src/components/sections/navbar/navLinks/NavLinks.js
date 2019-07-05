import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';

import Button from '../../../common/button/Button'

import styles from './NavLinks.module.css';

const navSections = () => {
    return (
        <ul id={styles.navSections}> 
            <li>
                <NavLink 
                    smooth to="../App/App#about" 
                    activeClassName="selected"
                    scroll={el => el.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})}
                >
                    About
                </NavLink>
            </li>



            <li><NavLink smooth to="../App/App#projects" activeClassName="selected">Projects</NavLink></li>
            <li><NavLink smooth to="../App/App#career" activeClassName="selected">Career</NavLink></li>
            <li><NavLink smooth to="../App/App#contact" activeClassName="selected">Contact</NavLink></li>
            
            <span id={styles.resumeButton}>
                <a href="https://www.dropbox.com/s/t7bmk5f2jplqc9k/alexander_augustin_resume.pdf?dl=0" target="_blank">
                    <Button>Resume</Button>
                </a>
            </span>
        </ul>
    )
} 

export default navSections;