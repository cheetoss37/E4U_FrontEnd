import React from "react";
import { makeStyles, Typography, Menu, MenuItem } from "@material-ui/core";
import { Link } from "react-router-dom";
import { ABOUT, FREE_TEST, OUR_EXAMS } from "../../../constants/path.const";

const MobileMenu = ({ anchorEl, onClose }) => {
  const classes = useStyles();

  return (
    <Menu
      id="menu-appbar"
      keepMounted
      anchorEl={anchorEl}
      onClose={onClose}
      open={Boolean(anchorEl)}
      getContentAnchorEl={null}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      classes={{ paper: classes.root }}
    >
      <MenuItem>
        <Typography className={classes.linkText} component={Link} to={ABOUT}>
          About us
        </Typography>
      </MenuItem>
      <MenuItem>
        <Typography
          className={classes.linkText}
          component={Link}
          to={OUR_EXAMS}
        >
          Our exams
        </Typography>
      </MenuItem>
      <MenuItem>
        <Typography
          className={classes.linkText}
          component={Link}
          to={FREE_TEST}
        >
          Free tests
        </Typography>
      </MenuItem>
    </Menu>
  );
};

export default MobileMenu;

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.1)",
  },
  linkText: {
    margin: theme.spacing(0, 2, 0, 2),
    fontWeight: "bold",
  },
}));
