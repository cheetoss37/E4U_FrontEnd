import React from "react";
import { makeStyles, Box, Typography } from "@material-ui/core";
import AdminSidebar from "../../../../components/AdminSidebar";

const AdminHomeBody = () => {
  const classes = useStyles();
  return (
    <Box className={classes.homeContainer}>
      <AdminSidebar />
      <Box className={classes.homeBody}>home admin</Box>
    </Box>
  );
};

export default AdminHomeBody;

export const useStyles = makeStyles((theme) => ({
  homeContainer: {
    margin: theme.spacing(2),
    display: "flex",
  },
  homeBody: {},
}));
