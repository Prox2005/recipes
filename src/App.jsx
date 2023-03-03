import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home, Details } from "./pages";
import { Header } from "./containers";
import { useEffect, useState } from "react";
import { init, searchMeal, searchDetails } from "./data/fetch";

function App() {
  const [recipes, setrecipes] = useState([]);

  useEffect(() => {
    init(setrecipes);
  }, []);

  function search(input) {
    searchMeal(setrecipes, input);
  }

  function getDetails(id, set) {
    searchDetails(id, set);
  }

  return (
    <div className="App">
      <BrowserRouter basename="/recipes/">
        <Header />
        <Routes>
          <Route path="/" element={<Home recipes={recipes} searchMeal={search} />} />
          <Route
            path="/details/:id"
            element={<Details recipes={recipes} getDetails={getDetails} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
