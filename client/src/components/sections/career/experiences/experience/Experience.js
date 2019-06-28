import React from 'react'

import styles from './Experience.module.css'

const experience = (props) => {
    return (
        <div id={styles.experience}>

            <div className={styles.icon}>
                <div><img src={props.logo}/></div>                   
            </div>

            <div className={styles.description}>
                <h2>{props.company}</h2>
                <p className={styles.position}>{props.position}</p>
                <p className={styles.date}>{props.date}</p>
                <p className={styles.location} >{props.location}</p>
                <div className={styles.achievement} >{props.children}</div>
            </div>

        </div>
    )
}

export default experience;





// import React from 'react';

// import styles from './Experience.module.css'

// const experience = (props) => {
    
//     return (

//         <div id={styles.experience}>

//             <div className={styles.logo}>
//                 <img src={props.logo}/>
//             </div>
            
//             <div className={styles.description}>
//                 <h2>{props.company}</h2>
//                 <p className={styles.position}>{props.position}</p>
//                 <p className={styles.date}s>{props.date}</p>
//                 <p className={styles.location} >{props.location}</p>
//                 <p className={styles.children} >{props.children}</p>
//             </div>
            
//         </div>
//     )
// }

// export default experience;