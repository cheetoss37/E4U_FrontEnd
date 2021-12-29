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

const AddQuestionModal = ({
  onConfirm,
  onClose,
  isOpen,
  questionName,
  questionType,
  questionLevel,
  questionAnswer,
  onQuestionNameChange,
  onQuestionTypeChange,
  onQuestionLevelChange,
  onChangeAnswerInput,
  onAddSingleAnswer,
}) => {
  const classes = useStyles();

  return (
    <Dialog open={isOpen} classes={{ paper: classes.dialog }}>
      <DialogTitle className={classes.dialogName}>Thêm câu hỏi</DialogTitle>
      <DialogContent>
        <Box className={classes.form}>
          <InputBase
            className={classes.username}
            value={questionName}
            placeholder="Question name"
            onChange={onQuestionNameChange}
          />
          <Box className={classes.selectField}>
            <FormControl className={classes.formControl}>
              <InputLabel id="simple-select-label">Loại câu hỏi</InputLabel>
              <Select
                labelId="select-label"
                id="type-select"
                value={questionType}
                onChange={onQuestionTypeChange}
              >
                <MenuItem value={1}>Trắc nghiệm</MenuItem>
                <MenuItem value={2}>Viết</MenuItem>
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel id="simple-select-label">Độ khó</InputLabel>
              <Select
                labelId="select-label"
                id="select"
                value={questionLevel}
                onChange={onQuestionLevelChange}
              >
                <MenuItem value={1}>Dễ</MenuItem>
                <MenuItem value={2}>Trung bình</MenuItem>
                <MenuItem value={3}>Khó</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <InputBase
            className={classes.username}
            value={questionAnswer}
            placeholder="Answer"
            onChange={onChangeAnswerInput}
          />
        </Box>
        <Button onClick={onAddSingleAnswer} className={classes.addQuestionBtn}>
          Thêm câu trả lời
        </Button>
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

export default AddQuestionModal;

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
  addQuestionBtn: {
    background: theme.palette.primary.main,
    textTransform: "none",
    fontWeight: "bold",
    color: "white",
    "&:hover": {
      background: theme.palette.primary.main,
    },
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
  selectField: {
    margin: theme.spacing(2, 0),
  },
  formControl: {
    minWidth: 200,
    marginRight: theme.spacing(2),
  },
}));
