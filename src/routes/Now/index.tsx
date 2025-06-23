import { NavLink } from "react-router";
import "./index.css";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { workingList, learningList, readingList } from "./lists";

const Now = () => {
  useScrollToTop();
  return (
    <section className="now">
      <h1>Now</h1>
      <div className="body-content">
        <span>check below to see what i'm up to right now!</span>
        <span>
          feel free to <NavLink to="/contact">reach out</NavLink> if you want to
          collaborate!
        </span>

        {/* Working */}
        <div>
          <h2>Working</h2>
          <ul>
            {workingList.map((item, index) => (
              <li key={index} className="item">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  {item.title}
                </a>
                : {item.description}
              </li>
            ))}
          </ul>
        </div>

        {/* Learning */}
        <div>
          <h2>Learning</h2>
          <ul>
            {learningList.map((item, index) => (
              <li key={index} className="item">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  {item.title}
                </a>
                : {item.description}
              </li>
            ))}
          </ul>
        </div>

        {/* Reading */}
        <div>
          <h2>Reading</h2>
          <ul>
            {readingList.map((book, index) => (
              <li key={index} className="item">
                <a href={book.link} target="_blank" rel="noopener noreferrer">
                  {book.title}
                </a>{" "}
                by {book.author}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Now;
