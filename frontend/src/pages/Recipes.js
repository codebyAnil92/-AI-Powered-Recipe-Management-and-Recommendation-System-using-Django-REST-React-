import { useEffect, useState } from "react";
import API from "../api";

function Recipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const res = await API.get("recipe/recipes/");
      setRecipes(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Recipes</h2>
      {recipes.map((r) => (
        <div key={r.id}>
          <h3>{r.title}</h3>
          <p>{r.ingredients}</p>
        </div>
      ))}
    </div>
  );
}

export default Recipes;