import React, { Component } from 'react';

import NavSections from './navLinks/NavLinks';
import NavMobile from './navMobile/NavMobile';

import styles from './Navbar.module.css';

export default class Navbar extends Component {

    state = {
        scrolled: false,
        navMobile: 'navOpen',
        navMobileIcon: 'fas fa-equals'
    }
    

    navMobileToggleHandler = () => {
        if(this.state.navMobile == 'navClose') {
            this.setState({
                navMobile: 'navOpen',
                navMobileIcon: 'fas fa-times'
            });
        }

        else {
            this.setState({
                navMobile: 'navClose',
                navMobileIcon: 'fas fa-equals'
            });
        }
    }

    render() {
   
        // console.log(window.innerWidth);

        return (
            <div>

                <div id={styles.navbar}>
                    <img src="https://lexaugustin.github.io/img/logo/logo-bleu.svg"/>
                    <div><NavSections/></div>
                </div>

                <div id={styles.navMobile}>
                    <NavMobile
                        navMobileClass = {this.state.navMobile}
                        navMobileIcon = {this.state.navMobileIcon}
                        buttonClick = {this.navMobileToggleHandler}
                    />
                </div>

            </div>
        )
    }
}
