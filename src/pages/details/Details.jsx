import React from "react";
import { useParams } from "react-router-dom";
import "./details.css";
const Details = () => {
  const { meal } = useParams();
  return <div>{meal}</div>;
};

export default Details;
