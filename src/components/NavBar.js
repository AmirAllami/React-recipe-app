import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
function NavBar(props) {
  return (
    <div className="nav">
      <div className="nav-items">
        <h1>Receipe APP</h1>
        <form
          onSubmit={(e) => {
            props.searchReceipe(e);
          }}
          className="search"
        >
          <input
            type="text"
            onChange={(e) => {
              props.changeQuery(e.target.value);
            }}
            placeholder="Search.."
            className="text-area"
          />
          <button className="submit">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
      </div>
    </div>
  );
}
export default NavBar;
