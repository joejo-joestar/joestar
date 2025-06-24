import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socials } from "@shared/socialsList";

const Footer = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Joseph Cijo. All rights reserved.</p>
      <div className="social-links">
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FontAwesomeIcon icon={social.icon} className="fab" />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
