import React, { useState } from "react";
import { Card } from "../../components";
import "./home.css";

const Home = ({ recipes, searchMeal }) => {
  const [input, setinput] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    searchMeal(input);
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
