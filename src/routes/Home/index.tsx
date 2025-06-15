import { NavLink } from "react-router";
import "./index.css";

function Home() {
  return (
    <>
      <section className="home">
        <h1>
          Hi, I'm <span className="display-heading">Joe</span>!
        </h1>
        <div className="body-content">
          <span>
            I'm a Computer Science student in Birla Institue of Technology and
            Science.
            <p>
              Check out what I'm doing <NavLink to="/nownownow">now</NavLink>.
            </p>
            <p>
              Head over to <NavLink to="contact">Contact</NavLink> to get in
              touch with me.
            </p>
          </span>
          <br />
          <div className="bar" />
          <br />
          <span className="projects">
            <p className="projects-heading">
              Here are some of the{" "}
              <a
                href="https://github.com/joejo-joestar?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                projects
              </a>{" "}
              I have, and am still working on.
            </p>
            <ul>
              <li>
                <p>
                  <a
                    href="https://github.com/joejo-joestar/uni-codes"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    uni-codes
                  </a>
                  <br />
                  Archive of programs for all lab practicals.
                </p>
              </li>
              <li>
                <p>
                  <a
                    href="https://github.com/joejo-joestar/DSA-Stuff"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    DSA-Stuff
                  </a>
                  <br />
                  Java codes for various data structures and DSA topics.
                </p>
              </li>
              <li>
                <p>
                  <a
                    href="https://github.com/SreenikethanI/Mediathon2024-Logitik"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    MTC Mediathon Submission
                  </a>
                  <br />
                  Basic HTML CSS for a club competition.
                  <br />
                  <a
                    href="https://sreenikethani.github.io/Mediathon2024-Logitik/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                  <br />(
                  <a
                    href="https://www.linkedin.com/posts/microsoft-tech-club_microsofttechclub-photography-webdev-activity-7241003189209055232-g2q4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Won Best Website Award
                  </a>
                  )
                </p>
              </li>
              <li>
                <p>
                  <a href="pbee.vercel.app">pBee.ai</a> <br />
                  A project involving a React frontend.
                  <br />
                  <a
                    href="https://github.com/joejo-joestar/pBee.ai-frontend"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    React Frontend Repository
                  </a>
                </p>
              </li>
              <li>
                <p>
                  Font Detection App
                  <br />
                  Project for Foundations of Data Science Course.
                  <br />
                  <a
                    href="https://github.com/joejo-joestar/Font-Detection-App"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Frontend Repository
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://github.com/SreenikethanI/Font-Detection-Model"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Model Repository
                  </a>
                </p>
              </li>
              <li>
                <p>
                  <a
                    href="https://github.com/joejo-joestar/FakeNews-Detection-Model"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Fake News Detection Model
                  </a>
                  <br />
                  Project for Data Mining Course.
                </p>
              </li>
              <li>
                <p>
                  <a
                    href="https://github.com/joejo-joestar/NTRU-RLWE-Hybrid-Scheme"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    NTRU-RLWE Hybrid FHE Scheme Demo
                  </a>
                  <br />
                  Project for Cryptography Course.
                </p>
              </li>
            </ul>
          </span>
        </div>
      </section>
    </>
  );
}

export default Home;
