import { Button, Grid, Link, Paper, Typography } from "@mui/material";
import { getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import useFirebase from "../../Hooks/useFirebase";

const English = () => {
  const [englishChapter, setEnglishChapter] = useState([]);

  const { handleDelete, topicsCollectionRef } = useFirebase();

  //filter english data
  useEffect(() => {
    const getTopics = async () => {
      const data = await getDocs(topicsCollectionRef);
      const a = data.docs.filter((e) => ({ ...e.data() }));
      const b = a.filter((e) => e.id).map((e) => e.data());
      setEnglishChapter(
        b.filter((e) => {
          if (e) {
            return e.subject === "English";
          }
        })
      );
    };
    getTopics();
  }, []);
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          {" "}
        </Grid>
        <Grid item xs={8} sx={{ m: 2 }}>
          <Typography variant="h4" gutterBottom component="div">
            Total English Topics: {englishChapter.length}
          </Typography>
          {englishChapter.map((topic) => {
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

                  <Typography variant="body1" gutterBottom sx={{ mx: 2 }}>
                    <strong>Description: </strong>
                    {topic?.description}
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
        </Grid>

        <Grid item xs={2}>
          {" "}
        </Grid>
      </Grid>
    </div>
  );
};

export default English;
