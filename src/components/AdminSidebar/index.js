import React from "react";
import { makeStyles, Box, Typography } from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";
import { PathConst } from "../../constants";

const AdminSidebar = () => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <Box className={classes.sidebarContainer}>
      <Box className={classes.sidebarBody}>
        <Box
          className={classes.sidebarItem}
          component={Link}
          to={PathConst.MANAGE_USER}
        >
          <Typography>Quản lý người dùng</Typography>
        </Box>
        <Box
          className={classes.sidebarItem}
          component={Link}
          to={PathConst.MANAGE_TEST}
        >
          <Typography>Quản lý bài kiểm tra</Typography>
        </Box>
        <Box
          className={classes.sidebarItem}
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
  },
  sidebarBody: {
    margin: theme.spacing(0, 2, 0, 2),
    display: "flex",
    flexDirection: "column",
  },
  sidebarItem: {
    margin: theme.spacing(1, 0, 1, 0),
    "&:hover": {
      cursor: "pointer",
    },
  },
}));
