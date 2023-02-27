import { FunctionComponent } from "react";
import { SubCategoryType } from "../../../../types/configurator";
import { Link } from "react-router-dom";
import Hover from "../../../../components/Hover";

const SubCategory: FunctionComponent<SubCategoryType> = ({
  category,
  subCategory,
}: SubCategoryType) => {
  return (
    <li className="image-item">
      <div className="img-wrapper">
        <img className="img-subcategories" src={subCategory.image} alt="img" />
        <Hover>
          <Link
            to={`/configurator/${category}/${subCategory.type}`}
            className="category-name"
          >
            {subCategory.name}
          </Link>
        </Hover>
      </div>
    </li>
  );
};
export default SubCategory;
