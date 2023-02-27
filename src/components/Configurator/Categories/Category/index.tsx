import "./category.scss";
import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { CategoryType } from "../../../../types/configurator";
import Hover from "../../../../components/Hover";

const Category: FunctionComponent<CategoryType> = ({
  tie,
  accentColor,
}: CategoryType) => {
  return (
    <li className="category__list_item">
      <div className="category-blok">
        <img className="category-img" src={tie.image} alt="img-ties" />
        <Hover>
          <Link
            to={`/configurator/${tie.type}`}
            style={{
              backgroundColor: accentColor.static,
            }}
            className="category-name"
          >
            {tie.categoryName}
          </Link>
        </Hover>
      </div>
    </li>
  );
};

export default Category;
