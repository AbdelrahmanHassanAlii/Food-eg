import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSpaceficMeal } from "../Functions";

export default function MealDetails() {
  const { id } = useParams();
  const [data, setData] = useState(null); // Set initial state to null

  useEffect(() => {
    const fetchData = async () => {
      try {
        const mealData = await getSpaceficMeal(id);
        setData(mealData[0]); // Update state with the first meal item
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]); // Add id to dependency array to fetch data when id changes

  return (
    <div className="meal-details">
      {data ? (
        <div className="exist">
          <div className="meal-img">
            <img src={data.strMealThumb} alt={data.strMeal} />
          </div>
          <div className="text">
            <div className="name">{data.strMeal}</div>
            <div className="category">{data.strCategory}</div>
            <div className="area">{data.strArea}</div>
          </div>
        </div>
      ) : (
        <p>Loading...</p> // Show loading message while fetching data
      )}
    </div>
  );
}
