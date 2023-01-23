import React from "react";
import { Typography, Card, CardContent, CardMedia, Box } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { useEffect } from "react";
import { useState } from "react";

const VideoComments = ({ videoComment }) => {
  useEffect(() => {}, []);
  if (!videoComment) return "Loading..";
  return (
    <Box width="70vw" ml="14px">
      <Typography color="grey" mb={0.1} fontWeight="bold" variant="subtitle1">
        <span>
          {" "}
          <img
            src={
              videoComment?.snippet?.topLevelComment?.snippet
                ?.authorProfileImageUrl
            }
            alt="Img"
            width="20px"
            style={{ borderRadius: "50%", marginRight: "10px" }}
          ></img>
        </span>
        {videoComment?.snippet?.topLevelComment?.snippet?.authorDisplayName}
      </Typography>
      <Typography color="white" mb={3} ml="30px">
        {videoComment?.snippet?.topLevelComment?.snippet?.textOriginal}
      </Typography>
    </Box>
  );
};

export default VideoComments;
