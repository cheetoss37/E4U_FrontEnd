import React from "react";
import { makeStyles, Box } from "@material-ui/core";

const ResultDetailBody = () => {
  const classes = useStyles();
  return <Box className={classes.resultContainer}></Box>;
};

export default ResultDetailBody;

const useStyles = makeStyles((theme) => ({
  resultContainer: {
    flex: "1 1 auto",
    margin: theme.spacing(2),
  },
}));
