import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchFromAPI } from "../utils/FetchApi";
import { useState } from "react";
import ReactPlayer from "react-player";
import Videos from "./Videos";
import VideoComments from "./VideoComments";

const VideoDetail = () => {
  let { id } = useParams();
  let [videoDetails, setVideoDetails] = useState(null);
  let [videos, setVideos] = useState(null);
  let [comments, setComments] = useState(null);
  let [state, setState] = useState(false);

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) => {
      setVideoDetails(data.items[0]);
    });
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}`).then((data) => {
      setVideos(data.items);
    });
    fetchFromAPI(`commentThreads?part=snippet&videoId=${id}`).then((data) => {
      setComments(data.items);
    });
  }, [id]);

  if (videoDetails) {
    var {
      snippet: { channelId, channelTitle, title },
      statistics: { viewCount, likeCount, commentCount },
    } = videoDetails;
  }
  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box
            sx={{
              width: "100%",
              position: "relative",
              top: "30px",
            }}
          >
            <ReactPlayer
              url={`https//:www.youtube.com/watch?v=${id}`}
              controls
              className="react-player"
            />
            <Typography color="white" variant="h6" fontWeight="bold" p={2}>
              {videoDetails && title}
            </Typography>
            <Stack direction="row" justifyContent="space-between" px={2} py={1}>
              <Link to={`./channel/${channelId}`}>
                <Typography color="white">
                  {channelTitle}{" "}
                  <CheckCircle
                    sx={{ width: "15px", height: "15px", color: "grey" }}
                  ></CheckCircle>{" "}
                </Typography>
              </Link>
              <Stack direction="row" alignItems="center" gap="20px">
                <Typography color="white" sx={{ opacity: 0.7 }}>
                  👀 {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography color="white" sx={{ opacity: 0.7 }}>
                  👍 {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
            <Typography
              onClick={() => setState(!state)}
              color="white"
              variant="h6"
              my="35px"
              mx="15px"
              sx={{
                cursor: "pointer",
              }}
            >
              {commentCount} Comments
            </Typography>
            {state && (
              <Stack direction="column" justifyContent="center">
                <Typography variant="subtitle1" color="white">
                  {comments &&
                    comments.map((commt) => (
                      <VideoComments videoComment={commt}></VideoComments>
                    ))}
                </Typography>
              </Stack>
            )}
          </Box>
        </Box>
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          {<Videos videos={videos} direction="column"></Videos>}
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
