import { useState, useEffect } from "react";
import API from "./api/axios";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  // Fetch recipes
  const fetchRecipes = async () => {
    try {
      const res = await API.get("recipe/recipes/");
      setRecipes(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  // Create recipe
  const createRecipe = async () => {
    try {
      await API.post("recipe/recipes/", {
        title,
        ingredients,
        instructions,
        time_minutes: 30,
        price: 10,
      });

      fetchRecipes();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Recipes</h1>

      {/* Form */}
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br /><br />

      <input
        placeholder="Ingredients"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
      />
      <br /><br />

      <input
        placeholder="Instructions"
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}
      />
      <br /><br />

      <button onClick={createRecipe}>Add Recipe</button>

      <hr />

      {/* List */}
      {recipes.length === 0 ? (
        <p>No recipes found</p>
      ) : (
        recipes.map((r) => (
          <div key={r.id}>
            <h3>{r.title}</h3>
            <p>{r.ingredients}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default App;