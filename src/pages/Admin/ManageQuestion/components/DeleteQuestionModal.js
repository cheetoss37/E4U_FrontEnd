import React from "react";
import {
  makeStyles,
  Dialog,
  DialogTitle,
  DialogActions,
  Button,
  DialogContent,
  Box,
  Typography,
} from "@material-ui/core";

const DeleteQuestionModal = ({ onConfirm, onClose, isOpen }) => {
  const classes = useStyles();
  return (
    <Dialog open={isOpen} classes={{ paper: classes.dialog }}>
      <DialogTitle className={classes.dialogName}>Xóa câu hỏi</DialogTitle>
      <DialogContent>
        <Box>
          <Typography>Bạn có chắc muốn câu hỏi này khỏi hệ thống?</Typography>
        </Box>
      </DialogContent>
      <DialogActions className={classes.btnField}>
        <Button onClick={onClose} className={classes.cancelButton}>
          Hủy
        </Button>
        <Button onClick={onConfirm} className={classes.submitButton}>
          Xóa
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteQuestionModal;

const useStyles = makeStyles((theme) => ({
  dialog: {
    backgroundColor: "white",
    backgroundImage: "none",
    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.05)",
    borderRadius: 24,
    width: 500,
    height: 250,
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
}));
