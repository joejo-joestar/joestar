import { NavLink } from "react-router";
import "./index.css";

const Now = () => {
  return (
    <section className="now">
      <h1>Now</h1>
      <div className="body-content">
        <span>
          i am currently working on a few projects, including a personal
          website.
          <br />i am also learning technologies like <em>Power BI</em> and{" "}
          <em>Node.js</em>. check below to see what i'm up to right now!
        </span>
        <span>
          feel free to <NavLink to="/contact">reach out</NavLink> if you want to
          collaborate!
        </span>
        <ul>
          <li>
            reading{" "}
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
            reading{" "}
            <a
              href="https://www.wikiwand.com/en/articles/The_Hitchhiker%27s_Guide_to_the_Galaxy"
              target="_blank"
              rel="noopener noreferrer"
            >
              The Ultimate Hitchhiker's Guide to The Galaxy
            </a>{" "}
            by Douglas Adams
          </li>
          <li>
            working on a side project in <em>react-native</em>
          </li>
          <li>playing video games in my free time</li>
          <li>enjoying my vacation</li>
          <li>looking for an internship</li>
        </ul>
      </div>
    </section>
  );
};

export default Now;
