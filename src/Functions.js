import axios from "axios";

//function to get all categories from hte api
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

export const truncateDescription = (description) => {
  const words = description.split(" ");
  if (words.length > 20) {
    return words.slice(0, 20).join(" ") + "...";
  }
  return description;
};
