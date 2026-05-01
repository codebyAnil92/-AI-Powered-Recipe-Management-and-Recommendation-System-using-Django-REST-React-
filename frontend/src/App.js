import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateRecipe from "./pages/CreateRecipe";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/create" element={<CreateRecipe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;