import "./index.css";
const Footer = () => {
  return (
    <footer>
      <p>&copy; 2025 Joseph Cijo. All rights reserved.</p>
      <div>
        <a
          href="https://www.instagram.com/ft._.joe/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <img className="fab fa-instagram" src="src/assets/insta.svg" />
        </a>
        <a
          href="https://linkedin.com/in/joseph-cijo-n"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <img className="fab fa-linkedin" src="src/assets/lkdin.png" />
        </a>
        <a
          href="https://github.com/joejo-joestar"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <img className="fab fa-github" src="src/assets/gitcar.svg" />
        </a>
        <a
          href="https://unsplash.com/@joejojoestar"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <img className="fab fa-unsplash" src="src/assets/unsplash.svg" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
