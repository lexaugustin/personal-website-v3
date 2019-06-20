import React from 'react'

import Interest from './interest/Interest'

import styles from "./Interests.module.css";

const interests = (props) => {
    return (
        <div id={styles.interests}>
            <Interest/>
            <Interest/>
            <Interest/>
        </div>
    )
}

export default interests;
