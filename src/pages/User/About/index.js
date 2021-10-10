import React from "react";
import { makeStyles, Box } from "@material-ui/core";
import Usernavbar from "../../../components/UserNavbar";

const About = () => {
  const classes = useStyles();

  return (
    <Box>
      <Usernavbar />
    </Box>
  );
};

export default About;

const useStyles = makeStyles((theme) => ({}));
