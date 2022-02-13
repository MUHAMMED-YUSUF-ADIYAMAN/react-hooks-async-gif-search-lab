import React, { useState } from "react";

const GifSearch = ({setSearch}) => {

  const [input ,setInput]=useState();
  return (
    <>
      <h3>Enter a Search Term</h3>
      <div>
        <input type="search" name="search" onChange={(e)=> setInput(e.target.value)} />
      </div>
      <div>
        <button
          type="button"
          style={{ color: "white", backgroundColor: "#5ab75a" }}
          onClick={()=>setSearch(input)}
        >
          Search
        </button>
      </div>
    </>
  );
};

export default GifSearch;
