import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "./Card";

export default function MealsOfCategory() {
  const categoryName = useParams();

  useEffect(() => {}, []);
    return (
      <div>
        <Card categoryName={categoryName} />
      </div>
    );
}
