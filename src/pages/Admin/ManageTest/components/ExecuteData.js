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
import { useSelector } from "react-redux";
const ExecuteData = ({ onClose, isOpen }) => {
  const classes = useStyles();
  const executeData = useSelector((state) => state.test?.executeInfo);

  return (
    <Dialog open={isOpen} classes={{ paper: classes.dialog }}>
      <DialogTitle className={classes.dialogName}>
        Thông tin bài kiểm tra
      </DialogTitle>
      <DialogContent>
        <Box>Số lần bài kiểm tra được làm: {executeData.length}</Box>
        {executeData.map((item, index) => (
          <Box key={index}>
            <Box className={classes.infoDetail}>
              <Typography>{index + 1}.&nbsp; </Typography>
              <Typography>Tên người làm: {item?.name}&nbsp;</Typography>
              <Typography>Điểm: {item?.point}</Typography>
            </Box>
          </Box>
        ))}
      </DialogContent>
      <DialogActions className={classes.btnField}>
        <Button onClick={onClose} className={classes.submitButton}>
          Đóng
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ExecuteData;

const useStyles = makeStyles((theme) => ({
  dialog: {
    backgroundColor: "white",
    backgroundImage: "none",
    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.05)",
    borderRadius: 24,
    width: 450,
    height: 300,
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
  infoDetail: {
    display: "flex",
    alignItems: "center",
    marginTop: theme.spacing(1),
  },
}));
