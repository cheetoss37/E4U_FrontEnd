import React from "react";
import { makeStyles, Box } from "@material-ui/core";
import AdminNavbar from "../../../components/AdminNavbar";
import ManageUserBody from "./components/ManageUserBody";

const ManageUser = () => {
  const classes = useStyles();
  return (
    <Box className={classes.manageUserContainer}>
      <AdminNavbar />
      <ManageUserBody />
    </Box>
  );
};

export default ManageUser;

export const useStyles = makeStyles((theme) => ({
  manageUserContainer: {},
}));
