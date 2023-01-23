import React from "react";
import { useState } from "react";
import { useNavigate, useNavigation } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  let [searchTerm, setSearchTerm] = useState("");
  let navigate = useNavigate();
  return (
    <Paper
      component="form"
      onSubmit={() => {
        if (searchTerm) {
          navigate(`./search/${searchTerm}`);
          setSearchTerm("");
        }
      }}
      sx={{
        borderRadius: 20,
        mr: { sm: 5 },
        pl: 2,
        border: "1px solid #e3e3e3",
        boxShadow: "none",
      }}
    >
      <input
        className="search-bar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
      ></input>
      <IconButton type="submit" sx={{ color: "red", p: "5px" }}>
        {" "}
        <Search></Search>
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
