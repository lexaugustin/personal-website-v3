import React from 'react'

import FooterStyles from './Footer.module.css'

const footer = () => {
    return (
        <footer id={FooterStyles.footer}>
            
            {/* ----------- Footer Top ---------- */}
            <div id={FooterStyles['footer-top']}>
                
                {/* ----------- CONTACT ---------- */}
                <div id={FooterStyles['contact']}>
                    <img className={FooterStyles.logo} src="https://lexaugustin.github.io/img/logo/logo-white.svg"/>
                    <p className={FooterStyles.item}>lexaugustin@gmail.com</p>
                    <ul className={FooterStyles['social-media-icons']}>
                       <li className={FooterStyles.linkedin}><a href="https://www.linkedin.com/in/alexander-augustin-39289b177/"><i className="fab fa-fw fa-linkedin-in"></i>Linkedin</a></li>
                       <li className={FooterStyles.github}><a href="https://github.com/lexaugustin"><i className="fab fa-fw fa-github"></i>Github</a></li>
                       <li className={FooterStyles.instagram}><a href="https://www.instagram.com/lexaugustin/"><i className="fab fa-fw fa-instagram"></i>Instagram</a></li>
                       <li className={FooterStyles.facebook}><a href="https://www.facebook.com/alexander.augustin.336"><i className="fab fa-fw fa-facebook-f"></i>Facebook</a></li>
                    </ul>
                </div>
                
                {/* --------- MENU -------- */}
                <div id={FooterStyles['menu']}>
                    <h4 className={FooterStyles.title}>MENU</h4>
                    <ul>
                        <li className={FooterStyles.item}>About</li>
                        <li className={FooterStyles.item}>Projects</li>
                        <li className={FooterStyles.item}>Skills / Interests</li>
                        <li className={FooterStyles.item}>Contact</li>
                    </ul>
                </div>

                
                {/* --------- Right Side -------- */}
                <div id={FooterStyles['positions']}>
                    <p>Webmaster for the <a href="http://ufsec.com/">Software Engineering Club</a></p>
                    <p>Computer Engineering</p>
                    <p>University of Florida</p>
                </div>

            </div>

            {/* --------- Footer Bottom -------- */}
            <hr></hr>
            <div id={FooterStyles['footer-bottom']}>
                
            <span><span id={FooterStyles['made-by']}>Made With</span><i className="fas fa-heart"></i><span></span> <span>By Alexander</span></span>
                <span id={FooterStyles['copyright']}>© 2019 Alexander Augustin. All rights reserved</span>
            </div>

        </footer>
    )
}

export default footer;