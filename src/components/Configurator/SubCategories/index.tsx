import { FunctionComponent } from "react";
import "./subcategories.scss";
import { ISubcategory } from "../../../interfaces/configurator";
import { SubCategoriesType } from "../../../types/configurator";
import View from "../View";
import SubCategory from "./SubCategory";
import subcategoriesLang from "../../../data/subcategories";

const SubCategories: FunctionComponent<SubCategoriesType> = ({
  type,
  price,
  setType,
  subCategories,
  accentColor,
  isNavbarNightMode,
}: SubCategoriesType) => {
  const lang = "ru";
  const list = subcategoriesLang.find((c) => c.lang === lang)!;
  return (
    <div className="tie-category-wrapper">
      <div className="subcategories-wrapper">
        <h4 className="title-subcategories">
          {list.data.titleTie} | {list.data.titleWoven} |{list.data.titleDesign}
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
            accentColor={accentColor}
            isNavbarNightMode={isNavbarNightMode}
          />
        )}
      </div>
    </div>
  );
};
export default SubCategories;
