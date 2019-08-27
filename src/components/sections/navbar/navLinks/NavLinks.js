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



            <li><NavLink smooth to="../App/App#projects" exact activeClassName="selected">Projects</NavLink></li>
            <li><NavLink smooth to="../App/App#career" exact activeClassName="selected">Career</NavLink></li>
            <li><NavLink smooth to="../App/App#contact" exact activeClassName="selected">Contact</NavLink></li>
            
            <span id={styles.resumeButton}>
                <a href="https://www.dropbox.com/h?preview=alexander_augustin_f19.pdf" target="_blank">
                    <Button>Resume</Button>
                </a>
            </span>
        </ul>
    )
} 

export default navSections;