import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Css/home.css";

export default function Home() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );
        setCategories(response.data.categories);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const truncateDescription = (description) => {
    const words = description.split(" ");
    if (words.length > 20) {
      return words.slice(0, 20).join(" ") + "...";
    }
    return description;
  };

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
