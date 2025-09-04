import { NavLink } from "react-router";
import "./index.css";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { workingList, learningList, readingList } from "./lists";
import NowPlaying from "@/components/NowPlaying";

const Now = () => {
  useScrollToTop();
  return (
    <section className="now">
      <h1>
        <img
          src="https://raw.githubusercontent.com/joejo-joestar/joestar/8ad250ff86a6254c58bb2072f0dc163b48b1d5b5/src/assets/pixnow.png"
          alt="now."
        />
        now.
      </h1>
      <div className="now-body-content">
        <span>
          i'm currently working at{" "}
          <a
            href="https://alshirawiequipment.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Al Shirawi Equipment
          </a>{" "}
          as a production engineering intern.
        </span>
        <span>check below to see what i'm up to right now!</span>
        <span>
          feel free to <NavLink to="/contact">reach out</NavLink> if you want to
          collaborate!
        </span>

        <NowPlaying />

        {/* Working */}
        <div>
          <h2>
            <em>working.</em>
          </h2>
          <ul>
            {workingList.map((item, index) => (
              <li key={index} className="item">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  {item.title.toLocaleLowerCase()}
                </a>
                : {item.description.toLocaleLowerCase()}
              </li>
            ))}
          </ul>
        </div>

        {/* Learning */}
        <div>
          <h2>
            <em>learning.</em>
          </h2>
          <ul>
            {learningList.map((item, index) => (
              <li key={index} className="item">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  {item.title.toLocaleLowerCase()}
                </a>
                : {item.description.toLocaleLowerCase()}
              </li>
            ))}
          </ul>
        </div>

        {/* Reading */}
        <div>
          <h2>
            <em>reading.</em>
          </h2>
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
