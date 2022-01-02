import React, { useEffect } from "react";
import { makeStyles, Box } from "@material-ui/core";
import Usernavbar from "../../../components/UserNavbar";
import AppFooter from "../../../components/AppFooter";
import FreeTestsBody from "./components/FreeTestsBody";
import { useDispatch } from "react-redux";
import * as actions from "../../../redux/actions";
import { AppConst } from "../../../constants";

const FreeTests = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      actions.getPublicTestRequest({
        page: 1,
        state: AppConst.TEST_STATUS.public,
        testType: AppConst.TEST_TYPE.freeTest,
      })
    );
  }, []);

  return (
    <Box className={classes.freeTestsContainer}>
      <Usernavbar />
      <FreeTestsBody />
      <AppFooter />
    </Box>
  );
};

export default FreeTests;

const useStyles = makeStyles((theme) => ({
  freeTestsContainer: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
  },
}));
