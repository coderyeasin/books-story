import React from "react";
import { Grid } from "@mui/material";
import Topics from "../Topics/Topics";

const Home = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          {" "}
        </Grid>
        <Grid item xs={8}>
          <Topics />
        </Grid>

        <Grid item xs={2}>
          {" "}
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
