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
import {
  getQuestionType,
  getQuestionLevel,
  getTrueAnswerText,
  uuid,
} from "../../../../utils";
import DeleteQuestionModal from "./DeleteQuestionModal";
import AddQuestionModal from "./AddQuestionModal";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../../../redux/actions";
const ManageQuestionBody = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const listQuestion = useSelector((state) => state.question?.listQuestion);
  const totalPage = useSelector((state) => state.question?.totalPage);

  const [isAddQuestion, setIsAddQuestion] = useState(false);
  const [isEditQuestion, setIsEditQuestion] = useState(false);
  const [isDeleteQuestion, setIsDeleteQuestion] = useState(false);
  const [page, setPage] = useState(1);

  const onOpenAddQuestionModal = () => {
    setIsAddQuestion(true);
    let answer = {
      answerId: uuid(),
      answerName: "",
    };
    let newQuestion = createNewQuestion(answer);
    dispatch(actions.setNewSelectedQuestion(newQuestion));
  };

  const onOpenEditQuestionModal = () => {
    setIsEditQuestion(true);
  };

  const onOpenDeleteQuestionModal = () => {
    setIsDeleteQuestion(true);
  };

  const onAddQuestion = () => {
    console.log();
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
    dispatch(
      actions.getListQuestionRequest({
        page: value,
      })
    );
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
                <Typography className={classes.content}>Đáp án đúng</Typography>
              </Box>
              <Box className={classes.questionLevelHeader}>
                <Typography className={classes.content}>Độ khó</Typography>
              </Box>
              <Box className={classes.questionActionHeader}>
                <Typography className={classes.content}>Chức năng</Typography>
              </Box>
            </Box>
            {listQuestion.map((data) => (
              <Box className={classes.questionRow} key={data?._id}>
                <Box className={classes.questionNameBody}>
                  <Typography className={classes.content}>
                    {data?.questionName}
                  </Typography>
                </Box>
                <Box className={classes.questionAnswerBody}>
                  {data?.answer.map((answer, index) => (
                    <Typography className={classes.content} key={index}>
                      {index + 1}: {answer.answerName}
                    </Typography>
                  ))}
                </Box>
                <Box className={classes.questionTypeBody}>
                  <Typography className={classes.content}>
                    {getQuestionType(data?.questionType)}
                  </Typography>
                </Box>
                <Box className={classes.questionResultBody}>
                  <Typography className={classes.content}>
                    {getTrueAnswerText(data?.answer, data?.trueAnswer)}
                  </Typography>
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
              count={totalPage}
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

const createNewQuestion = (answer) => ({
  questionType: 1,
  questionName: "",
  answer: [answer],
  trueAnswer: answer.answerId,
  questionLevel: 1,
});

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
