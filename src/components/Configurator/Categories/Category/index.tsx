import { FunctionComponent } from "react";
import { CategoryType } from "../../../../types/configurator";

const Category: FunctionComponent<CategoryType> = ({
  tie,
  setType,
}: CategoryType) => (
  <li className="category__list_item">
    <div className="category-blok">
      <img className="category-img" src={tie.image} alt="img-ties" />
      <span className="category-name" onClick={() => setType(tie.type)}>
        {tie.categoryName}
      </span>
    </div>
  </li>
);

export default Category;
