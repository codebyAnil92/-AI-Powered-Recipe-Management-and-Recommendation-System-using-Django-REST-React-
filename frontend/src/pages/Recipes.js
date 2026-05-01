import { useEffect, useState } from "react";
import API from "../api/axios";

function Recipes() {
  const [recipes, setRecipes] = useState([]);

  const getRecipes = async () => {
    try {
      const res = await API.get("/recipe/recipes/");
      setRecipes(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>My Recipes</h2>

      {recipes.map((r) => (
        <div key={r.id} style={{ border: "1px solid gray", margin: 10 }}>
          <h3>{r.title}</h3>
          <p>{r.ingredients}</p>
        </div>
      ))}
    </div>
  );
}

export default Recipes;