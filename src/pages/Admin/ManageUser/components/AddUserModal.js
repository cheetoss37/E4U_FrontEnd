import React from "react";
import {
  makeStyles,
  Dialog,
  DialogTitle,
  DialogActions,
  Button,
  DialogContent,
  Box,
  InputBase,
  FormControl,
  MenuItem,
  Select,
  InputLabel,
} from "@material-ui/core";

const AddUserModal = ({
  onConfirm,
  onClose,
  isOpen,
  username,
  name,
  role,
  email,
  onChangeRole,
  onUsernameChange,
  onNameChange,
  onChangeEmail,
}) => {
  const classes = useStyles();

  return (
    <Dialog open={isOpen} classes={{ paper: classes.dialog }}>
      <DialogTitle className={classes.dialogName}>
        Thêm người dùng mới
      </DialogTitle>
      <DialogContent>
        <Box className={classes.form}>
          <InputBase
            className={classes.username}
            value={username}
            placeholder="Username"
            onChange={onUsernameChange}
          />
          <InputBase
            className={classes.name}
            value={email}
            placeholder="Email"
            onChange={onChangeEmail}
          />
          <InputBase
            className={classes.name}
            value={name}
            placeholder="Họ tên"
            onChange={onNameChange}
          />
          <FormControl className={classes.formControl}>
            <InputLabel id="simple-select-label">Role</InputLabel>
            <Select
              labelId="imple-select-label"
              id="simple-select"
              value={role}
              onChange={onChangeRole}
            >
              <MenuItem value={2}>Người quản lí đề</MenuItem>
              <MenuItem value={3}>Người dùng</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </DialogContent>
      <DialogActions className={classes.btnField}>
        <Button onClick={onClose} className={classes.cancelButton}>
          Hủy
        </Button>
        <Button onClick={onConfirm} className={classes.submitButton}>
          Thêm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddUserModal;

const useStyles = makeStyles((theme) => ({
  dialog: {
    backgroundColor: "white",
    backgroundImage: "none",
    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.05)",
    borderRadius: 24,
    width: 600,
    height: 400,
  },
  dialogName: {
    fontWeight: "bold",
    textAlign: "center",
  },
  cancelButton: {
    background: "#F50808",
    textTransform: "none",
    fontWeight: "bold",
  },
  submitButton: {
    background: "#FA811B",
    textTransform: "none",
    fontWeight: "bold",
  },
  btnField: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  username: {
    border: "1px solid #C4C4C4",
    borderRadius: 6,
    marginBottom: theme.spacing(2),
    padding: theme.spacing(0.5, 2),
  },
  name: {
    border: "1px solid #C4C4C4",
    borderRadius: 6,
    marginBottom: theme.spacing(2),
    padding: theme.spacing(0.5, 2),
  },
  role: {
    border: "1px solid #C4C4C4",
    borderRadius: 6,
    marginBottom: theme.spacing(2),
    padding: theme.spacing(0.5, 2),
  },
}));
