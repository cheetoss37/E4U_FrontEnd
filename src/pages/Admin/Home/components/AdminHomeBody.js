import React from "react";
import { makeStyles, Box, Typography } from "@material-ui/core";
import AdminSidebar from "../../../../components/AdminSidebar";
import { AppConst } from "../../../../constants";

const AdminHomeBody = () => {
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem(AppConst.USER_PROFILE));
  console.log(user);
  return (
    <Box className={classes.homeContainer}>
      <AdminSidebar />
      <Box className={classes.homeBody}>
        <Box className={classes.homeContent}>
          <Typography>Welcome back {user?.user?.name}</Typography>
          <Typography>Let's start do amazing things!</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default AdminHomeBody;

export const useStyles = makeStyles((theme) => ({
  homeContainer: {
    margin: 0,
    display: "flex",
  },
  homeBody: {
    flex: "1 1 auto",
    padding: theme.spacing(2, 1, 2, 1),
    background: "#9B9B9B",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  homeContent: {
    background: "white",
    width: "95%",
    height: "95%",
    borderRadius: 16,
    padding: theme.spacing(2),
  },
}));
