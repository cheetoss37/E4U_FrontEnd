import React from "react";
import { makeStyles, Typography, Menu, MenuItem } from "@material-ui/core";
import File from "../../../../assets/icons/file-text.png";
import Edit from "../../../../assets/icons/edit.png";
import Trash from "../../../../assets/icons/trash-red.png";

const ActionMenu = ({ anchorEl, onClose, onOpenConfirmDelete, onEditTest }) => {
  const classes = useStyles();

  return (
    <Menu
      id="manage-test-option"
      keepMounted
      anchorEl={anchorEl}
      onClose={onClose}
      open={Boolean(anchorEl)}
      getContentAnchorEl={null}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      classes={{ paper: classes.root }}
    >
      <MenuItem className={classes.menuItem}>
        <img src={File} />
        <Typography className={classes.linkText}>Phát hành</Typography>
      </MenuItem>
      <MenuItem className={classes.menuItem}>
        <img src={Edit} />
        <Typography className={classes.linkText} onClick={onEditTest}>
          Chỉnh sửa
        </Typography>
      </MenuItem>
      <MenuItem className={classes.menuItem} onClick={onOpenConfirmDelete}>
        <img src={Trash} />
        <Typography className={classes.linkText}>Xóa</Typography>
      </MenuItem>
    </Menu>
  );
};

export default ActionMenu;

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.1)",
  },
  linkText: {
    margin: theme.spacing(0, 2, 0, 2),
  },
  menuItem: {
    display: "flex",
    alignItems: "center",
  },
}));
