import React, { useEffect } from "react";
import { makeStyles, Box } from "@material-ui/core";
import AdminNavbar from "../../../components/AdminNavbar";
import ManageUserBody from "./components/ManageUserBody";
import { useDispatch } from "react-redux";
import * as actions from "../../../redux/actions";

const ManageUser = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getListUserRequest({ page: 1 }));
  }, []);

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
