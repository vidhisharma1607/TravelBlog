import { Box, Button, FormLabel, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { addPost } from "../api-helpers/helpers";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    location: "",
    imageUrl: "",
    date: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    addPost(inputs)
      .then((res) => {
        console.log(res);
        navigate("/diaries");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Box display="flex" flexDirection={"column"} width="100%" height="100%">
      <Box display="flex" margin="auto" padding={2}>
        <Typography variant="h4" fontFamily={"dancing script"}>
          Add your travel Diary
        </Typography>
      </Box>
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
          <FormLabel>Date</FormLabel>
          <TextField
            type="date"
            onChange={handleChange}
            name="date"
            value={inputs.date}
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
    </Box>
  );
};

export default Add;
