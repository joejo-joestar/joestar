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
          <img
            className="fab fa-instagram"
            src="https://raw.githubusercontent.com/joejo-joestar/joestar/410cf643f3efa69f7827a49950cc37536a83915f/src/assets/insta.svg?token=BCOUCHN6XRFS5CXRDKOZ7JTIKB7GM"
          />
        </a>
        <a
          href="https://linkedin.com/in/joseph-cijo-n"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <svg
            className="fab fa-linkedin"
            xmlns="http://www.w3.org/2000/svg"
            shape-rendering="geometricPrecision"
            text-rendering="geometricPrecision"
            image-rendering="optimizeQuality"
            fill-rule="evenodd"
            clip-rule="evenodd"
            viewBox="0 0 512 512"
          >
            <path
              fill="#fff"
              d="M474.919 0H38.592C17.72 0 0 16.504 0 36.841V475.14C0 495.496 11.629 512 32.492 512h436.327C489.718 512 512 495.496 512 475.14V36.841C512 16.504 495.809 0 474.919 0zM195.043 195.043h68.928v35.136h.755c10.505-18.945 41.541-38.177 79.921-38.177 73.655 0 94.214 39.108 94.214 111.538v135.321h-73.148V316.883c0-32.427-12.947-60.883-43.227-60.883-36.768 0-54.295 24.889-54.295 65.758v117.103h-73.148V195.043zM73.139 438.861h73.148V195.043H73.139v243.818zm82.289-329.148c0 25.258-20.457 45.715-45.715 45.715-25.258 0-45.715-20.457-45.715-45.715 0-25.258 20.457-45.715 45.715-45.715 25.258 0 45.715 20.457 45.715 45.715z"
            />
          </svg>
        </a>
        <a
          href="https://github.com/joejo-joestar"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <img
            className="fab fa-github"
            src="https://raw.githubusercontent.com/joejo-joestar/joestar/410cf643f3efa69f7827a49950cc37536a83915f/src/assets/gitcar.svg?token=BCOUCHNQXEPHZFMF6VQO43DIKB7IA"
          />
        </a>
        <a
          href="https://unsplash.com/@joejojoestar"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <img
            className="fab fa-unsplash"
            src="https://raw.githubusercontent.com/joejo-joestar/joestar/410cf643f3efa69f7827a49950cc37536a83915f/src/assets/unsplash.svg?token=BCOUCHOHYHFBRGU3P52IWWLIKB7IE"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
