import Category from "../Categories/Category";
import { FunctionComponent } from "react";
import { CategoriesType } from "../../../types/configurator";
import { ICategory } from "../../../interfaces/configurator";
import "./categories.scss";

const Categories: FunctionComponent<CategoriesType> = ({
  tieList,
  setType,
  accentColor,
  isNavbarNightMode,
}: CategoriesType) => {
  return (
    <ul className="category__list">
      {tieList?.data?.map((tie: ICategory) => (
        <Category
          tie={tie}
          setType={setType}
          key={tie.type}
          accentColor={accentColor}
          isNavbarNightMode={isNavbarNightMode}
        />
      ))}
    </ul>
  );
};

export default Categories;
