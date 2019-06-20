import React from 'react'

import Interests from './interests/Interests'
import Experience from './experiences/Experiences'

import styles from "./Career.module.css";

const career = (props) => {
    return (
        <div>
            {/* <Interests/> */}
            <Experience/>
        </div>
    )
}

export default career;
