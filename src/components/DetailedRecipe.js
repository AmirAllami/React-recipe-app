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
          <h1>Recipe App</h1>
          <Link to="/">
            <button className="bb">GO Back</button>
          </Link>
        </div>
        <div className="detailedData">
          {Object.keys(detailedD).length !== 0 && (
            <div className="contain">
              <h1> {detailedD.recipe.label} </h1>
              <img
                src={detailedD.recipe.image}
                alt="the coocked food"
                className="dfoopic"
              />
              <p>
                this recepi contains {detailedD.recipe.calories}
                calories
              </p>
              <div>
                <p>To coock this beatiful recipe all you need is:</p>
                <ul className="list-ing">
                  {detailedD.recipe.ingredientLines.map((a, i) => (
                    <li key={i}> {a} </li>
                  ))}
                </ul>

                <h3>TO see full recepie</h3>
                <a
                  target="_blank"
                  href={detailedD.recipe.url}
                  rel="noopener noreferrer"
                >
                  Click Here!
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

{
  /* <div>

</div> */
}
