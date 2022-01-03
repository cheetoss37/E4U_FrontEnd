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
  Typography,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../../../redux/actions";
import { uuid } from "../../../../utils";
import { Check, Close } from "@material-ui/icons";
const AddQuestionModal = ({ onConfirm, onClose, isOpen }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const questionDetail = useSelector((state) => state.question?.questionDetail);

  const onQuestionNameChange = (e) => {
    let newQuestionData = {
      ...questionDetail,
      questionName: e.target.value,
    };
    dispatch(actions.setNewSelectedQuestion(newQuestionData));
  };

  const onQuestionTypeChange = (e) => {
    let newQuestionData = {
      ...questionDetail,
      questionType: e.target.value,
    };
    dispatch(actions.setNewSelectedQuestion(newQuestionData));
  };

  const onQuestionLevelChange = (e) => {
    let newQuestionData = {
      ...questionDetail,
      questionLevel: e.target.value,
    };
    dispatch(actions.setNewSelectedQuestion(newQuestionData));
  };

  const onAddSingleAnswer = (e) => {
    let newAnswer = {
      answerId: uuid(),
      answerName: "",
    };
    let newQuestionData = {
      ...questionDetail,
      answer: [...questionDetail.answer, newAnswer],
    };
    dispatch(actions.setNewSelectedQuestion(newQuestionData));
  };

  const onChangeInputAnswer = (answerIndex) => (e) => {
    let newQuestionData = {
      ...questionDetail,
      answer: questionDetail?.answer.map((answer, i) =>
        i === answerIndex
          ? {
              ...answer,
              answerName: e.target.value,
            }
          : answer
      ),
    };
    dispatch(actions.setNewSelectedQuestion(newQuestionData));
  };

  const onSetTrueAnswer = (answerData) => {
    let newQuestionData = {
      ...questionDetail,
      trueAnswer: answerData.answerId,
    };
    dispatch(actions.setNewSelectedQuestion(newQuestionData));
  };

  const onSaveQuestion = () => {
    dispatch(actions.createQuestionRequest(questionDetail));
    onClose();
  };

  return (
    <Dialog open={isOpen} classes={{ paper: classes.dialog }}>
      <DialogTitle className={classes.dialogName}>Thêm câu hỏi</DialogTitle>
      <DialogContent>
        <Box className={classes.form}>
          <InputBase
            className={classes.username}
            value={questionDetail?.questionName}
            placeholder="Question name"
            onChange={onQuestionNameChange}
          />
          <Box className={classes.selectField}>
            <FormControl className={classes.formControl}>
              <InputLabel id="simple-select-label">Loại câu hỏi</InputLabel>
              <Select
                labelId="select-label"
                id="type-select"
                value={questionDetail?.questionType}
                onChange={onQuestionTypeChange}
              >
                <MenuItem value={1}>Trắc nghiệm</MenuItem>
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel id="simple-select-label">Độ khó</InputLabel>
              <Select
                labelId="select-label"
                id="select"
                value={questionDetail?.questionLevel}
                onChange={onQuestionLevelChange}
              >
                <MenuItem value={1}>Dễ</MenuItem>
                <MenuItem value={2}>Trung bình</MenuItem>
                <MenuItem value={3}>Khó</MenuItem>
              </Select>
            </FormControl>
          </Box>
          {questionDetail?.answer.map((answerData, index) => (
            <Box className={classes.answerInputField} key={index}>
              <Box>
                {questionDetail.trueAnswer === answerData.answerId ? (
                  <Check className={classes.trueAnswer} />
                ) : (
                  <Close className={classes.falseAnswer} />
                )}
              </Box>
              <InputBase
                className={classes.questionInput}
                value={answerData?.answerName}
                placeholder="Answer"
                onChange={onChangeInputAnswer(index)}
              />
              <Box
                className={classes.setTrueBtn}
                onClick={() => {
                  onSetTrueAnswer(answerData);
                }}
              >
                <Typography>Set as true</Typography>
              </Box>
            </Box>
          ))}
        </Box>
        <Button onClick={onAddSingleAnswer} className={classes.addQuestionBtn}>
          Thêm câu trả lời
        </Button>
      </DialogContent>
      <DialogActions className={classes.btnField}>
        <Button onClick={onClose} className={classes.cancelButton}>
          Hủy
        </Button>
        <Button
          onClick={onConfirm}
          className={classes.submitButton}
          onClick={onSaveQuestion}
        >
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
    padding: theme.spacing(0.5, 2),
  },
  questionInput: {
    border: "1px solid #C4C4C4",
    borderRadius: 6,
    padding: theme.spacing(0.5, 2),
    margin: theme.spacing(0, 3),
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
  answerInputField: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(2),
  },
  setTrueBtn: {
    "&:hover": {
      cursor: "pointer",
    },
  },
  trueAnswer: {
    color: "green",
  },
  falseAnswer: {
    color: "red",
  },
}));
