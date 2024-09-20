import React, { useState } from "react";
import "./Categories.scss";
import CloseIcon from "../../components/icons/CloseIcon/CloseIcon";
import { CATEGORY_FILTERS } from "../../utils/constants";
import RadioButtonIcon from "../../components/icons/RadioButtonIcon/RadioButtonIcon";
import DefaultButton from "../../components/DefaultButton/DefaultButton";

interface CategoriesProps {
  display: boolean;
  selectedCategoryIndex: number | null;
  handleCategories: (a: boolean, selectedIndex: number | null) => void;
}

const Categories: React.FC<CategoriesProps> = ({
  handleCategories,
  selectedCategoryIndex,
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(
    selectedCategoryIndex
  );

  const handleClose = () => {
    handleCategories(false, selectedCategoryIndex);
  };

  const handleSave = () => {
    handleCategories(false, selectedIndex);
  };

  const handleCategorySelect = (selected: number) => {
    setSelectedIndex(selected);
  };

  const handleClearFilters = () => {
    setSelectedIndex(null);
  };

  return (
    <div className="categories-page">
      <div className="categories-page__header">
        Categories
        <CloseIcon onClick={handleClose} />
      </div>
      <div className="categories_page__content">
        {CATEGORY_FILTERS.map((category, index) => (
          <div
            key={category}
            className="categories-page__content__item"
            onClick={() => handleCategorySelect(index)}
          >
            <RadioButtonIcon checked={index === selectedIndex} /> {category}
          </div>
        ))}
      </div>
      <div className="categories-page__buttons">
        <DefaultButton version="outlined" onClick={handleClearFilters}>
          Clear Filters
        </DefaultButton>
        <DefaultButton version="filled" onClick={handleSave}>
          Save
        </DefaultButton>
      </div>
    </div>
  );
};

export default Categories;