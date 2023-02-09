import { FunctionComponent } from "react";
import "./subcategories.scss";
import { ISubcategory } from "../../../interfaces/configurator";
import { SubCategoriesType } from "../../../types/configurator";
import View from "../View";
import SubCategory from "./SubCategory";

const SubCategories: FunctionComponent<SubCategoriesType> = ({
  type,
  setType,
  subCategories,
}: SubCategoriesType) => (
  <div className="subcategories-wrapper">
    <h4 className="title">Tie Creators | Woven Ties | Select a Design</h4>
    {type && subCategories.length ? (
      <ul className="images-list">
        {subCategories.map((subCategory: ISubcategory) => (
          <SubCategory
            setType={setType}
            subCategory={subCategory}
            key={subCategory.id}
            type={type}
          />
        ))}
      </ul>
    ) : (
      <View type={type} />
    )}
  </div>
);

export default SubCategories;
