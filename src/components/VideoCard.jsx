import React from "react";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import {
  demoChannelTitle,
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
} from "../utils/constants";
import { Link } from "react-router-dom";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "358px", md: "320px" },
        boxShadow: "none",
        borderRadius: 0,
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          alt={snippet?.title}
          image={snippet?.thumbnails?.high?.url}
          sx={{
            width: {
              xs: "100%",
              sm: "358px",
              md: "320px",
            },
            height: 180,
          }}
        ></CardMedia>
      </Link>
      <CardContent
        sx={{
          backgroundColor: "#1e1e1e",
          height: "106px",
        }}
      >
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography
            variant="subtitle1"
            sx={{ lineHeight: 1.3, mb: "10px" }}
            fontWeight="bold"
            color="#fff"
          >
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link
          to={
            snippet?.channelId ? `/video/${snippet?.channelId}` : demoChannelUrl
          }
        >
          <Typography
            variant="subtitle2"
            fontWeight="bold"
            color="grey"
            sx={{ lineHeight: 1 }}
          >
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle
              sx={{ color: "gray", ml: "5px", fontSize: "14px" }}
            ></CheckCircle>
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
