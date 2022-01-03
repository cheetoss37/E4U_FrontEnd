import React, { useState } from "react";
import {
  makeStyles,
  AppBar,
  Box,
  Typography,
  Avatar,
  Button,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import AppLogo from "../../assets/icons/home-logo.png";
import { Link, useLocation } from "react-router-dom";
import {
  ABOUT,
  FREE_TEST,
  OUR_EXAMS,
  LOGIN,
  HOME,
} from "../../constants/path.const";
import MobileMenu from "./components/MobileMenu";
import { AppConst } from "../../constants";
import UserOptions from "./components/UserOptions";

const Usernavbar = () => {
  const classes = useStyles();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const userInfo = JSON.parse(localStorage.getItem(AppConst.USER_PROFILE));

  const [anchorEl, setAnchorEl] = useState(null);
  const [userAnchorEl, setUserAnchorEl] = useState(null);

  const onMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const onClose = () => {
    setAnchorEl(null);
    setUserAnchorEl(null);
  };

  const onOpenUserOption = (event) => {
    setUserAnchorEl(event.currentTarget);
  };

  return (
    <AppBar className={classes.appBar}>
      <Box className={classes.appBarContainer}>
        <Box className={classes.appBarLeft}>
          <Box className={classes.logoField} component={Link} to={HOME}>
            <img src={AppLogo} alt="app-logo" className={classes.appLogo} />
          </Box>
          {isMobile && (
            <>
              <Menu onClick={onMenuOpen} className={classes.menuIcon} />
              <MobileMenu anchorEl={anchorEl} onClose={onClose} />
            </>
          )}
        </Box>
        <Box className={classes.appBarRight}>
          {!isMobile && (
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
              {userInfo?.user?.role !== undefined && (
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
              )}
              {userInfo?.user?.role === undefined && (
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
              )}
            </Box>
          )}
          <Box className={classes.appUser}>
            {userInfo ? (
              <Box>
                <Avatar
                  src={userInfo?.user?.profilePic}
                  onClick={onOpenUserOption}
                />
                <Typography>{userInfo?.user?.name}</Typography>
              </Box>
            ) : (
              <Button className={classes.loginBtn} component={Link} to={LOGIN}>
                <Typography className={classes.loginBtnText}>Login</Typography>
              </Button>
            )}
            <UserOptions anchorEl={userAnchorEl} onClose={onClose} />
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
  menuIcon: {
    marginLeft: theme.spacing(2),
  },
  appLink: {
    display: "flex",
    alignItems: "center",
    marginRight: theme.spacing(2),
  },
  linkText: {
    margin: theme.spacing(0, 2, 0, 2),
    fontWeight: "bold",
  },
  selectedLink: {
    margin: theme.spacing(0, 2, 0, 2),
    color: "#FA811B",
    fontWeight: "bold",
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
  loginBtnText: {
    fontWeight: "bold",
  },
}));
