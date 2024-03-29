import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div className="app__header">
      <h2>
        <Link to="/">Tasty Recipes</Link>
      </h2>
    </div>
  );
};

export default Header;
