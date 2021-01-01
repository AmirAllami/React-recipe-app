import React, { Component } from "react";
import Content from "./Content";

export default class firstpage extends Component {
  /*componentDidMount() {
        fetch(
          "https://api.edamam.com/search?q=chicken&app_id=d9f74858&app_key=6810f9ebfe70f3fb9cc51c6382cf7c29"
        )
          .then(res => res.json())
          .then(data => console.log(data.hits[0]));
      }*/

  render() {
    return (
      <div className="recepies-container">
        {this.props.data1.length === 0 ? (
          <h1 className="replacingHeader">
            Please Search for a food for Example: "chicken"
          </h1>
        ) : (
          <div className="wrapper">
            {this.props.data1.map((a, i) => (
              <Content recepe={a.recipe} key={i} />
            ))}
          </div>
        )}
      </div>
    );
  }
}
// {this.props.data1.length === 0 ? (
//   <h1 className="replacingHeader">
//     Please Search for a food for Example: "chicken"{" "}
//   </h1>
// ) : (
//   <div className="wrapper">
//     {this.props.data1.map((a, i) => (
//       <Content recepe={a.recipe} key={i} />
//     ))}
//   </div>
// )}
