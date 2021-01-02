import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Styles/DetailedRecipe.css";
export default class DetailedRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailedData: {},
    };
  }
  componentDidMount() {
    let urid = `http://www.edamam.com/ontologies/edamam.owl#recipe_${this.props.id}`;
    if (this.props.data1.length === 0) {
      fetch(
        `https://api.edamam.com/search?q=${this.props.id}&app_id=d9f74858&app_key=6810f9ebfe70f3fb9cc51c6382cf7c29`
      )
        .then((res) => res.json())
        .then((data) => this.setState({ detailedData: data.hits[0] }));
    } else {
      this.setState({
        detailedData: this.props.data1.find((x) => x.recipe.uri === urid),
      });
    }
  }
  render() {
    const detailedD = this.state.detailedData;
    console.log(detailedD);
    return (
      <div>
        <div className="header">
          <Link to="/">
            <button className="bb">GO Back</button>
          </Link>
        </div>
        <div className="detailedData">
          {Object.keys(detailedD).length !== 0 && (
            <div className="contain">
              <h1 className="rTitle"> {detailedD.recipe.label} </h1>
              <div className="rec-container">
                <img
                  src={detailedD.recipe.image}
                  alt="the coocked food"
                  className="dfoopic"
                />
                <div className="rec-info">
                  <p>
                    this recepi contains {Math.round(detailedD.recipe.calories)}
                    calories
                  </p>
                  <div>
                    <p>To coock this beatiful recipe all you need is:</p>
                    <ul className="list-ing">
                      {detailedD.recipe.ingredientLines.map((a, i) => (
                        <li key={i}> {a} </li>
                      ))}
                    </ul>

                    <h3>
                      TO see full recepie{" "}
                      <a
                        target="_blank"
                        href={detailedD.recipe.url}
                        rel="noopener noreferrer"
                      >
                        Click Here!
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
