import React from "react";
import { makeStyles, Box } from "@material-ui/core";
import AdminNavbar from "../../../components/AdminNavbar";
import ManageTestBody from "./components/ManageTestBody";

const ManageTest = () => {
  const classes = useStyles();

  return (
    <Box className={classes.manageTestContainer}>
      <AdminNavbar />
      <ManageTestBody />
    </Box>
  );
};

export default ManageTest;

export const useStyles = makeStyles((theme) => ({}));
