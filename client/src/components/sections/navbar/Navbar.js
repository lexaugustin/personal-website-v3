import React, { Component } from 'react'

import NavSections from './navSections/NavSections'

import styles from './Navbar.module.css';

export default class Navbar extends Component {
    render() {
        return (
            <div id={styles.navbar}>
                <img src="https://lexaugustin.github.io/img/logo/logo-bleu.svg"/>
                <div>
                    <NavSections/>
                </div>
            </div>
        )
    }
}
