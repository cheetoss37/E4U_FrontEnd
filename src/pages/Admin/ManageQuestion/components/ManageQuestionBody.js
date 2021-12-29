import React, { useState } from "react";
import {
  makeStyles,
  Box,
  Typography,
  InputBase,
  Button,
} from "@material-ui/core";
import AdminSidebar from "../../../../components/AdminSidebar";
import { Pagination } from "@material-ui/lab";
import TrashRed from "../../../../assets/icons/trash-red.png";
import EditIcon from "../../../../assets/icons/edit.png";
import { getQuestionType, getQuestionLevel } from "../../../../utils";
import DeleteQuestionModal from "./DeleteQuestionModal";
import AddQuestionModal from "./AddQuestionModal";

const ManageQuestionBody = () => {
  const classes = useStyles();

  const [isAddQuestion, setIsAddQuestion] = useState(false);
  const [isEditQuestion, setIsEditQuestion] = useState(false);
  const [isDeleteQuestion, setIsDeleteQuestion] = useState(false);
  const [page, setPage] = useState(1);

  const onOpenAddQuestionModal = () => {
    setIsAddQuestion(true);
  };

  const onOpenEditQuestionModal = () => {
    setIsEditQuestion(true);
  };

  const onOpenDeleteQuestionModal = () => {
    setIsDeleteQuestion(true);
  };

  const onAddQuestion = () => {
    alert("add question");
    setIsAddQuestion(false);
  };

  const onEditQuestion = () => {
    alert("edit question");
    setIsEditQuestion(false);
  };

  const onDeleteQuestion = () => {
    alert("delete question");
    setIsDeleteQuestion(false);
  };

  const onClose = () => {
    setIsAddQuestion(false);
    setIsEditQuestion(false);
    setIsDeleteQuestion(false);
  };

  const onPageChange = (event, value) => {
    setPage(value);
    console.log(value);
    //dispatch get paging data
  };

  return (
    <Box className={classes.homeContainer}>
      <AdminSidebar />
      <Box className={classes.homeBody}>
        <Box className={classes.questionContainer}>
          <Box className={classes.manageQuestionHeader}>
            <InputBase
              placeholder="Tìm kiếm..."
              className={classes.searchInput}
            />
            <Button className={classes.addBtn} onClick={onOpenAddQuestionModal}>
              Thêm câu hỏi
            </Button>
          </Box>
          <Box className={classes.manageQuestionBody}>
            <Box className={classes.rowHeader}>
              <Box className={classes.questionNameHeader}>
                <Typography className={classes.content}>Tên câu hỏi</Typography>
              </Box>
              <Box className={classes.questionAnswerHeader}>
                <Typography className={classes.content}>Đáp án</Typography>
              </Box>
              <Box className={classes.questionTypeHeader}>
                <Typography className={classes.content}>
                  Loại câu hỏi
                </Typography>
              </Box>
              <Box className={classes.questionResultHeader}>
                <Typography className={classes.content}>Đáp án</Typography>
              </Box>
              <Box className={classes.questionLevelHeader}>
                <Typography className={classes.content}>Độ khó</Typography>
              </Box>
              <Box className={classes.questionActionHeader}>
                <Typography className={classes.content}>Chức năng</Typography>
              </Box>
            </Box>
            {FAKE_DATA.map((data) => (
              <Box className={classes.questionRow} key={data?.questionId}>
                <Box className={classes.questionNameBody}>
                  <Typography className={classes.content}>
                    {data?.questionName}
                  </Typography>
                </Box>
                <Box className={classes.questionAnswerBody}>
                  {data?.answer.map((answer) => (
                    <Typography className={classes.content}>
                      {answer.answerDetail}
                    </Typography>
                  ))}
                </Box>
                <Box className={classes.questionTypeBody}>
                  <Typography className={classes.content}>
                    {getQuestionType(data?.questionType)}
                  </Typography>
                </Box>
                <Box className={classes.questionResultBody}>
                  {data?.trueAnswer.map((item) => (
                    <Typography className={classes.content}>{item}</Typography>
                  ))}
                </Box>
                <Box className={classes.questionLevelBody}>
                  <Typography className={classes.content}>
                    {getQuestionLevel(data?.questionLevel)}
                  </Typography>
                </Box>
                <Box className={classes.questionActionBody}>
                  <Box
                    className={classes.iconField}
                    onClick={() => {
                      onOpenEditQuestionModal();
                    }}
                  >
                    <img src={EditIcon} />
                  </Box>
                  <Box
                    className={classes.iconField}
                    onClick={() => {
                      onOpenDeleteQuestionModal();
                    }}
                  >
                    <img src={TrashRed} />
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
          <Box className={classes.manageQuestionFooter}>
            <Pagination
              count={10}
              page={page}
              variant="outlined"
              shape="rounded"
              onChange={onPageChange}
            />
          </Box>
          <DeleteQuestionModal
            isOpen={isDeleteQuestion}
            onClose={onClose}
            onConfirm={onDeleteQuestion}
          />
          <AddQuestionModal
            isOpen={isAddQuestion}
            onClose={onClose}
            onConfirm={onAddQuestion}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ManageQuestionBody;

export const useStyles = makeStyles((theme) => ({
  homeContainer: {
    margin: 0,
    display: "flex",
  },
  homeBody: {
    flex: "1 1 auto",
    padding: theme.spacing(2, 1, 2, 1),
    background: "#9B9B9B",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  questionContainer: {
    background: "white",
    width: "95%",
    height: "95%",
    borderRadius: 16,
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
  },
  manageQuestionHeader: {
    flex: "0 1 auto",
  },
  manageQuestionBody: {
    flex: "1 1 auto",
    padding: theme.spacing(1, 0),
  },
  manageQuestionFooter: {
    flex: "0 1 auto",
  },
  searchInput: {
    border: "1px solid #C4C4C4",
    borderRadius: 3,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    minWidth: 450,
    marginRight: theme.spacing(5),
  },
  addBtn: {
    background: "#F99846",
    textTransform: "none",
  },
  rowHeader: {
    display: "flex",
    border: "1px solid #C4C4C4",
    borderRadius: 3,
  },
  questionRow: {
    display: "flex",
    border: "1px solid #C4C4C4",
    borderRadius: 3,
  },
  content: {
    padding: theme.spacing(1, 0),
  },
  questionNameHeader: {
    width: "20%",
    padding: theme.spacing(0, 2),
    borderRight: "1px solid #C4C4C4",
  },
  questionAnswerHeader: {
    width: "20%",
    padding: theme.spacing(0, 2),
    borderRight: "1px solid #C4C4C4",
  },
  questionTypeHeader: {
    width: "15%",
    padding: theme.spacing(0, 2),
    borderRight: "1px solid #C4C4C4",
  },
  questionResultHeader: {
    width: "10%",
    padding: theme.spacing(0, 2),
    borderRight: "1px solid #C4C4C4",
  },
  questionLevelHeader: {
    width: "10%",
    padding: theme.spacing(0, 2),
    borderRight: "1px solid #C4C4C4",
  },
  questionActionHeader: {
    width: "10%",
    padding: theme.spacing(0, 2),
    display: "flex",
  },
  questionNameBody: {
    width: "20%",
    padding: theme.spacing(0, 2),
    borderRight: "1px solid #C4C4C4",
  },
  questionAnswerBody: {
    width: "20%",
    padding: theme.spacing(0, 2),
    borderRight: "1px solid #C4C4C4",
  },
  questionTypeBody: {
    width: "15%",
    padding: theme.spacing(0, 2),
    borderRight: "1px solid #C4C4C4",
  },
  questionResultBody: {
    width: "10%",
    padding: theme.spacing(0, 2),
    borderRight: "1px solid #C4C4C4",
  },
  questionLevelBody: {
    width: "10%",
    padding: theme.spacing(0, 2),
    borderRight: "1px solid #C4C4C4",
  },
  questionActionBody: {
    width: "10%",
    padding: theme.spacing(0, 2),
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  iconField: {
    "&:hover": {
      cursor: "pointer",
    },
  },
}));

const FAKE_DATA = [
  {
    questionId: 1,
    questionName: "How are you today?",
    answer: [
      { answerDetail: "A. I’m fine thank you. And you?" },
      { answerDetail: "B. I’m fine thank you. And you?" },
    ],
    questionType: 1,
    trueAnswer: [1],
    questionLevel: 1,
  },
  {
    questionId: 2,
    questionName: "Do you remember the park ... we met?",
    answer: [
      { answerDetail: "A. I’m fine thank you. And you?" },
      { answerDetail: "B. I’m fine thank you. And you?" },
    ],
    questionType: 1,
    trueAnswer: [1],
    questionLevel: 2,
  },
  {
    questionId: 3,
    questionName: "You’ve been tidying up, ... ?",
    answer: [
      { answerDetail: "A. I’m fine thank you. And you?" },
      { answerDetail: "B. I’m fine thank you. And you?" },
    ],
    questionType: 1,
    trueAnswer: [1],
    questionLevel: 3,
  },
  {
    questionId: 4,
    questionName: "How are you today?",
    answer: [
      { answerDetail: "A. I’m fine thank you. And you?" },
      { answerDetail: "B. I’m fine thank you. And you?" },
    ],
    questionType: 1,
    trueAnswer: [1],
    questionLevel: 1,
  },
  {
    questionId: 5,
    questionName: "How are you today?",
    answer: [
      { answerDetail: "A. I’m fine thank you. And you?" },
      { answerDetail: "B. I’m fine thank you. And you?" },
    ],
    questionType: 2,
    trueAnswer: [1],
    questionLevel: 2,
  },
];
