import React from "react";
import { Link } from "react-router-dom";

function Content(props) {
  return (
    <div className="o-recep">
      <h1> {props.recepe.label} </h1>
      <img src={props.recepe.image} alt="what the recepie would look like" />

      <h3>
        to see more Details
        <button>
          <Link
            to={`/recipe/${props.recepe.uri.split("recipe_")[1]}`}
            className="Link"
          >
            More
          </Link>
        </button>
      </h3>
    </div>
  );
}
export default Content;
