import React, { useRef, useEffect } from "react";
import "./index.css";

interface CategoryMenuProps {
  categories: string[];
  activeCategory: string;
  onSelectCategory: (category: string, index: number) => void;
}

const CategoryMenu: React.FC<CategoryMenuProps> = ({
  categories,
  activeCategory,
  onSelectCategory,
}) => {
  const submenuRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (submenuRef.current) {
      const submenuWidth = submenuRef.current.clientWidth;
      const submenuScrollWidth = submenuRef.current.scrollWidth;
      if (submenuScrollWidth > submenuWidth) {
        submenuRef.current.scrollLeft = submenuScrollWidth + submenuWidth;
      } else {
        submenuRef.current.scrollLeft = 0;
      }
    }
  };

  useEffect(() => {
    handleScroll();
  }, []);

  return (
    <div className="submenu-wrapper">
      <div className="submenu" ref={submenuRef} id="id">
        {categories.map((category, index) => (
          <button
            key={category}
            onClick={() => onSelectCategory(category, index)}
            className={`${category === activeCategory ? "active" : ""} ${
              index > categories.indexOf(activeCategory)
                ? "category-at-right"
                : "category-at-left"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};
export default CategoryMenu;
