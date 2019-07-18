import React from 'react'

import styles from "./Interest.module.css";

const interest = (props) => {
    return (
        <div id={styles.interest}>

            <div className={styles.description}>
                <h4>{props.title}</h4>
                <p>{props.description}</p>
                {/* <p className={styles.skills}>{props.skills}</p> */}
            </div>

        </div>
    )
}

export default interest;
