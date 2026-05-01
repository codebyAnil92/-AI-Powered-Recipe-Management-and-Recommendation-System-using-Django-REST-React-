import { useState } from "react";
import api from "../api/axios";

export default function CreateRecipe() {
  const [form, setForm] = useState({
    title: "",
    ingredients: "",
    instructions: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      await api.post("recipe/", form);

      setMessage("✅ Recipe created successfully!");

      setForm({
        title: "",
        ingredients: "",
        instructions: "",
      });
    } catch (error) {
      console.log(error.response?.data);
      setMessage("❌ Failed to create recipe");
    }

    setLoading(false);
  };

  return (
    <div style={{ maxWidth: "500px", margin: "auto" }}>
      <h2>Create Recipe</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          required
        />
        <br /><br />

        <textarea
          name="ingredients"
          placeholder="Ingredients"
          value={form.ingredients}
          onChange={handleChange}
          required
        />
        <br /><br />

        <textarea
          name="instructions"
          placeholder="Instructions"
          value={form.instructions}
          onChange={handleChange}
          required
        />
        <br /><br />

        <button type="submit" disabled={loading}>
          {loading ? "Creating..." : "Create Recipe"}
        </button>
      </form>

      <p>{message}</p>
    </div>
  );
}