import { Box, FormLabel, Typography, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { sendAuthRequest } from "../api-helpers/helpers";
import { authActions } from "../store";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const Auth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSignUP, setIsSignUp] = useState(true);
  const onResRecieved = (data) => {
    if (isSignUP) {
      localStorage.setItem("userId", data.user._id);
    } else {
      localStorage.setItem("userId", data.id);
    }
    dispatch(authActions.login());
    navigate("/diaries");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputState);

    if (isSignUP) {
      sendAuthRequest(true, inputState)
        .then(onResRecieved)
        .catch((err) => console.log(err));
    } else {
      sendAuthRequest(false, inputState)
        .then(onResRecieved)
        .catch((err) => console.log(err));
    }
  };
  const [inputState, setInputState] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <Box
      width="40"
      borderRadius={10}
      boxShadow={"5px 5px 10px #ccc"}
      margin="auto"
      marginTop={10}
    >
      <form onSubmit={handleSubmit}>
        <Box
          display="flex"
          flexDirection={"column"}
          width="60%"
          padding={5}
          margin="auto"
        >
          <Typography variant="h4" textAlign="center">
            {isSignUP ? "SignUp" : "Login"}
          </Typography>
          {isSignUP && (
            <>
              <FormLabel>Name</FormLabel>
              <TextField
                onChange={handleChange}
                value={inputState.name}
                name="name"
                margin="normal"
              />
            </>
          )}
          <FormLabel>Email</FormLabel>
          <TextField
            onChange={handleChange}
            value={inputState.email}
            name="email"
            margin="normal"
          />
          <FormLabel>Password</FormLabel>
          <TextField
            value={inputState.password}
            name="password"
            margin="normal"
            type="password"
            onChange={handleChange}
          />
          <Button sx={{ mt: 2 }} type="submit" variant="contained">
            {isSignUP ? "SignUp" : "Login"}
          </Button>
          <Button
            onClick={() => setIsSignUp(!isSignUP)}
            sx={{ mt: 2 }}
            variant="outlined"
          >
            Change to {isSignUP ? "Login" : "SignUp"}
          </Button>
        </Box>
      </form>
    </Box>
  );
};
export default Auth;
