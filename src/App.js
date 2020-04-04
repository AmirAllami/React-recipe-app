import React from "react";

import "./App.css";
import NavBar from "./components/NavBar";
import Content from "./components/Content";

class App extends React.Component {
  state = {
    query: "",
    data1: []
  };
  /*componentDidMount() {
    fetch(
      "https://api.edamam.com/search?q=chicken&app_id=d9f74858&app_key=6810f9ebfe70f3fb9cc51c6382cf7c29"
    )
      .then(res => res.json())
      .then(data => console.log(data.hits[0]));
  }*/
  changeQuery = q => {
    this.setState({ query: q });
  };

  searchReceipe = e => {
    e.preventDefault();

    fetch(
      `https://api.edamam.com/search?q=${this.state.query}&app_id=d9f74858&app_key=6810f9ebfe70f3fb9cc51c6382cf7c29`
    )
      .then(res => res.json())
      .then(data => this.setState({ data1: data.hits }));
  };

  render() {
    return (
      <div className="App">
        <NavBar
          changeQuery={this.changeQuery}
          searchReceipe={this.searchReceipe}
        />
        <div className="wrapper">
          {this.state.data1.map(a => (
            <Content recepe={a.recipe} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
