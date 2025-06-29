import { NavLink } from "react-router";
import "./index.css";

const MissingPage = () => {
  return (
    <section className="missing-page">
      <img
        src="https://www.gstatic.com/android/keyboard/emojikitchen/20230301/u1f623/u1f623_u1f431.png"
        className="missingno"
        alt="Missing Page"
      />
      <div className="missing-header">
        <span className="four-oh-four">404</span>
        <span>haha lmao no page here</span>
      </div>
      <span className="missing-text">
        try going back to the <NavLink to="/">home page</NavLink>!
      </span>
    </section>
  );
};

export default MissingPage;
