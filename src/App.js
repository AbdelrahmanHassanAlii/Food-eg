import React from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MealsOfCategory from "./Components/MealsOfCategory";

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:name" element={<MealsOfCategory />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
