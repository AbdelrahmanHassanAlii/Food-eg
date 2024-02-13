import React from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MealsOfCategory from "./Components/MealsOfCategory";
import MealDetails from "./Components/MealDetails";
import NotFound from "./Components/NotFound";

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:name" element={<MealsOfCategory />} />
          <Route path="/meal/:id" element={<MealDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
