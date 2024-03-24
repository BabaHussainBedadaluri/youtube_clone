import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import SideBar from "./SideBar";
import Videos from "./Videos";
import { fetchFromAPI } from "../utils/FetchApi";
import { useEffect } from "react";
import { useState } from "react";

const Feed = () => {
  let [selectedItem, setSelectedItem] = useState("New");
  let [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedItem}`).then((data) => {
      setVideos(data.items);
    });
  }, [selectedItem]);
  return ( 
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
        <Typography
          className="copy-right"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          @Copyright 2022
        </Typography>
      </Box>

      <Box pl={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" sx={{ color: "White" }}>
          {" "}
          {selectedItem} <span style={{ color: "#F31503" }}>videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
