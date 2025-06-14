import { NavLink } from "react-router";
import "./index.css";

const Now = () => {
  return (
    <section className="now">
      <h1 className="font-heading">Now</h1>
      <div className="font-body body-content">
        <span>
          I am currently working on a few projects, including a personal website
          and a mobile app. I am also learning technologies like React and
          Node.js. Check Below to see what I'm up to right now!
        </span>
        <span>
          In my free time, I enjoy reading books, playing video games, and
          exploring new places.
        </span>
        <span>
          Feel free to <NavLink to="/contact">reach out</NavLink> if you want to
          collaborate!
        </span>
        <h2>What im upto rn</h2>
        <ul>
          <li>
            Reading{" "}
            <a
              href="https://www.wikiwand.com/en/articles/I_Am_a_Cat"
              target="_blank"
              rel="noopener noreferrer"
            >
              I Am a Cat
            </a>{" "}
            by Natsume Sōseki
          </li>
          <li>
            Reading{" "}
            <a
              href="https://www.wikiwand.com/en/articles/The_Hitchhiker%27s_Guide_to_the_Galaxy"
              target="_blank"
              rel="noopener noreferrer"
            >
              The Ultimate Hitchhiker's Guide to The Galaxy
            </a>{" "}
            by Douglas Adams
          </li>
          <li>Working on a side project in react-native</li>
          <li>Playing video games in my free time</li>
        </ul>
      </div>
    </section>
  );
};

export default Now;
