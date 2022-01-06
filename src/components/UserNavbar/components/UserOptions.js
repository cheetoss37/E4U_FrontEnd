import React from "react";
import { makeStyles, Typography, Menu, MenuItem } from "@material-ui/core";
import { useDispatch } from "react-redux";
import * as actions from "../../../redux/actions";
import { AppConst, PathConst } from "../../../constants";
import { useHistory } from "react-router-dom";

const UserOptions = ({ anchorEl, onClose }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const onLogout = () => {
    dispatch(actions.reset());
    localStorage.removeItem(AppConst.USER_PROFILE);
    history.push(PathConst.HOME);
  };
  return (
    <Menu
      id="user-option"
      keepMounted
      anchorEl={anchorEl}
      onClose={onClose}
      open={Boolean(anchorEl)}
      getContentAnchorEl={null}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      classes={{ paper: classes.root }}
    >
      <MenuItem
        onClick={() => {
          onClose();
        }}
      >
        <Typography className={classes.linkText}>Lịch sử làm bài</Typography>
      </MenuItem>
      <MenuItem
        onClick={() => {
          onLogout();
          onClose();
        }}
      >
        <Typography className={classes.linkText}>Đăng xuất</Typography>
      </MenuItem>
    </Menu>
  );
};

export default UserOptions;

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.1)",
  },
  linkText: {
    margin: theme.spacing(0, 2, 0, 2),
    fontWeight: "bold",
  },
}));
