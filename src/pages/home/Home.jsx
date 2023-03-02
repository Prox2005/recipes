import React, { useEffect, useState } from "react";
import { init, searchMeal } from "../../data/fetch";
import { Card } from "../../components";
import "./home.css";

const Home = () => {
  const [input, setinput] = useState("");
  const [recipes, setrecipes] = useState([]);

  useEffect(() => {
    init(setrecipes);
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    searchMeal(setrecipes, input);
  }

  return (
    <div className="home">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter ingredients"
          name="recipe"
          required
          onChange={(e) => setinput(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <main>
        <h1>{input} recipes</h1>
        <section className="home__recipes-container">
          {recipes !== null
            ? recipes.map((x) => <Card key={x.idMeal} recipe={x}></Card>)
            : "No Meals found"}
        </section>
      </main>
    </div>
  );
};

export default Home;
