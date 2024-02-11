import axios from "axios";

//function to get all categories from the api
export const getAllCategories = async () => {
  try {
    const response = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    return response.data.categories;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

//function to get all meals for spacific category from the api
export const getSpaceficCategory = async (cat) => {
  try {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`
    );
    return response.data.meals;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

//function to spacific meal deatails
export const getSpaceficMeal = async (id) => {
  try {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    return response.data.meals;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export const truncateDescription = (description) => {
  const words = description.split(" ");
  if (words.length > 20) {
    return words.slice(0, 20).join(" ") + "...";
  }
  return description;
};
