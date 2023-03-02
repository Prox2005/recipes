import React from "react";
import "./card.css";

const Card = ({ recipe }) => {
  return (
    <div className="app__card">
      <img src={recipe.strMealThumb} alt="meal picture" />
      <h3>{recipe.strMeal}</h3>
    </div>
  );
};

export default Card;
