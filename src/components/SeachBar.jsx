import React from "react";

const SearchBar = ({setSeachQuery}) => {
        const BarStyle = {
            display: "flex",
            justifyContent: "center",
            width: "30%",
            margin: "20px auto",
            padding: "0.5rem",
            border: "2px solid #ffcf77",
            borderRadius: "10px",
            fontSize: "16px",
            fontFamily: "Arial, sans-serif",
            fontWeight: "400",
            textAlign: "center",
            outline: "none",
            '@media (min-width: 768px)': {
            width: "20rem",
            margin: "20px",
            },
        };
        

  return (
    <input 
     style={BarStyle}
     key="search-bar"
     placeholder= "Search | Movies"
     onChange={(e) => setSeachQuery(e.target.value)}
    />
  );
}

export default SearchBar;