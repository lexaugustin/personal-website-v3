import React from 'react'

import styles from "./Interest.module.css";

const interest = (props) => {
    return (
        <div id={styles.interest}>

            <div className={styles.icon}>
                <img src={props.icon}/>
            </div>

            <div className={styles.description}>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <p className={styles.skills}>{props.skills}</p>
            </div>

        </div>
    )
}

export default interest;
