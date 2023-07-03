import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostDetails, postUpdate } from "../api-helpers/helpers";
import { Box, Button, FormLabel, TextField, Typography } from "@mui/material";
// import { useState } from "react";
// import { addPost } from "../api-helpers/helpers";
const DiaryUpdate = () => {
  const [post, setPost] = useState();
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    location: "",
    imageUrl: "",
  });
  const id = useParams().id;
  console.log(id);
  useEffect(() => {
    getPostDetails(id)
      .then((data) => {
        setPost(data.post);

        setInputs({
          title: data.post.title,
          description: data.post.description,
          location: data.post.location,
          imageUrl: data.post.image,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    postUpdate(inputs, id)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  return (
    <Box display="flex" flexDirection={"column"} width="100%" height="100%">
      <Box display="flex" margin="auto" padding={2}>
        <Typography variant="h4" fontFamily={"dancing script"}>
          Add your travel Diary
        </Typography>
      </Box>
      {post && (
        <form onSubmit={handleSubmit}>
          <Box
            padding={3}
            display="flex"
            margin="auto"
            width="80%"
            flexDirection={"column"}
          >
            <FormLabel>Title</FormLabel>
            <TextField
              onChange={handleChange}
              name="title"
              value={inputs.title}
              margin="normal"
            />
            <FormLabel>Description</FormLabel>
            <TextField
              onChange={handleChange}
              name="description"
              value={inputs.description}
              margin="normal"
            />
            <FormLabel>Image URl</FormLabel>
            <TextField
              onChange={handleChange}
              name="imageUrl"
              value={inputs.imageUrl}
              margin="normal"
            />
            <FormLabel>Location</FormLabel>
            <TextField
              onChange={handleChange}
              name="location"
              value={inputs.location}
              margin="normal"
            />

            <Button
              type="submit"
              color="warning"
              sx={{ width: "50%", margin: "auto", mt: 2 }}
              variant="contained"
            >
              Post
            </Button>
          </Box>
        </form>
      )}
    </Box>
  );
};

export default DiaryUpdate;
