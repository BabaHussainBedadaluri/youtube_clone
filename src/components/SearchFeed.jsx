import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import SideBar from "./SideBar";
import Videos from "./Videos";
import { fetchFromAPI } from "../utils/FetchApi";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  let [videos, setVideos] = useState([]);
  let { searchTerm } = useParams();
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => {
      setVideos(data.items);
    });
  }, [searchTerm]);
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box pl={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" sx={{ color: "White" }}>
          {" "}
          Search result for:{" "}
          <span style={{ color: "#F31503" }}>{searchTerm}</span> videos
        </Typography>
        <Videos videos={videos} alignProp="center" />
      </Box>
    </Stack>
  );
};

export default SearchFeed;
