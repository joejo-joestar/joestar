import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedinIn,
  faUnsplash,
} from "@fortawesome/free-brands-svg-icons";

const socials: { name: string; icon: any; url: string }[] = [
  {
    name: "Instagram",
    icon: faInstagram,
    url: "https://www.instagram.com/ft._.joe/",
  },
  {
    name: "Linkedin",
    icon: faLinkedinIn,
    url: "https://linkedin.com/in/joseph-cijo-n",
  },
  {
    name: "Github",
    icon: faGithub,
    url: "https://github.com/joejo-joestar",
  },
  {
    name: "Unsplash",
    icon: faUnsplash,
    url: "https://unsplash.com/@joejojoestar",
  },
];

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
