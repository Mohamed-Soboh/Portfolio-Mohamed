//import React, { useEffect, useState } from "react";
import React,{ useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./index.scss";
import { Link } from 'react-router-dom'
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import './index.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faYoutube,
  faSkype,

} from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
  faBars,
  faClose,
  faPhone,
  fafile,
  faFileCsv,
  
} from '@fortawesome/free-solid-svg-icons'
import headerImg from '../../assets/images/me1.svg';

import TrackVisibility from 'react-on-screen';
const Portfolio = () => { 
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = ["Software Engineering","Web Designer", "Full Stack Developer"];
    const period = 2000;
  
  
    useEffect(() => {
      let ticker = setInterval(() => {
        tick();
      }, delta);
  
      return () => { clearInterval(ticker) };
    }, [text])
  
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
  
      setText(updatedText);
  
      if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
      }
  
      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setIndex(prevIndex => prevIndex - 1);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setIndex(1);
        setDelta(500);
      } else {
        setIndex(prevIndex => prevIndex + 1);
      }
    
      }
    
    const renderPortfolio = () => {
        return (
            <section className="banner" id="home">
            <Container>
              <Row className="aligh-items-center">
                <Col xs={12} md={6} xl={7}>
                  <TrackVisibility>
                    {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                         <h3 className="tagline"></h3>
                         <h2>{`Hi! I'm Mohamed`} <span className="txt-rotate" dataPeriod="100" data-rotate=''><span className="wrap1">{text}</span></span></h2> 
                        <p>I'm Mohamed Soboh,24-year-old software engineer with a passion for creating innovative and efficient solutions.<br></br> My journey in the world of software engineering began at ORT Braude College of Engineering, <br></br>where I earned my Bachelor of Science in Software Engineering in 2023. <br></br>Since then, I've been on a continuous quest for knowledge and excellence in the field.
                         
                         </p>\
                             
                    </div>}
                  </TrackVisibility>
                </Col>
                <ul className="nn" >
        <il>
            <a class="fa-3x"
            href='https://www.linkedin.com/in/mohamed-soboh'
            target="_blank"
            rel="noreferrer" 
            
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="white"
              className="anchor-icon"
            />
          </a>
          </il> <il>
          <a class="fa-3x"
            href="https://github.com/Mohamed-Soboh"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="white"
              className="anchor-icon"
            />
          </a>
          </il><il>
          <a  class="fa-3x" href="+9720535274028" rel="noreferrer" target="_blank">
            <FontAwesomeIcon
              icon={faPhone}
              color="white"
              className="anchor-icon"
            />
          </a>
          </il>
          <il>
          <a  class="fa-3x" href="../../assets/images/Mohamed_Soboh_Fullstack_CV.pdf" >
            <FontAwesomeIcon
              icon={faFileCsv}
              color="white"
              className="anchor-icon"
            />
          </a>
          </il>
      </ul>
      <a to="/contact" className="flat-button">
            CONTACT ME
          </a>
                <Col xs={12} md={6} xl={5}>
                  <TrackVisibility>
                    {({ isVisible }) =>
                      <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                        <img src={headerImg} alt="Header Img"/>
                      </div>}
                  </TrackVisibility>
                </Col>
              </Row>
            </Container>
            
          </section>
          
        );
    }


    return (
        <>
            <div className="container portfolio-page">
               
                <div>{renderPortfolio()}&ensp;
                <Skills />&ensp;
                <Projects/>
                </div>
                
            </div>
            
        </>
    );
    
}

export default Portfolio;
