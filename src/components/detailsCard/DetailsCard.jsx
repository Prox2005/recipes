import React from "react";
import "./DetailsCard.css";

const DetailsCard = ({ meal, details }) => {
  return (
    <div className="app__details-card">
      <div className="app__details-card__meal">
        <img src={meal.strMealThumb} alt="meal picture" />
        <h1>{meal.strMeal}</h1>
      </div>
      <div className="app__details-card__details">
        <h2>Description</h2>
        <p>{details.strInstructions}</p>
      </div>
    </div>
  );
};

export default DetailsCard;
