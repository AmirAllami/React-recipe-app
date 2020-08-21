import React, { Component } from "react";
import NavBar from "./NavBar";
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
      <div>
        <NavBar
          changeQuery={this.props.changeQuery}
          searchReceipe={this.props.searchReceipe}
        />
        <div className="wrapper">
          {this.props.data1.map((a, i) => (
            <Content recepe={a.recipe} key={i} />
          ))}
        </div>
      </div>
    );
  }
}
