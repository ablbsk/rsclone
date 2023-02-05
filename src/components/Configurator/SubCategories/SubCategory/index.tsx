import { FunctionComponent } from "react";
import { SubCategoryType } from "../../../../types/configurator";

const SubCategory: FunctionComponent<SubCategoryType> = ({
  setType,
  subCategory,
}: SubCategoryType) => (
  <li
    className="image-item"
    key={subCategory.id}
    onClick={() => setType(subCategory.type)}
  >
    <img className="img-subcategories" src={subCategory.image} alt="img" />
    <span className="category-name">{subCategory.name}</span>
  </li>
);

export default SubCategory;
