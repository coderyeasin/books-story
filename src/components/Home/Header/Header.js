import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import {
  Backdrop,
  Fade,
  Modal,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import useFirebase from "../../../Hooks/useFirebase";

const pages = ["Math", "English", "Chemistry", "Physics", "Programming"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

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

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  const [openBooking, setBookingOpen] = React.useState(false);
  const handleBookingOpen = () => setBookingOpen(true);
  const handleBookingClose = () => setBookingOpen(false);

  const [topics, setTopics] = useState("Math");

  const handleChange = (event) => {
    setTopics(event.target.value);
  };

  const {
    setTitle,
    setName,
    setSubject,
    setDescription,
    setChapter,
    addNewTopics,
  } = useFirebase();

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            Books Story's
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Button onClick={handleBookingOpen} variant="contained">
              Add Topics
            </Button>

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
                    id="outlined-size-small"
                    name="name"
                    onBlur={(e) => {
                      setChapter(e.target.value);
                    }}
                    size="small"
                    placeholder="which chapter"
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
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
