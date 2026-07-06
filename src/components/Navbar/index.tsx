import "./index.css";
import { NavLink, Outlet } from "react-router";
import useMediaQuery from "@hooks/useMediaQuery";
import { useState } from "react";
import { NavItems } from "./NavItems";
import { LuX, LuMenu } from "react-icons/lu";

function activeStyle({ isActive }: { isActive: boolean }) {
  return {
    color: isActive ? "#cba6f7" : "",
    fontWeight: isActive ? "bold" : "normal",
    border: isActive ? "solid #cba6f7 2px " : "",
  };
}

const Navbar = () => {
  const isMobile = useMediaQuery("(max-width: 950px)");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav>
        {/* desktop */}
        {!isMobile && (
          <>
            <div className="nav-home">
              <NavLink to="/" end>
                <img
                  src="https://raw.githubusercontent.com/joejo-joestar/joestar/fc38de228fac77efad2318e634293e7f36ceebce/public/pixlogo.png"
                  alt="Joe :3"
                />
              </NavLink>
            </div>
            <div className="nav-links">
              {Object.values(NavItems).map((item) => (
                <NavLink key={item.label} to={item.to} style={activeStyle}>
                  {item.label}
                </NavLink>
              ))}
            </div>
          </>
        )}

        {/* mobile */}
        {isMobile && (
          <>
            <div className="nav-home">
              <NavLink to="/" onClick={() => setIsOpen(false)} end>
                <img
                  src="https://raw.githubusercontent.com/joejo-joestar/joestar/fc38de228fac77efad2318e634293e7f36ceebce/public/pixlogo.png"
                  alt="Joe :3"
                />
              </NavLink>
            </div>
            {/* Unified Open/Close Button */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="menu-button"
            >
              {isOpen ? <LuX /> : <LuMenu />}
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
                <div className="nav-links-mobile">
                  {Object.values(NavItems).map((item) => (
                    <NavLink
                      key={item.label}
                      to={item.to}
                      style={activeStyle}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </NavLink>
                  ))}
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
