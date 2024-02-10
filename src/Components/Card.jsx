import React from "react";
import { Link } from "react-router-dom";

export default function Card({ category, truncateDescription, categoryName }) {
  return (
    <div className="card" key={category.idCategory}>
      <div className="img">
        <img src={category.strCategoryThumb} alt={category.strCategory} />
      </div>
      <div className="category-name">{category.strCategory}</div>
      <div className="category-description">
        {truncateDescription(category.strCategoryDescription)}
      </div>
      <Link to={`/category/${category.strCategory}`}>
        <div className="show-meals">
          <button>Show Meals</button>
        </div>
      </Link>
    </div>
  );
}
