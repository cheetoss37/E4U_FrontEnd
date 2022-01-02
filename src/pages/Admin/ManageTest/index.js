import React, { useEffect } from "react";
import { makeStyles, Box } from "@material-ui/core";
import AdminNavbar from "../../../components/AdminNavbar";
import ManageTestBody from "./components/ManageTestBody";
import { AppConst, PathConst } from "../../../constants";
import { useHistory } from "react-router-dom";

const ManageTest = () => {
  const classes = useStyles();
  const history = useHistory();
  const userInfo = JSON.parse(localStorage.getItem(AppConst.USER_PROFILE));

  useEffect(() => {
    if (userInfo?.user?.role === AppConst.USER_ROLE.normalUser) {
      history.push(PathConst.HOME);
    }
  }, []);
  return (
    <Box className={classes.manageTestContainer}>
      <AdminNavbar />
      <ManageTestBody />
    </Box>
  );
};

export default ManageTest;

export const useStyles = makeStyles((theme) => ({}));
