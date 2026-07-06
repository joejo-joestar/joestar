import React, { useRef, useEffect, useState } from "react";
import useMediaQuery from "@hooks/useMediaQuery";
import "./index.css";
import { LuExternalLink, LuX } from "react-icons/lu";

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
        "button.active",
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
          <LuExternalLink />
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
              <LuX />
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
