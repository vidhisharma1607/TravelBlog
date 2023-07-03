import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import EditIcon from "@mui/icons-material/Edit";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import { Alert, Box, Button, CardActions, Snackbar } from "@mui/material";
import { Link } from "react-router-dom";
import { postDelete } from "../api-helpers/helpers";

function DiaryItem({ title, description, location, image, date, id, user }) {
  const [open, setOpen] = useState(false);
  const isLoggedInUser = () => {
    if (localStorage.getItem("userId") === user) {
      console.log(user);
      return true;
    }
    return false;
  };
  const handleDelete = () => {
    postDelete(id)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
    setOpen(true);
  };

  return (
    <Card
      sx={{
        width: "50%",
        height: "auto",
        margin: 1,
        padding: 1,
        display: "flex",
        flexDirection: "column",
        boxShadow: "5px 5px 10px #ccc",
      }}
    >
      <CardHeader
        action={
          <IconButton aria-label="settings">
            {/* <MoreVertIcon /> */}
          </IconButton>
        }
        title={title}
        header={location}
        subheader={date}
      />
      <img height="194" src={image} alt={location} />
      <CardContent>
        <Typography paddingBottom={1} variant="h6" color="text.secondary">
          {title}
        </Typography>
        <hr />
        <Box paddingTop={1} display="flex">
          <Typography width="176px" fontWeight={"bold"}>
            Vidhi Sharma
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </Box>
      </CardContent>
      {isLoggedInUser() && (
        <CardActions sx={{ marginLeft: "auto" }}>
          <IconButton LinkComponent={Link} to={`/post/${id}`}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={handleDelete}>
            <DeleteIcon />
          </IconButton>
        </CardActions>
      )}

      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
      >
        <Alert
          onClose={() => setOpen(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          This is a success message!
        </Alert>
      </Snackbar>
    </Card>
  );
}

export default DiaryItem;
