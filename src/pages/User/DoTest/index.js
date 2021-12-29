import React from "react";
import { makeStyles, Box } from "@material-ui/core";
import Usernavbar from "../../../components/UserNavbar";
import AppFooter from "../../../components/AppFooter";
import DoTestBody from "./components/DoTestBody";

const DoTest = () => {
  const classes = useStyles();

  return (
    <Box className={classes.doTestContainer}>
      <Usernavbar />
      <DoTestBody />
      <AppFooter />
    </Box>
  );
};

export default DoTest;

const useStyles = makeStyles((theme) => ({
  doTestContainer: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
  },
}));
