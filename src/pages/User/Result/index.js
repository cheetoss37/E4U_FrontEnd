import React, { useEffect } from "react";
import { makeStyles, Box } from "@material-ui/core";
import Usernavbar from "../../../components/UserNavbar";
import AppFooter from "../../../components/AppFooter";
import { useDispatch } from "react-redux";
import * as actions from "../../../redux/actions";
import { AppConst, PathConst } from "../../../constants";
import ResultBody from "./components/ResultBody";
import { useHistory } from "react-router-dom";

const Result = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const userInfo = JSON.parse(localStorage.getItem(AppConst.USER_PROFILE));

  useEffect(() => {
    if (!userInfo) {
      history.push(PathConst.HOME);
    }
  }, []);

  useEffect(() => {
    dispatch(
      actions.getListResultRequest({ page: 1, userId: userInfo?.user?._id })
    );
  }, []);

  return (
    <Box className={classes.resultContainer}>
      <Usernavbar />
      <ResultBody />
      <AppFooter />
    </Box>
  );
};

export default Result;

const useStyles = makeStyles((theme) => ({
  resultContainer: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
  },
}));
