import React from "react";
import useFirebase from "../../Hooks/useFirebase";
import { Button, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Topics = () => {
  const { topics, handleDelete } = useFirebase();
  return (
    <div>
      {topics.map((topic) => {
        return (
          <div key={topic.id}>
            <Paper elevation={3} sx={{ m: 2, py: 2 }}>
              <Typography variant="h4" gutterBottom component="div">
                Title: {topic?.title}
              </Typography>

              <Typography variant="h5" gutterBottom component="div">
                Topic: {topic?.chapter} || Subject: {topic?.subject}
              </Typography>

              <Typography variant="h6" gutterBottom component="div">
                Author Name : {topic?.name}
              </Typography>

              <Typography variant="body2" gutterBottom sx={{ mx: 2 }}>
                <strong>Description: </strong>
                {topic?.description.slice(0, 520)}...
              </Typography>

              <Link
                style={{ textDecoration: "none" }}
                to={`/update/${topic?.id}`}
              >
                <Button sx={{ mx: 2 }} variant="contained">
                  Update
                </Button>
              </Link>
              <Button
                onClick={() => handleDelete(topic.id)}
                variant="contained"
              >
                Delete
              </Button>
            </Paper>
          </div>
        );
      })}
    </div>
  );
};

export default Topics;
