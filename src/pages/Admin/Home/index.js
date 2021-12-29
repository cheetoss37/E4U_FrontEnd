import React from "react";
import { makeStyles, Box } from "@material-ui/core";
import AdminNavbar from "../../../components/AdminNavbar";
import AdminHomeBody from "./components/AdminHomeBody";

const AdminHome = () => {
  const classes = useStyles();

  return (
    <Box className={classes.homeContainer}>
      <AdminNavbar />
      <AdminHomeBody />
    </Box>
  );
};

export default AdminHome;

export const useStyles = makeStyles(() => ({}));
