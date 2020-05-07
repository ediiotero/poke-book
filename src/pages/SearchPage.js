import React from "react";
import Random from "../components/Random";

export default function SearchPage() {
  return (
    <>
      {/* move to a search component */}
      <h1>Search for Pokemon</h1>
      <div style={{ marginTop: "2rem" }} className="nes-field">
        <label htmlFor="search_field">Enter Pokemon Name</label>
        <input type="text" id="search_field" className="nes-input" />
        <button
          style={{ marginTop: "2rem" }}
          type="button"
          className="nes-btn is-warning"
        >
          Search
        </button>
      </div>
      {/* random 10 component */}
      <Random />
    </>
  );
}
