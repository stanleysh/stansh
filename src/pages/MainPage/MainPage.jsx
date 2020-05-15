import React from 'react';
import {Link} from 'react-router-dom';
import './MainPage.css'

const MainPage = () => {
    return (
        <div className="main-body">
            <div className="intro-banner" id="intro-banner">
                <div className="port-pic">
                    <img src="https://i.imgur.com/kITwQ11.jpg"></img>
                </div>
                <h2>Stanley Sham</h2>
                <p>Full-Stack Developer/Engineer</p>
            </div>
            <div className="about" id="about">
                <h2>About me</h2>
                <h2>Contact Information</h2>
                <p>I am a Full-Stack developer who is an advocate for lifelong learning and like to challenge myself to master the latest trends in the development community. Combining my engineering mindset and my thirst for knowledge, I tackle every problem with meticulous precision and accuracy.  </p>
                <ul>
                    <li><a href=""><img src='https://image.flaticon.com/icons/svg/281/281769.svg' alt='gmail logo' style={{width:'20px'}}/>stnl.sham@gmail.com</a></li>
                    <li><a href="https://www.linkedin.com/in/stanley-sham/"><img src="https://1000logos.net/wp-content/uploads/2017/03/LinkedIn-Logo-768x768.png" alt='linked-in logo' style={{width: '20px'}}/>linkedin</a></li>
                    <li><a href="https://github.com/stanleysh/"><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt='github logo' style={{width:'20px'}}/>stanleysh.git</a></li>
                </ul>
            </div>
            <div className="skills" id="skills">
                <h2>Skills/Technologies</h2> 
                <div className="skills-list">
                    <img src="https://preview.redd.it/fi0fu2k24eo31.png?width=720&format=png&auto=webp&s=d88fd59e0924e11728c01be84fab0d55b9f4a81a" alt="Javascript" title="Javascript"/>
                    <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="React" title="React"/>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png" alt="Node JS" title="ode JS"/>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/220px-Python-logo-notext.svg.png" alt="Python" title="Python"/>
                    <img src="https://www.djangoproject.com/m/img/logos/django-logo-negative.png" alt="Django" title="Django"/>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/MongoDB_Logo.png/1598px-MongoDB_Logo.png" alt="mongoDB" title="mongoDB"/>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1080px-Postgresql_elephant.svg.png" alt="PostgreSQL" title="PostgreSQL"/>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png" alt="HTML" title="HTML"/>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/CSS.3.svg/856px-CSS.3.svg.png" alt="CSS" title="CSS"/>
                </div>
            </div>
            <div className="projects" id="projects">
                <h2>Projects</h2>
                <div className="projects-list">
                    <img/>
                    <img/>
                    <img/>
                    <img/>
                </div>
            </div>
        </div>
    )
}

export default MainPage;