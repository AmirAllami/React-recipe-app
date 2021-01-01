import React from "react";
import { Link } from "react-router-dom";

function Content(props) {
  return (
    <div className="o-recep">
      <h1> {props.recepe.label} </h1>
      <img src={props.recepe.image} alt="what the recepie would look like" />

      <div className="more">
        <h3>To see more Details</h3>

        <Link
          to={`/recipe/${props.recepe.uri.split("recipe_")[1]}`}
          className="Link"
        >
          HERE
        </Link>
      </div>
    </div>
  );
}
export default Content;
