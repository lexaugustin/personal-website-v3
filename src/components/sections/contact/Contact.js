import React, {Component} from 'react';

import Button from '../../common/button/Button';
import Socials from '../../common/socials/Socials';

import styles from './Contact.module.css'

class Contact extends Component {
    render(){
        return (
            <div id={styles.content}>

                <div id={styles.socialIcons}>
                    <Socials/>
                </div>

            </div>
        )
    }
}


export default Contact;




