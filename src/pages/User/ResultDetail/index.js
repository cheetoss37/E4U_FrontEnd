import React, { useEffect } from "react";
import { makeStyles, Box } from "@material-ui/core";
import Usernavbar from "../../../components/UserNavbar";
import AppFooter from "../../../components/AppFooter";
import { useDispatch } from "react-redux";
import * as actions from "../../../redux/actions";
import { AppConst, PathConst } from "../../../constants";
import ResultDetailBody from "./components/ResultDetailBody";
import { useHistory } from "react-router-dom";

const ResultDetail = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const userInfo = JSON.parse(localStorage.getItem(AppConst.USER_PROFILE));

  useEffect(() => {
    if (!userInfo) {
      history.push(PathConst.HOME);
    }
  }, []);

  return (
    <Box className={classes.resultContainer}>
      <Usernavbar />
      <ResultDetailBody />
      <AppFooter />
    </Box>
  );
};

export default ResultDetail;

const useStyles = makeStyles((theme) => ({
  resultContainer: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
  },
}));
