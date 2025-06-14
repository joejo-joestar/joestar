import "./index.css";

const Contact = () => {
  return (
    <section className="contact">
      <h1 className="font-heading">Contact</h1>
      <div>
        <span>Find me on</span>
        <ul className="contact-links">
          <li>
            <a
              href="https://www.instagram.com/ft._.joe/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <img className="fab fa-instagram" src="src/assets/insta.svg" />{" "}
              Inatgram
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/joseph-cijo-n"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <img className="fab fa-linkedin" src="src/assets/lkdin.png" />{" "}
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://githu"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <img className="fab fa-github" src="src/assets/gitcar.svg" />{" "}
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://unsplash.com/@joejojoestar"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <img className="fab fa-unsplash" src="src/assets/unsplash.svg" />{" "}
              Unsplash
            </a>
          </li>
        </ul>
        <span>
          Or you can email me at joecn2704 {"<at>"} gmail {"<dot>"} com
        </span>
      </div>
    </section>
  );
};

export default Contact;
