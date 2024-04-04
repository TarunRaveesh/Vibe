import React from "react";
import "../styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faXTwitter,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <ul className="social-icons">
            <span style={{ color: "#e8e8e8" }}>Contact: </span>
            <br />
            <br />
            <li>
              <a className="facebook" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
            <li>
              <a className="twitter" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faXTwitter} />
              </a>
            </li>
            <li>
              <a
                className="instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li>
              <a className="linkedin" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a className="github" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
          </ul>
          <span className="copyright" style={{ color: "#e8e8e8" }}>
            Copyright &copy; {new Date().getFullYear()}.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
