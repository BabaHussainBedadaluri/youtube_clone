import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      background: "#000",
      justifyContent: "space-between",
      top: 0,
      position: "sticky",
      zIndex: 100,
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45}></img>
    </Link>
    <SearchBar />
  </Stack>
);
export default Navbar;
