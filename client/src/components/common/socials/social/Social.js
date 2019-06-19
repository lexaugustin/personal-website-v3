import React from 'react'

import styles from './Social.module.css'

const social = (props) => {
    return (
        <a href={props.link} className={styles.icon}>
            <i className={props.icon}></i>
        </a>
    )
}

export default social;
