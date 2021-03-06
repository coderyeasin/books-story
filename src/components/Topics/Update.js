import {
  Button,
  MenuItem,
  Paper,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import { getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase";

const Update = () => {
  const { id } = useParams();
  const [topics, setTopics] = useState([]);
  const {
    topicsCollectionRef,
    updateTopics,
    setTitle,
    setName,
    setSubject,
    setDescription,
    setChapter,
  } = useFirebase();

  //loaded data
  useEffect(() => {
    const getTopics = async () => {
      const data = await getDocs(topicsCollectionRef);
      const a = data.docs.filter((e) => ({ ...e.data() }));
      setTopics(a.filter((e) => e.id === id).map((e) => e.data()));
    };
    getTopics();
  }, []);

  return (
    <div>
      <h3>Add your new value to change this topics : {id}</h3>

      {topics.map((topic) => {
        return (
          <div key={id}>
            <Paper
              elevation={3}
              sx={{ m: 2, py: 2, width: "75%", mx: "auto" }}
              key={topic.id}
            >
              <Typography variant="h3" gutterBottom component="div">
                Title: {topic?.title}
              </Typography>
              <TextField
                sx={{ width: "90%", m: 1 }}
                id="outlined-size-small"
                name="title"
                size="small"
                placeholder="Topics Title"
                defaultValue={topic.title}
                onBlur={(e) => {
                  setTitle(e.target.value);
                  console.log(e.target.value);
                }}
              />
              <TextField
                sx={{ width: "90%", m: 1 }}
                id="outlined-size-small"
                name="name"
                defaultValue={topic.name}
                onBlur={(e) => {
                  setName(e.target.value);
                  console.log(e.target.value);
                }}
                size="small"
                placeholder="Author Name"
              />
              <TextField
                sx={{ width: "90%", m: 1 }}
                id="outlined-size-small"
                name="name"
                onBlur={(e) => {
                  setChapter(e.target.value);
                }}
                size="small"
                defaultValue={topic?.chapter}
                placeholder="Topics Name"
              />
              <TextField
                sx={{ width: "90%", m: 1 }}
                id="outlined-size-small"
                name="name"
                defaultValue={topic.subject}
                onBlur={(e) => {
                  setSubject(e.target.value);
                  console.log(e.target.value);
                }}
                size="small"
                placeholder="Subject Name"
              />
              <TextareaAutosize
                style={{ width: "90%", margin: 1, padding: "3px" }}
                aria-label="minimum height"
                name="description"
                defaultValue={topic.description}
                minRows={5}
                onBlur={(e) => {
                  setDescription(e.target.value);
                  console.log(e.target.value);
                }}
                placeholder="Share your knowledge with us..."
              />{" "}
              <br />
              <Button
                onClick={() => updateTopics(id)}
                type="submit"
                variant="contained"
              >
                Updated value
              </Button>
            </Paper>
          </div>
        );
      })}
    </div>
  );
};

export default Update;
