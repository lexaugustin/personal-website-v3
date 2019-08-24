import React, {Component} from 'react';

import Button from '../../common/button/Button';


import styles from './Contact.module.css'

class Contact extends Component {
    render(){
        return (
            <div id={styles.content}>

                <form>
                    <div className={styles['form-group']}>
                        <label>Name</label>
                        <input type="text"/>
                    </div>

                    <div className={styles['form-group']}>
                        <label>Email</label>
                        <input type="email"/>
                    </div>

                    <div className={styles['form-group']}>
                        <label>Subject</label>
                        <input type="text"/>
                    </div>

                    <div className={styles['form-group']}>
                        <label>Message</label>
                        <textarea/>
                    </div>

                    <Button>Send</Button>
                </form>

            </div>
        )
    }
}


export default Contact;