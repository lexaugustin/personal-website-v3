import React, {Component} from 'react';

import Button from '../../common/button/Button';
import Socials from '../../common/socials/Socials';
import portrait2 from '../../../img/banner/footer.png'


import styles from './Contact.module.css'

class Contact extends Component {
    render(){
        return (
            <div id={styles.content}>

                <div id={styles.socialIcons}>
                    <Socials/>

                    {/* <div id={styles['picture']}> */}
                        <img id={styles['picture']} src={portrait2} alt=""/>
                    {/* </div> */}

                </div>

            </div>
        )
    }
}


export default Contact;




