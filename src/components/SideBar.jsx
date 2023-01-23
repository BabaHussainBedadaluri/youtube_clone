import { Stack } from "@mui/material";
import React from "react";
import { categories } from "../utils/constants";

const SideBar = ({ selectedItem, setSelectedItem }) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((ele) => (
        <button
          className="category-btn"
          onClick={() => setSelectedItem(ele.name)}
          style={{
            color: "white",
            backgroundColor: ele.name === selectedItem && "#FC1503",
          }}
          key={ele.name}
        >
          <span
            style={{
              color: ele.name === selectedItem ? "white" : "#FC1503",
              marginRight: "15px",
            }}
          >
            {ele.icon}
          </span>
          <span style={{ opacity: ele.name === selectedItem ? 1 : 0.7 }}>
            {ele.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default SideBar;
