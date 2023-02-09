import Category from "../Categories/Category";
import { FunctionComponent } from "react";
import { CategoriesType } from "../../../types/configurator";
import { ICategory } from "../../../interfaces/configurator";

const Categories: FunctionComponent<CategoriesType> = ({
  tieList,
  setType,
}: CategoriesType) => {
  return (
    <ul className="category__list">
      {tieList?.data?.map((tie: ICategory) => (
        <Category tie={tie} setType={setType} key={tie.type} />
      ))}
    </ul>
  );
};

export default Categories;
