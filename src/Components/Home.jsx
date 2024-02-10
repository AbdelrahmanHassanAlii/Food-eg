import React, { useEffect, useState } from "react";
import "../Css/home.css";
import { truncateDescription, getAllCategories } from "../Functions";

export default function Home() {
  //get categories data from external file
  const fetchData = async () => {
    const categoriesData = await getAllCategories();
    setCategories(categoriesData);
  };

  //use state to store the data
  const [categories, setCategories] = useState([]);

  //use effect to call the function once load the page
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="home">
      <div className="container">
        {categories.length > 0
          ? categories.map((category) => (
              <div className="card" key={category.idCategory}>
                <div className="img">
                  <img
                    src={category.strCategoryThumb}
                    alt={category.strCategory}
                  />
                </div>
                <div className="category-name">{category.strCategory}</div>
                <div className="category-description">
                  {truncateDescription(category.strCategoryDescription)}
                </div>
                <div className="show-meals">
                  <button>Show Meals</button>
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}
