import React from "react";
import {
  makeStyles,
  AppBar,
  Box,
  Typography,
  Avatar,
  Button,
} from "@material-ui/core";
import AppLogo from "../../assets/icons/home-logo.png";
import { Link, useLocation } from "react-router-dom";
import { ABOUT, FREE_TEST, OUR_EXAMS, LOGIN } from "../../constants/path.const";
const Usernavbar = () => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <AppBar className={classes.appBar}>
      <Box className={classes.appBarContainer}>
        <Box className={classes.appBarLeft}>
          <img src={AppLogo} alt="app-logo" className={classes.appLogo} />
        </Box>
        <Box className={classes.appBarRight}>
          <Box className={classes.appLink}>
            <Typography
              className={
                location.pathname === ABOUT
                  ? classes.selectedLink
                  : classes.linkText
              }
              component={Link}
              to={ABOUT}
            >
              About us
            </Typography>
            <Typography
              className={
                location.pathname === OUR_EXAMS
                  ? classes.selectedLink
                  : classes.linkText
              }
              component={Link}
              to={OUR_EXAMS}
            >
              Our exams
            </Typography>
            <Typography
              className={
                location.pathname === FREE_TEST
                  ? classes.selectedLink
                  : classes.linkText
              }
              component={Link}
              to={FREE_TEST}
            >
              Free tests
            </Typography>
          </Box>
          <Box className={classes.appUser}>
            {/* <Avatar /> */}
            <Button className={classes.loginBtn} component={Link} to={LOGIN}>
              <Typography>Login</Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </AppBar>
  );
};

export default Usernavbar;

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "sticky",
    background: "white",
    boxShadow: "0px 1px 0px #DFE9EE",
    color: theme.palette.text.primary,
  },
  appBarContainer: {
    display: "flex",
    height: 80,
    alignItems: "center",
    margin: theme.spacing(0, 2, 0, 2),
    justifyContent: "space-between",
  },
  appLogo: {
    width: 60,
    height: 60,
  },
  appBarRight: {
    display: "flex",
  },
  appLink: {
    display: "flex",
    alignItems: "center",
    marginRight: theme.spacing(2),
  },
  linkText: {
    margin: theme.spacing(0, 2, 0, 2),
  },
  selectedLink: {
    margin: theme.spacing(0, 2, 0, 2),
    color: "#FA811B",
  },
  loginBtn: {
    textTransform: "none",
    backgroundColor: "#FA811B",
    "&:hover": {
      backgroundColor: "#FA811B",
    },
    color: "white",
    borderRadius: 50,
    padding: theme.spacing(1, 2, 1, 2),
  },
}));
