import { Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faYoutube,
  faSkype,
} from '@fortawesome/free-brands-svg-icons'
export const ProjectCard = ({ title, description, imgUrl,link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <p> <a class="fa-3x"
            href={link}
            target="_blank"
            rel="noreferrer"
            
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="white"
              className="anchor-icon"
              
            />
          </a></p>
        </div>
      </div>
    </Col>
  )
}

