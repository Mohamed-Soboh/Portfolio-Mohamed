import meter1 from "../../assets/images/meter1.svg";
import meter2 from "../../assets/images/meter2.svg";
import meter3 from "../../assets/images/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../../assets/images/arrow1.svg";
import arrow2 from "../../assets/images/arrow2.svg";
import colorSharp from "../../assets/images/color-sharp.png"
import 'animate.css';
export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Programming Languages</h2>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>PHP</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>C++</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>C</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>SQL</h5>
                            </div>
                        </Carousel>
                        </div>
                        <br></br><br></br>
                        <div className="skill-bx1 wow zoomIn">
                        <h2>Web Development</h2>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                            <img src={meter3} alt="Image" />
                                <h5>Node.js</h5>
                            </div>
                            <div className="item">
                            <img src={meter3} alt="Image" />
                                <h5>React</h5>
                            </div>
                        </Carousel></div></div>
                        <div className="skill-bx2 wow zoomIn"> 
                        <h2>DataBases</h2>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>MySql</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>MongoDB</h5>
                            </div>
                            <div className="item">
                            <img src={meter2} alt="Image" />
                                <h5>phpMyAdmin</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>SQL Server </h5>
                            
                            </div>
                        </Carousel>
                    </div>
                    
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
    
  )
  
}
