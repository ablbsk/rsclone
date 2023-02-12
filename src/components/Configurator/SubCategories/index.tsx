import { FunctionComponent } from "react";
import "./subcategories.scss";
import { ISubcategory } from "../../../interfaces/configurator";
import { SubCategoriesType } from "../../../types/configurator";
import View from "../View";
import SubCategory from "./SubCategory";

const SubCategories: FunctionComponent<SubCategoriesType> = ({
  type,
  price,
  setType,
  subCategories,
  accentColor,
  isNavbarNightMode,
}: SubCategoriesType) => (
  <div className="tie-category-wrapper">
    <div className="subcategories-wrapper">
      <h4 className="title-subcategories">
        Tie Creators | Woven Ties | Select a Design
      </h4>
      {type && subCategories.length ? (
        <ul className="images-list">
          {subCategories.map((subCategory: ISubcategory) => (
            <SubCategory
              setType={setType}
              subCategory={subCategory}
              key={subCategory.id}
              type={type}
              accentColor={accentColor}
              isNavbarNightMode={isNavbarNightMode}
            />
          ))}
        </ul>
      ) : (
        <View
          type={type}
          price={price}
          // subCategories={subCategories}
          accentColor={accentColor}
          isNavbarNightMode={isNavbarNightMode}
        />
      )}
    </div>
  </div>
);

export default SubCategories;
