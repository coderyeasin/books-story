import { TextField } from "@mui/material";
import React from "react";

const AddTopics = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={4}>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </Grid>
      </Grid>
    </div>
  );
};

export default AddTopics;
