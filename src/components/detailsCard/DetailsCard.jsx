import React from "react";
import "./DetailsCard.css";

const DetailsCard = ({ meal, details }) => {
  return (
    <div className="app__details-card">
      <div className="app__details-card__meal">
        <h1>{meal.strMeal}</h1>
        <img src={meal.strMealThumb} alt="meal picture" />
      </div>
      <div className="app__details-card__details">
        <h2>Description :</h2>
        <p>{details.strInstructions}</p>
      </div>
    </div>
  );
};

export default DetailsCard;
