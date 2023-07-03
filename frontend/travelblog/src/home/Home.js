import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <Box position={"relative"} width="100%" height="90vh">
      <img src="road.jpeg" alt=" image" width={"100%"} height="80%" />
      <Typography
        fontFamily={"Dancing Script , cursive"}
        variant="h3"
        textAlign={"center"}
        width="100%"
        sx={{ position: "absolute", top: "0px" }}
      >
        Live your life by a compass,not a clock
      </Typography>
      <Box width={"100%"} height="20%" display={"flex"} flexDirection="column">
        <Typography
          fontFamily={"Dancing Script , cursive"}
          variant="h4"
          textAlign={"center"}
          padding={4}
        >
          Share your travel diaries with us
        </Typography>
        <Box margin="auto">
          <Button
            LinkComponent={Link}
            to="/add"
            variant="outlined"
            sx={{ mr: 2 }}
          >
            Share your Journey
          </Button>
          <Button
            LinkComponent={Link}
            to="/diaries"
            variant="contained"
            sx={{ ml: 2 }}
          >
            View Diaries
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
export default Home;
