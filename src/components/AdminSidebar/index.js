import React from "react";
import { makeStyles, Box, Typography } from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";
import { AppConst, PathConst } from "../../constants";

const AdminSidebar = () => {
  const classes = useStyles();
  const location = useLocation();
  const userInfo = JSON.parse(localStorage.getItem(AppConst.USER_PROFILE));

  return (
    <Box className={classes.sidebarContainer}>
      <Box className={classes.sidebarBody}>
        <Box
          className={
            location.pathname === PathConst.MANAGE_USER
              ? classes.sidebarItemActive
              : classes.sidebarItem
          }
          component={Link}
          to={
            userInfo?.user?.role === AppConst.USER_ROLE.admin &&
            PathConst.MANAGE_USER
          }
        >
          <Typography>Quản lý người dùng</Typography>
        </Box>
        <Box
          className={
            location.pathname === PathConst.MANAGE_TEST
              ? classes.sidebarItemActive
              : classes.sidebarItem
          }
          component={Link}
          to={PathConst.MANAGE_TEST}
        >
          <Typography>Quản lý bài kiểm tra</Typography>
        </Box>
        <Box
          className={
            location.pathname === PathConst.MANAGE_QUESTION
              ? classes.sidebarItemActive
              : classes.sidebarItem
          }
          component={Link}
          to={PathConst.MANAGE_QUESTION}
        >
          <Typography>Quản lý bài câu hỏi</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default AdminSidebar;

const useStyles = makeStyles((theme) => ({
  sidebarContainer: {
    height: "calc(100vh - 80px)",
    width: 256,
    borderRight: "1px solid #DFE9EE",
    background: "#383F4B",
    color: "white",
    flex: "0 1 auto",
  },
  sidebarBody: {
    display: "flex",
    flexDirection: "column",
  },
  sidebarItem: {
    margin: theme.spacing(2, 1, 2, 1),
    "&:hover": {
      cursor: "pointer",
    },
  },
  sidebarItemActive: {
    padding: theme.spacing(2, 1, 2, 1),
    "&:hover": {
      cursor: "pointer",
    },
    background: "#FA811B",
  },
}));
