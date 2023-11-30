import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import './index.scss';
import projImg1 from "../../assets/images/rsz_adhd.jpg";
import projImg2 from "../../assets/images/rsz_biteme.jpg";
import projImg3 from "../../assets/images/rsz_fsft.jpg";
 

import colorSharp2 from "../../assets/images/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "ADHD App",
      description: "ADHD App - PHP, JavaScript, Html CSS and Phpmyadmin : The product is designed to help high school students with attention deficit hyperactivity disorder (ADHD) to improve their time management skills combined with improving feeling and motivation.",
      imgUrl: projImg1,
      link :'https://github.com/Mohamed-Soboh/Requirements_Engineering',
      
    },
    {
      title: "BiteME App",
      description: "BiteMe App - JAVA, GitHub,JavaFx and MYSQL : Developing an application which allows customers to order food from various restaurants, enable the owner to manage the restaurant page and menu Projects architecture planning- using diagrams.",
      imgUrl: projImg2,
      link :'https://github.com/Mohamed-Soboh/BiteMe'
    },
    {
      title: "FSFT (Fast secure File Transfer) App ",
      description: "Application to transfer large files over the internet in secure and compress manner Client server and improving transfer time by compress and dividing the file and sending the parts in parallel .Using sockets, Networking and Threads , Develop in Java. using client-server technology and Peer to Peer (p2p).",
      imgUrl: projImg3,
      link :'https://github.com/Mohamed-Soboh/Fast-Secure-File-Transfer-app'
      ,
    },
   
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p> </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard key={index} {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
