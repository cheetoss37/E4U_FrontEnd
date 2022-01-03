import React, { useEffect } from "react";
import { makeStyles, Box } from "@material-ui/core";
import Usernavbar from "../../../components/UserNavbar";
import OurExamsBody from "./components/OurExamsBody";
import AppFooter from "../../../components/AppFooter";
import { useDispatch } from "react-redux";
import * as actions from "../../../redux/actions";
import { AppConst } from "../../../constants";

const OurExams = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      actions.getPublicTestRequest({
        page: 1,
        state: AppConst.TEST_STATUS.public,
        testType: AppConst.TEST_TYPE.userTest,
      })
    );
  }, []);

  return (
    <Box className={classes.ourExamsContainer}>
      <Usernavbar />
      <OurExamsBody />
      <AppFooter />
    </Box>
  );
};

export default OurExams;

const useStyles = makeStyles((theme) => ({
  ourExamsContainer: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
  },
}));
