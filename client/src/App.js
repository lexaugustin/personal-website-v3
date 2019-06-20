import React from 'react';


import Header from './components/common/header/Header'

import Banner from './components/sections/banner/Banner'
import About from './components/sections/about/About'
import LatestProjects from './components/sections/latestProjects/LatestProjects'
import MoreProjects from './components/sections/moreProjects/MoreProjects'
import Career from './components/sections/career/Career'
import Contact from './components/sections/contact/Contact'
import Footer from './components/sections/footer/Footer'

import aboutIcon from './img/icons/person.svg'
import latestProjectsIcon from './img/icons/project.svg'
import contactIcon from './img/icons/letter.svg'

import './App.css';

function App() {
  return (
    <div className="App">

      {/* --------------- BANNER --------------- */}
      <section>
        <Banner/>
      </section>

      {/* ---------------- ABOUT ---------------- */}
      <section id='about'>
        <Header
          icon = {aboutIcon} 
          title = "About" 
          subtitle = "A little bit about myself, including my interests and favorite things to do" 
        />
        <div id='main'>
          <About/>
        </div>
      </section>

      {/* ----------- LATEST PROJECTS ----------- */}
      <section id='latest-projects'>
        <Header
          icon = {latestProjectsIcon} 
          title = "Latest Projects" 
          subtitle = "Some of the projects that I have been working on lately ouside of classes" 
        />
        <div id='main'>
          <LatestProjects/>
        </div>
      </section>

      {/* ------------ MORE PROJECTS ------------ */}
      <section id='more-projects'>
        <Header
          icon = {contactIcon} 
          title = "More Notable Projects" 
          subtitle = "Some of the most notable projects that I have worked on" 
        />
        <div id='main'>
          <MoreProjects/>
        </div>
      </section>

      {/* -------------- EXPERIENCE -------------- */}
      <section id='career'>
        <Header
          icon = {contactIcon} 
          title = "Interests & Experience" 
          subtitle = "My areas of interests and acquired skills" 
        />
        <div id='main'>
          <Career/>
        </div>
      </section>

      {/* --------------- CONTACT--------------- */}
      <section id='contact'>
        <Header
          icon = {contactIcon} 
          title = "Contact" 
          subtitle = "I can be contacted anytime via this form" 
        />
        <div id='main'>
          <Contact/>
        </div>
      </section>

      {/* --------------- FOOTER --------------- */}
      <section id='footer'>
        <Footer/>
      </section>

    </div>
  );
}

export default App;
