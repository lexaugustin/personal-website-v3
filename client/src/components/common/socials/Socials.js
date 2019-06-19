import React from 'react'

import Social from './social/Social';

import styles from './Socials.module.css'


const socialIcons = [
    {
        name:'linkedin', 
        icon: 'fab fa-linkedin-in', 
        link:'https://www.linkedin.com/in/alexander-augustin-39289b177/'
    },
    {
        name:'github', 
        icon: 'fab fa-github', 
        link:'https://github.com/lexaugustin'
    },
    {
        name:'instagram', 
        icon: 'fab fa-instagram', 
        link:'https://www.instagram.com/lexaugustin/'
    },
    {
        name:'twitter', 
        icon: 'fab fa-twitter', 
        link:'https://twitter.com/lexaugustin'
    }
]

const socials = (props) => {
    return (
        <ul className={styles.icons}>
            { socialIcons.map(social => (
                <li>
                    <Social
                        name={social.name}
                        icon={social.icon}
                        link={Social.link}
                        key={social.name}                    
                    />
                </li>
            ))}
        </ul>
    )
}

export default socials;
