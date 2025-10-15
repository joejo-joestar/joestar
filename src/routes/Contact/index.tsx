import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useScrollToTop } from "@hooks/useScrollToTop";
import { socials } from "@shared/socialsList";

const Contact = () => {
  useScrollToTop();
  return (
    <section className="contact">
      <title>contact. | joestar</title>
      <h1>
        <img
          src="https://raw.githubusercontent.com/joejo-joestar/joestar/8ad250ff86a6254c58bb2072f0dc163b48b1d5b5/src/assets/pixcontact.png"
          alt="contact."
        />
        contact.
      </h1>
      <div className="contact-body-content">
        <span>
          you can find me on
          <ul className="contact-contact-links">
            {socials.map((social, idx) => (
              <li key={idx}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <FontAwesomeIcon
                    icon={social.icon}
                    size="lg"
                    className="fab"
                  />{" "}
                  {social.name.toLowerCase()}
                </a>
              </li>
            ))}
          </ul>
          <p className="email-span">
            or you can email me at:{" "}
            <p
              className="email"
              onClick={() => {
                navigator.clipboard.writeText("joecn2704+hello\x40outlook.com");
              }}
            >
              joecn2704<em>{"<at>"}</em>outlook<em>{"<dot>"}</em>com
            </p>
          </p>
          <p className="resume-span">
            or even check out my resume{" "}
            <a
              href="https://drive.google.com/file/d/1o9rlqZ5aGQwrtbtODvfEmDuDWkWJZQFU/view?usp=sharing"
              target="blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            .
          </p>
        </span>
      </div>
    </section>
  );
};

export default Contact;
