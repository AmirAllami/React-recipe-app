import React from "react";

function NavBar(props) {
  return (
    <div className="nav">
      <h1>Receipe APP</h1>
      <form
        onSubmit={e => {
          props.searchReceipe(e);
        }}
        className="search"
      >
        <input
          type="text"
          onChange={e => {
            props.changeQuery(e.target.value);
          }}
          className="text-area"
        />
        <button className="submit"> Search</button>
      </form>
    </div>
  );
}
export default NavBar;
