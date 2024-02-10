import React from "react";

export default function Card({ category, truncateDescription }) {
  return (
    <div className="card" key={category.idCategory}>
      <div className="img">
        <img src={category.strCategoryThumb} alt={category.strCategory} />
      </div>
      <div className="category-name">{category.strCategory}</div>
      <div className="category-description">
        {truncateDescription(category.strCategoryDescription)}
      </div>
      <div className="show-meals">
        <button>Show Meals</button>
      </div>
    </div>
  );
}
