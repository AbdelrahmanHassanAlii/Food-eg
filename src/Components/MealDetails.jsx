import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getSpaceficMeal } from "../Functions";

export default function MealDetails() {
  const { id } = useParams();
  const [data, setData] = useState(null); // Set initial state to null

  useEffect(() => {
    //function which get the data from the api
    const fetchData = async () => {
      try {
        const mealData = await getSpaceficMeal(id);
        setData(mealData[0]); // Update state with the first meal item
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    //use the function to fetch the data
    fetchData();
  }, [id]); // Add id to dependency array to fetch data when id changes

  return (
    <div className="meal-details">
      {data ? (
        <div className="exist container">
          <div className="meal-img">
            <img src={data.strMealThumb} alt={data.strMeal} />
          </div>
          <div className="text">
            <div className="name">{data.strMeal}</div>
            <div className="category">{data.strCategory}</div>
            <div className="area">{data.strArea}</div>
            {/* there is the function to get the ingredients */}
            <div className="ingredients">
              <h2>Ingredients:</h2>
              <ul>
                {Array.from({ length: 20 }, (_, i) => i + 1).map((index) => {
                  const ingredient = data[`strIngredient${index}`];
                  const measure = data[`strMeasure${index}`];
                  return ingredient && measure ? (
                    <li key={index}>
                      {`${measure}`} <span>of</span> {`${ingredient}`}
                    </li>
                  ) : null;
                })}
              </ul>
            </div>
            <div className="instruction">{data.strInstructions}</div>
            {/* get tags and display it */}
            {data.strTags && data.strTags.trim() !== "" ? (
              <div className="tags">
                {data.strTags.split(",").map((tag, index) => (
                  <div key={index}>{tag.trim()}</div>
                ))}
              </div>
            ) : null}
            {data.strYoutube ? (
              <Link
                to={data.strYoutube}
                target="_blank"
                rel="noopener noreferrer"
              >
                youtube
              </Link>
            ) : null}

            {data.strSource ? (
              <Link
                to={data.strSource}
                target="_blank"
                rel="noopener noreferrer"
              >
                Source
              </Link>
            ) : null}
          </div>
        </div>
      ) : (
        <p className="container">Loading...</p> // Show loading message while fetching data
      )}
    </div>
  );
}
