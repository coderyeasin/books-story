import React, { useState } from "react";
import { Grid, MenuItem, TextareaAutosize, TextField } from "@mui/material";
import Algebra from "../Subjects/Math/Algebra";
import Geometry from "../Subjects/Math/Geometry";
import Header from "./Header/Header";
import Button from "@mui/material/Button";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import useFirebase from "../../Hooks/useFirebase";
import Topics from "../Topics/Topics";
import Update from "../Topics/Update";

const topicss = [
  {
    name: "Math",
  },
  {
    name: "English",
  },
  {
    name: "Chemistry",
  },
  {
    name: "Physics",
  },
  {
    name: "Programming",
  },
];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Home = () => {
  const [topics, setTopics] = useState("Math");

  const { setTitle, setName, setSubject, setDescription, addNewTopics } =
    useFirebase();

  const handleChange = (event) => {
    setTopics(event.target.value);
  };

  const [openBooking, setBookingOpen] = React.useState(false);
  const handleBookingOpen = () => setBookingOpen(true);
  const handleBookingClose = () => setBookingOpen(false);

  return (
    <div>
      <Header />
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Topics />

          {/* <Algebra /> */}
          <Geometry />
        </Grid>
        <Grid item xs={4} my={3}>
          <Button onClick={handleBookingOpen} variant="contained">
            Add Topics
          </Button>

          <Update />

          {/* MOdal */}

          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openBooking}
            onClose={handleBookingClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={openBooking}>
              <Box sx={style}>
                <Typography
                  id="transition-modal-title"
                  variant="h6"
                  component="h2"
                >
                  Topic's Name
                </Typography>
                {/* <form > */}
                <TextField
                  sx={{ width: "90%", m: 1 }}
                  id="outlined-size-small"
                  name="title"
                  size="small"
                  placeholder="Topics Title"
                  onBlur={(e) => {
                    setTitle(e.target.value);
                    console.log(e.target.value);
                  }}
                />
                <TextField
                  sx={{ width: "90%", m: 1 }}
                  id="outlined-size-small"
                  name="name"
                  onBlur={(e) => {
                    setName(e.target.value);
                  }}
                  size="small"
                  placeholder="Author Name"
                />
                <TextField
                  sx={{ width: "90%", m: 1 }}
                  id="outlined-select-currency"
                  select
                  label="Select"
                  value={topics}
                  onBlur={(e) => {
                    setSubject(e.target.value);
                  }}
                  onChange={handleChange}
                  name="subject"
                  helperText="Please select your subject"
                >
                  {topicss.map((option) => (
                    <MenuItem key={option.name} value={option.name}>
                      {option.name}
                    </MenuItem>
                  ))}
                </TextField>
                <TextareaAutosize
                  style={{ width: "90%", margin: 1, padding: "3px" }}
                  aria-label="minimum height"
                  name="description"
                  minRows={5}
                  onBlur={(e) => {
                    setDescription(e.target.value);
                  }}
                  placeholder="Share your knowledge with us..."
                />
                <Button
                  onClick={addNewTopics}
                  type="submit"
                  variant="contained"
                >
                  Submit
                </Button>
                {/* </form> */}
              </Box>
            </Fade>
          </Modal>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
