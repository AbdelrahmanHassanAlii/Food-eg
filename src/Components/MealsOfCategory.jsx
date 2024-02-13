import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "./Card";
import { getSpaceficCategory } from "../Functions";
import "../Css/meals.css";

export default function MealsOfCategory() {
  const cat = useParams(); // Destructure the parameter object to get the category name
  console.log(cat.name);

  const [meals, setMeals] = useState([]);

  const fetchMeals = async () => {
    const mealsData = await getSpaceficCategory(cat.name); // Use the extracted category name
    setMeals(mealsData);
    console.log(meals);
  };

  useEffect(() => {
    fetchMeals();
  }, []); // Add cat to the dependency array to refetch meals when the category changes

  return (
    <div className="container">
      <div className="meals">
        {meals.length > 0 ? (
          meals.map((meal) => <Card key={meal.idMeal} meal={meal} />)
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
