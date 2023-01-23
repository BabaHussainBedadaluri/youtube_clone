import React from "react";
import { Stack, Box } from "@mui/material";
import ChannelCard from "./ChannelCard";
import VideoCard from "./VideoCard";
const Videos = ({ videos, alignProp, direction }) => {
  if (!videos?.length) return "Loading..";
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent={alignProp ? alignProp : "start"}
    >
      {videos.map((item, i) => (
        <Box key={i} p={1}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channel={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
