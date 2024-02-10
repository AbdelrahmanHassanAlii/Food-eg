import React, { useEffect, useState } from "react";
import "../Css/home.css";
import { truncateDescription, getAllCategories } from "../Functions";
import Card from "./Card";

export default function Home() {
  //get categories data from external file
  const fetchCategories = async () => {
    const categoriesData = await getAllCategories();
    setCategories(categoriesData);
  };

  //use state to store the data
  const [categories, setCategories] = useState([]);

  //use effect to call the function once load the page
  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="home">
      <div className="container">
        {categories.length > 0
          ? categories.map((category) => (
              <Card
                category={category}
                truncateDescription={truncateDescription}
              />
            ))
          : null}
      </div>
    </div>
  );
}
