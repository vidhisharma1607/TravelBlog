import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import DiaryItem from "./DiaryItem";
import { getAllPosts } from "../api-helpers/helpers";

const Diaries = () => {
  const [posts, setPosts] = useState();
  useEffect(() => {
    getAllPosts()
      .then((data) => setPosts(data?.posts))
      .catch((err) => console.log(err));
  }, []);
  return (
    <Box
      display="flex"
      flexDirection={"column"}
      padding={3}
      justifyContent="center"
      alignItems={"center"}
    >
      {posts &&
        posts.map((item, index) => (
          <DiaryItem
            key={index}
            date={new Date(`${item.date}`).toLocaleDateString()}
            description={item.description}
            image={item.image}
            id={item._id}
            location={item.location}
            title={item.title}
            user={item.user}
          />
        ))}
      {/* <DiaryItem></DiaryItem> */}
    </Box>
  );
};

export default Diaries;
