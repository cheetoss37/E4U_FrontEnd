import React from "react";
import { makeStyles, Box } from "@material-ui/core";
import AdminNavbar from "../../../components/AdminNavbar";
import ManageQuestionBody from "./components/ManageQuestionBody";

const ManageQuestion = () => {
  const classes = useStyles();

  return (
    <Box className={classes.manageQuestionContainer}>
      <AdminNavbar />
      <ManageQuestionBody />
    </Box>
  );
};

export default ManageQuestion;

const useStyles = makeStyles((theme) => ({
  manageQuestionContainer: {},
}));
