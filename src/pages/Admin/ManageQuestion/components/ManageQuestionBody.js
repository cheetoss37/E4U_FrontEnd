import React from "react";
import { makeStyles, Box, Typography } from "@material-ui/core";
import AdminSidebar from "../../../../components/AdminSidebar";

const ManageQuestionBody = () => {
  const classes = useStyles();

  return (
    <Box className={classes.homeContainer}>
      <AdminSidebar />
      <Box className={classes.homeBody}>manage question</Box>
    </Box>
  );
};

export default ManageQuestionBody;

export const useStyles = makeStyles((theme) => ({
  homeContainer: {
    margin: theme.spacing(2),
    display: "flex",
  },
  homeBody: {},
}));
