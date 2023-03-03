import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

const Card = ({ recipe }) => {
  return (
    <div className="app__card">
      <img src={recipe.strMealThumb} alt="meal picture" />
      <h3>{recipe.strMeal}</h3>
      <Link to={`/details/${recipe.idMeal}`}>Details</Link>
    </div>
  );
};

export default Card;
