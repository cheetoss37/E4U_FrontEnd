import React from "react";
import { makeStyles, Box } from "@material-ui/core";
import Usernavbar from "../../../components/UserNavbar";
import AppFooter from "../../../components/AppFooter";
import FreeTestsBody from "./components/FreeTestsBody";

const FreeTests = () => {
  const classes = useStyles();

  return (
    <Box className={classes.freeTestsContainer}>
      <Usernavbar />
      <FreeTestsBody />
      <AppFooter />
    </Box>
  );
};

export default FreeTests;

const useStyles = makeStyles((theme) => ({
  freeTestsContainer: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
  },
}));
