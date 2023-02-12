import { FunctionComponent } from "react";
import { SubCategoryType } from "../../../../types/configurator";
import { nightTheme } from "../../../../data/constants";

const SubCategory: FunctionComponent<SubCategoryType> = ({
  setType,
  subCategory,
  accentColor,
  isNavbarNightMode,
}: SubCategoryType) => {
  const backgroundColor = nightTheme.background.element;

  return (
    <li
      className="image-item"
      key={subCategory.id}
      onClick={() => setType(subCategory.type)}
    >
      <div className="img-wrapper">
        <img className="img-subcategories" src={subCategory.image} alt="img" />
      </div>
      <div className="btn-wrapper">
        <button
          style={{
            backgroundColor: isNavbarNightMode ? backgroundColor : accentColor,
          }}
          className="category-name"
        >
          {subCategory.name}
        </button>
      </div>
    </li>
  );
};
export default SubCategory;
