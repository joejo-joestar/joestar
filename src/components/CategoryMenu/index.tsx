import React, { useRef, useEffect, useState } from "react";
import useMediaQuery from "@hooks/useMediaQuery";
import "./index.css";

interface CategoryMenuProps {
  categories: string[];
  links: string[];
  activeCategory: string;
  onSelectCategory: (category: string, index: number) => void;
}

const CategoryMenu: React.FC<CategoryMenuProps> = ({
  categories,
  links,
  activeCategory,
  onSelectCategory,
}) => {
  const submenuRef = useRef<HTMLDivElement>(null);
  const isMobileView = useMediaQuery("(max-width: 1100px)");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMobileView && submenuRef.current) {
      const activeButton = submenuRef.current.querySelector(
        "button.active"
      ) as HTMLElement;
      if (activeButton) {
        const scrollLeft =
          activeButton.offsetLeft - submenuRef.current.offsetLeft;
        const centerOffset =
          (submenuRef.current.clientWidth - activeButton.clientWidth) / 2;
        submenuRef.current.scrollLeft = scrollLeft - centerOffset;
      }
    }
  }, [activeCategory, isMobileView]);

  const handleCategorySelect = (category: string, index: number) => {
    onSelectCategory(category, index);
    if (isMobileView) {
      setIsMobileMenuOpen(false);
    }
  };

  const renderCategoryButtons = (isMobileButton: boolean) =>
    categories.map((category, index) => (
      <button
        key={category}
        onClick={() => handleCategorySelect(category, index)}
        className={`${category === activeCategory ? "active" : ""} ${
          isMobileButton ? "mobile-category-button" : ""
        }`}
      >
        {category.toLowerCase()}
        <a
          href={links[index]}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          aria-label={`Link to ${category} (opens in new tab)`}
          className="external-link"
        >
          <svg
            className="external-link-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M384 32c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0zM160 144c-13.3 0-24 10.7-24 24s10.7 24 24 24l94.1 0L119 327c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l135-135L288 328c0 13.3 10.7 24 24 24s24-10.7 24-24l0-160c0-13.3-10.7-24-24-24l-152 0z" />
          </svg>
        </a>
      </button>
    ));

  if (isMobileView) {
    return (
      <div className="category-menu-mobile-container">
        <span className="mobile-menu-trigger-container">
          <button
            className="mobile-menu-trigger"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-category-sidebar"
          >
            {activeCategory.toLowerCase()}
          </button>
        </span>

        <aside
          id="mobile-category-sidebar"
          className={`mobile-category-sidebar ${isMobileMenuOpen ? "open" : ""}`}
          aria-hidden={!isMobileMenuOpen}
        >
          <div className="mobile-sidebar-header">
            <h3>collections</h3>
            <button
              className="close-mobile-menu"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close category menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                style={{ width: "1.5em", height: "1.5em" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="mobile-sidebar-nav">
            {renderCategoryButtons(true)}
          </div>
        </aside>
      </div>
    );
  }

  return (
    <div className="submenu-wrapper">
      <div className="submenu" ref={submenuRef} id="submenu">
        {renderCategoryButtons(false)}
      </div>
    </div>
  );
};
export default CategoryMenu;
