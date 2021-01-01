import React from "react";
import { Route, Switch } from "react-router-dom";
import FirstPage from "./components/FirstPage";
import DetailedRecipe from "./components/DetailedRecipe";
import NavBar from "./components/NavBar";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      data1: [],
      data2: {},
    };
  }
  changeQuery = (q) => {
    this.setState({ query: q });
  };
  searchReceipe = (e) => {
    e.preventDefault();

    fetch(
      `https://api.edamam.com/search?q=${this.state.query}&app_id=d9f74858&app_key=6810f9ebfe70f3fb9cc51c6382cf7c29`
    )
      .then((res) => res.json())
      .then((data) => this.setState({ data1: data.hits, data2: data }));
  };
  render() {
    return (
      <div className="App">
        <NavBar
          changeQuery={this.changeQuery}
          searchReceipe={this.searchReceipe}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <FirstPage
                changeQuery={this.changeQuery}
                searchReceipe={this.searchReceipe}
                data1={this.state.data1}
              />
            )}
          />
          <Route
            exact
            path="/recipe/:uri"
            render={(routeProps) => (
              <DetailedRecipe
                id={routeProps.match.params.uri}
                data1={this.state.data1}
              />
            )}
          />
          <Route
            render={() => (
              <FirstPage
                changeQuery={this.changeQuery}
                searchReceipe={this.searchReceipe}
                data1={this.state.data1}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
