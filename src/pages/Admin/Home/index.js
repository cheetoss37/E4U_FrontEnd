import React, { useEffect } from "react";
import { makeStyles, Box } from "@material-ui/core";
import AdminNavbar from "../../../components/AdminNavbar";
import AdminHomeBody from "./components/AdminHomeBody";
import { AppConst, PathConst } from "../../../constants";
import { useHistory } from "react-router-dom";

const AdminHome = () => {
  const classes = useStyles();
  const history = useHistory();
  const userInfo = JSON.parse(localStorage.getItem(AppConst.USER_PROFILE));

  useEffect(() => {
    if (userInfo?.user?.role === AppConst.USER_ROLE.normalUser) {
      history.push(PathConst.HOME);
    }
  }, []);

  return (
    <Box className={classes.homeContainer}>
      <AdminNavbar />
      <AdminHomeBody />
    </Box>
  );
};

export default AdminHome;

export const useStyles = makeStyles(() => ({}));
