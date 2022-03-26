import { useCategories } from "../../context/categories-context";
import { Link } from "react-router-dom";

const NavCategories = () => {
  const { categories } = useCategories();
  return (
    <nav className="pdt-category-bar box-shadow navigation">
      <ul className="align-center list-structure">
        {categories.map((category) => {
          return (
            <li key={category._id} className="list-item-inline">
              <Link className="link" to="./product.html">
                {category.categoryName}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export { NavCategories };
