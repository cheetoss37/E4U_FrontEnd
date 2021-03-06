import React from "react";
import {
  makeStyles,
  Dialog,
  DialogTitle,
  DialogActions,
  Button,
  Typography,
  DialogContent,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { PathConst } from "../../../../constants";

const ResultModal = ({ onConfirm, onClose, isOpen, userInfo }) => {
  const classes = useStyles();
  const result = useSelector((state) => state.doTest.testData?.point);

  return (
    <Dialog open={isOpen} classes={{ paper: classes.dialog }}>
      <DialogTitle className={classes.dialogName}>
        {userInfo ? "Nộp bài thành công" : "Hãy đăng ký để có thêm thông tin"}
      </DialogTitle>
      {userInfo && (
        <DialogContent>
          <Typography>Kết quả: {result}</Typography>
        </DialogContent>
      )}
      <DialogActions className={classes.btnField}>
        <Button
          className={classes.submitButton}
          component={Link}
          to={userInfo ? PathConst.HOME : PathConst.REGISTER}
        >
          {userInfo ? "Về trang chủ" : "Đăng ký"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ResultModal;

const useStyles = makeStyles((theme) => ({
  dialog: {
    backgroundColor: "white",
    backgroundImage: "none",
    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.05)",
    borderRadius: 24,
    width: 300,
    height: 200,
  },
  dialogName: {
    fontWeight: "bold",
    textAlign: "center",
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
