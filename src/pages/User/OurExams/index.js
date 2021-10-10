import React from "react";
import { makeStyles, Box } from "@material-ui/core";
import Usernavbar from "../../../components/UserNavbar";

const OurExams = () => {
  const classes = useStyles();
  
  return (
    <Box>
      <Usernavbar />
    </Box>
  );
};

export default OurExams;

const useStyles = makeStyles((theme) => ({}));
