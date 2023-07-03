import { Button, Box } from "@mui/material";
import React, { useDebugValue } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../store";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = () => {
    dispatch(authActions.logout());
    localStorage.removeItem("userId");
    navigate("/");
  };
  return (
    <Box>
      <Button
        onClick={handleClick}
        variant="contained"
        sx={{ mr: "auto", width: "15px" }}
      >
        Logout
      </Button>
    </Box>
  );
};

export default Logout;
