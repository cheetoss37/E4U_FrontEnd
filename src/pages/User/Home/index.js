import React from "react";
import { makeStyles, Box } from "@material-ui/core";
import Usernavbar from "../../../components/UserNavbar";
import HomeBody from "./components/HomeBody";
import AppFooter from "../../../components/AppFooter";

const Home = () => {
  const classes = useStyles();

  return (
    <Box className={classes.homeContainer}>
      <Usernavbar />
      <HomeBody />
      <AppFooter />
    </Box>
  );
};

export default Home;

const useStyles = makeStyles((theme) => ({
  homeContainer: {
    display: "flex",
    flexDirection: "column",
    height: "100vh"
  }
}));
