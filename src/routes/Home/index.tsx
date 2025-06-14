import { NavLink } from "react-router";
import "./index.css";

function Home() {
  return (
    <>
      <section className="home">
        <h1 className="font-heading">
          Hi, I'm <span className="font-display display-heading"> Joe</span>!
        </h1>
        <div className="font-body body-content">
          <span>
            I'm a Computer Science student in Birla Institue of Technology and
            Science.
          </span>
          <span>
            View my <a href="">resume</a> for some of my projects and
            experiences.
          </span>
          <span>
            Check out what I'm doing <NavLink to="/nownownow">now</NavLink>.
          </span>
          <span>
            Head over to <NavLink to="contact">Contact</NavLink> to get in touch
            with me.
          </span>
          <h2>Some of the projects I have Worked on</h2>
          <ul>
            <li>
              <strong>
                <a
                  href="https://github.com/joejo-joestar/uni-codes"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  uni-codes
                </a>
              </strong>
              <p>
                <em>Archive of programs for all lab practicals.</em>
              </p>
            </li>
            <li>
              <strong>
                <a
                  href="https://github.com/joejo-joestar/DSA-Stuff"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  DSA-Stuff
                </a>
              </strong>
              <p>
                <em>Java codes for various data structures and DSA topics.</em>
              </p>
            </li>
            <li>
              <strong>
                <a
                  href="https://github.com/SreenikethanI/Mediathon2024-Logitik"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MTC Mediathon Submission
                </a>
              </strong>
              <p>
                <em>Basic HTML CSS for a club competition.</em>
              </p>
              <ul>
                <li>
                  <a
                    href="https://sreenikethani.github.io/Mediathon2024-Logitik/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/posts/microsoft-tech-club_microsofttechclub-photography-webdev-activity-7241003189209055232-g2q4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Won Best Website Award
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <strong>pBee.ai</strong>
              <p>
                <em>A project involving a React frontend.</em>
              </p>
              <ul>
                <li>
                  <a
                    href="https://github.com/joejo-joestar/pBee.ai-frontend"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    React Frontend Repository
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <strong>Font Detection App</strong>
              <p>
                <em>Project for Foundations of Data Science Course.</em>
              </p>
              <ul>
                <li>
                  <a
                    href="https://github.com/joejo-joestar/Font-Detection-App"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Frontend Repository
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/SreenikethanI/Font-Detection-Model"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Model Repository
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <strong>
                <a
                  href="https://github.com/joejo-joestar/FakeNews-Detection-Model"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fake News Detection Model
                </a>
              </strong>
              <p>
                <em>Project for Data Mining Course.</em>
              </p>
            </li>
            <li>
              <strong>
                <a
                  href="https://github.com/joejo-joestar/NTRU-RLWE-Hybrid-Scheme"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  NTRU-RLWE Hybrid FHE Scheme Demo
                </a>
              </strong>
              <p>
                <em>Project for Cryptography Course.</em>
              </p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Home;
