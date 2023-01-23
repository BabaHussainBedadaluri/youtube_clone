import React from "react";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { useEffect } from "react";
import { fetchFromAPI } from "../utils/FetchApi";
import { useState } from "react";
import Videos from "./Videos";

const ChannelDetail = () => {
  let { id } = useParams();
  let [channelDetails, setChannelDetails] = useState();
  let [videos, setVideos] = useState([]);
  console.log(videos, channelDetails);
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((res) => {
      setChannelDetails(res.items[0]);
    });
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (res) => {
        setVideos(res?.items);
      }
    );
  }, [id]);
  return (
    <Box sx={{ minHeight: "95vh" }}>
      <Box>
        <div
          style={{
            background:
              " linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(46,9,121,1) 5%, rgba(0,212,255,1) 100%)",
            height: "200px",
            zIndex: 10,
          }}
        ></div>
        <ChannelCard channel={channelDetails} marginTop="-95px"></ChannelCard>
        <Box display="flex" p="2">
          <Box sx={{ mr: { sm: "100px" } }} />
          <Videos videos={videos}></Videos>
        </Box>
      </Box>
    </Box>
  );
};

export default ChannelDetail;
