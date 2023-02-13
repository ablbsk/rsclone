import { FunctionComponent } from "react";
import { CategoryType } from "../../../../types/configurator";
import { nightTheme } from "../../../../data/constants";
import "./category.scss";

const Category: FunctionComponent<CategoryType> = ({
  tie,
  setType,
  accentColor,
  isNavbarNightMode,
}: CategoryType) => {
  const backgroundColor = nightTheme.background.element;

  return (
    <li className="category__list_item">
      <div className="category-blok">
        <img className="category-img" src={tie.image} alt="img-ties" />

        <button
          style={{
            backgroundColor: isNavbarNightMode
              ? backgroundColor
              : accentColor.static,
          }}
          className="category-name"
          onClick={() => setType(tie.type)}
        >
          {tie.categoryName}
        </button>
      </div>
    </li>
  );
};

export default Category;
