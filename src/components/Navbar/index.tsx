import "./index.css";
import { NavLink, Outlet } from "react-router";
import useMediaQuery from "@hooks/useMediaQuery";
import { useState } from "react";

function activeStyle({ isActive }: { isActive: boolean }) {
  return {
    color: isActive ? "#cba6f7" : "",
    fontWeight: isActive ? "bold" : "normal",
    border: isActive ? "solid #cba6f7 2px " : "",
  };
}

const Navbar = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav>
        {/* desktop */}
        {!isMobile && (
          <>
            <div className="nav-home font-heading">
              <NavLink to="/" end>
                Joe :3
              </NavLink>
            </div>
            <div className="nav-links font-heading">
              <NavLink to="/pics" style={activeStyle}>
                Photos
              </NavLink>
              <NavLink to="/nownownow" style={activeStyle}>
                Now
              </NavLink>
              <NavLink to="/contact" style={activeStyle}>
                Contact
              </NavLink>
            </div>
          </>
        )}

        {/* mobile */}
        {isMobile && (
          <>
            <div className="nav-home font-heading">
              <NavLink to="/" onClick={() => setIsOpen(false)} end>
                Joe :3
              </NavLink>
            </div>
            {/* Unified Open/Close Button */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="menu-button"
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  style={{ width: "2em", height: "2em" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  style={{ width: "2em", height: "2em" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>

            {/* Sidebar */}
            <aside
              id="default-sidebar"
              className="sidebar"
              style={{
                transform: isOpen ? "translateX(0)" : "translateX(100%)",
              }}
            >
              <div className="sidebar-content">
                <div className="nav-links-mobile font-heading">
                  <NavLink
                    to="/pics"
                    style={activeStyle}
                    onClick={() => setIsOpen(false)}
                  >
                    Photos
                  </NavLink>
                  <NavLink
                    to="/nownownow"
                    style={activeStyle}
                    onClick={() => setIsOpen(false)}
                  >
                    Now
                  </NavLink>
                  <NavLink
                    to="/contact"
                    style={activeStyle}
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </NavLink>
                </div>
              </div>
            </aside>
          </>
        )}
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
