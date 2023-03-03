import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DetailsCard } from "../../components";
import "./details.css";

const Details = ({ recipes, getDetails }) => {
  const [details, setdetails] = useState();
  const { id } = useParams();
  const meal = recipes.find((x) => x.idMeal === id);

  useEffect(() => {
    getDetails(id, setdetails);
  }, []);

  return (
    <div className="Details">
      {meal && details ? <DetailsCard meal={meal} details={details} /> : ""}
    </div>
  );
};

export default Details;
