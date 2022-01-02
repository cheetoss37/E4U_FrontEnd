import React, { useEffect } from "react";
import { makeStyles, Box } from "@material-ui/core";
import AdminNavbar from "../../../components/AdminNavbar";
import ManageUserBody from "./components/ManageUserBody";
import { useDispatch } from "react-redux";
import * as actions from "../../../redux/actions";
import { AppConst, PathConst } from "../../../constants";
import { useHistory } from "react-router-dom";

const ManageUser = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const userInfo = JSON.parse(localStorage.getItem(AppConst.USER_PROFILE));

  useEffect(() => {
    dispatch(actions.getListUserRequest({ page: 1 }));
  }, []);

  useEffect(() => {
    if (userInfo?.user?.role === AppConst.USER_ROLE.normalUser) {
      history.push(PathConst.HOME);
    }
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
