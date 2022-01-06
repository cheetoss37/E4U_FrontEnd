import React, { useEffect } from "react";
import { makeStyles, Box } from "@material-ui/core";
import AdminNavbar from "../../../components/AdminNavbar";
import ManageQuestionBody from "./components/ManageQuestionBody";
import { AppConst, PathConst } from "../../../constants";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as actions from "../../../redux/actions";

const ManageQuestion = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const userInfo = JSON.parse(localStorage.getItem(AppConst.USER_PROFILE));

  useEffect(() => {
    dispatch(actions.getListQuestionRequest({ page: 1 }));
  }, [dispatch]);

  useEffect(() => {
    if (userInfo?.user?.role === AppConst.USER_ROLE.normalUser || !userInfo) {
      history.push(PathConst.HOME);
    }
  }, []);
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
