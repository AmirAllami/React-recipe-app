import React from "react";

function Content(props) {
  return (
    <div className="o-recep">
      <h1> {props.recepe.label} </h1>
      <img src={props.recepe.image} alt="what the recepie would look like" />
      <ul>
        {props.recepe.ingredientLines.map(a => (
          <li>{a}</li>
        ))}
      </ul>

      <h3>
        to see the full recipie{" "}
        <a href={props.recepe.url} target="_blank">
          click here !
        </a>
      </h3>
    </div>
  );
}
export default Content;
