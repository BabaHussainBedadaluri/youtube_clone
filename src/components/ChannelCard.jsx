import React from "react";
import { Stack, Box } from "@mui/material";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import {
  demoChannelTitle,
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoProfilePicture,
} from "../utils/constants";
import { Link } from "react-router-dom";
import { flexbox } from "@mui/system";

const ChannelCard = ({ channel, marginTop }) => {
  return (
    <Box
      sx={{
        width: {
          xs: "356px",
          md: "260px",
          margin: "auto",
          height: "326px",
          marginTop: marginTop,
        },
      }}
    >
      <Link to={`/channel/${channel?.id?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <CardMedia
            image={
              channel?.snippet?.thumbnails?.high?.url || demoProfilePicture
            }
            alt={channel?.snippet?.title}
            sx={{ borderRadius: "50%", height: "180px", width: "180px", mb: 2 }}
          ></CardMedia>
          <Typography variant="h6">
            {channel?.snippet?.title}
            <CheckCircle
              sx={{ color: "gray", ml: "5px", fontSize: "16px" }}
            ></CheckCircle>
          </Typography>
          {channel?.statistics?.subscriberCount && (
            <Typography variant="subtitle1" color="#e3e3e3">
              {channel?.statistics?.subscriberCount} Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
