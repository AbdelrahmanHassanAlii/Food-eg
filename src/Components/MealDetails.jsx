import React from "react";
import { useParams } from "react-router-dom";

export default function MealDetails() {
  const {id} = useParams();

  return <div className="meal-details"></div>;
}
