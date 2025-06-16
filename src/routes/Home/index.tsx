import { NavLink } from "react-router";
import "./index.css";

function Home() {
  return (
    <>
      <section className="home">
        <h1>
          hi, i'm <span className="display-heading">Joe</span>!
        </h1>
        <div className="home-body-content">
          <span>
            i'm a Computer Science student in Birla Institue of Technology and
            Science.
            <p>
              check out what i'm doing <NavLink to="/nownownow">now</NavLink>.
            </p>
            <p>
              Head over to the <NavLink to="contact">contact</NavLink> page to
              get in touch with me.
            </p>
          </span>

          <br />
          <div className="bar" />
          <br />

          <span className="projects">
            <p className="projects-heading">
              here are some of the{" "}
              <a
                href="https://github.com/joejo-joestar?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                projects
              </a>{" "}
              . i have, and am still working on
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
                  archive of programs for all lab practicals.
                </p>
              </li>
              <li>
                <p>
                  <a
                    href="https://github.com/joejo-joestar/DSA-Stuff"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    dsa-stuff
                  </a>
                  <br />
                  java codes for various data structures and dsa topics.
                </p>
              </li>
              <li>
                <p>
                  <a
                    href="https://github.com/SreenikethanI/Mediathon2024-Logitik"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    mtc mediathon submission
                  </a>
                  <br />
                  basic html css for a club competition.
                  <br />
                  <a
                    href="https://sreenikethani.github.io/Mediathon2024-Logitik/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    live demo
                  </a>
                  <br />(
                  <a
                    href="https://www.linkedin.com/posts/microsoft-tech-club_microsofttechclub-photography-webdev-activity-7241003189209055232-g2q4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    won best website award
                  </a>
                  )
                </p>
              </li>
              <li>
                <p>
                  <a href="pbee.vercel.app">pBee.ai</a> <br />
                  a project involving a react frontend.
                  <br />
                  <a
                    href="https://github.com/joejo-joestar/pBee.ai-frontend"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    react frontend repository
                  </a>
                </p>
              </li>
              <li>
                <p>
                  font detection app
                  <br />
                  project for foundations of data science course.
                  <br />
                  <a
                    href="https://github.com/joejo-joestar/font-detection-app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    frontend repository
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://github.com/sreenikethani/font-detection-model"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    model repository
                  </a>
                </p>
              </li>
              <li>
                <p>
                  <a
                    href="https://github.com/joejo-joestar/fakenews-detection-model"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    fake news detection model
                  </a>
                  <br />
                  project for data mining course.
                </p>
              </li>
              <li>
                <p>
                  <a
                    href="https://github.com/joejo-joestar/NTRU-RLWE-Hybrid-Scheme"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ntru-rlwe hybrid fhe scheme demo
                  </a>
                  <br />
                  project for cryptography course.
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
