import React from "react";
import { Link } from "react-router-dom";
import "../Css/card.css";

export default function Card({ category, truncateDescription, meal }) {
  return (
    <div className="card" key={category?.idCategory || meal?.idMeal}>
      {category ? (
        <>
          <div className="img">
            <img src={category.strCategoryThumb} alt={category.strCategory} />
          </div>
          <div className="name category-name">{category.strCategory}</div>
          <div className="category-description">
            {truncateDescription(category.strCategoryDescription)}
          </div>
          <Link to={`/category/${category.strCategory}`}>
            <div className="show-meals">
              <button>Show Meals</button>
            </div>
          </Link>
        </>
      ) : (
        // Render meal information if category is not provided
        <>
          <div className="meal-img">
            <img src={meal.strMealThumb} alt={meal.strMeal} />
          </div>
          <div className="name meal-name">{meal.strMeal}</div>
          <Link to={`/meal/${meal.idMeal}`}>
            <div className="show-meal">
              <button>Show Meal</button>
            </div>
          </Link>
        </>
      )}
    </div>
  );
}
