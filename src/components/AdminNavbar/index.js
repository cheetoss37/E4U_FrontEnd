import React from "react";
import {
  AppBar,
  makeStyles,
  Box,
  Typography,
  Button,
  Avatar,
} from "@material-ui/core";
import { ADMIN_HOME } from "../../constants/path.const";
import { Link } from "react-router-dom";
import AppLogo from "../../assets/icons/home-logo.png";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as actions from "../../redux/actions";
import { AppConst, PathConst } from "../../constants";

const AdminNavbar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const userInfo = JSON.parse(localStorage.getItem(AppConst.USER_PROFILE));

  const onLogout = () => {
    dispatch(actions.reset());
    localStorage.removeItem(AppConst.USER_PROFILE);
    history.push(PathConst.HOME);
  };

  return (
    <AppBar className={classes.appBar}>
      <Box className={classes.appBarContainer}>
        <Box className={classes.appBarLeft}>
          <Box className={classes.logoField} component={Link} to={ADMIN_HOME}>
            <img src={AppLogo} alt="app-logo" className={classes.appLogo} />
          </Box>
        </Box>
        <Box className={classes.appBarRight}>
          <Box className={classes.appUser}>
            <Box className={classes.infoField}>
              {" "}
              <Avatar />
              <Typography>{userInfo?.user?.name}</Typography>
            </Box>
            <Button className={classes.logoutBtn} onClick={onLogout}>
              <Typography className={classes.logoutBtnText}>Logout</Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </AppBar>
  );
};

export default AdminNavbar;

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
  logoField: {
    [theme.breakpoints.down("sm")]: {
      borderRight: "2px solid #C4C4C4",
    },
  },
  appLogo: {
    width: 60,
    height: 60,
  },
  appBarLeft: {
    display: "flex",
    alignItems: "center",
  },
  appBarRight: {
    display: "flex",
  },
  appUser: {
    display: "flex",
  },
  logoutBtn: {
    textTransform: "none",
  },
  infoField: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));
