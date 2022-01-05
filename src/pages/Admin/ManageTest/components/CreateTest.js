import React, { useState, useEffect } from "react";
import {
  makeStyles,
  Box,
  Typography,
  InputBase,
  Button,
  FormControl,
  MenuItem,
  Select,
  InputLabel,
} from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../../../redux/actions";
import { getQuestionLevel } from "../../../../utils";

const CreateTest = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const listQuestion = useSelector((state) => state.question?.listQuestion);
  const totalPage = useSelector((state) => state.question?.totalPage);
  const testDetail = useSelector((state) => state.test.testDetail);
  const testName = useSelector((state) => state.test.testDetail?.testName);
  const testType = useSelector((state) => state.test.testDetail?.testType);
  const testTime = useSelector((state) => state.test.testDetail?.testTime);
  const testLevel = useSelector((state) => state.test.testDetail?.testLevel);
  const status = useSelector((state) => state.test.status);
  const error = useSelector((state) => state.test.error);
  const newTestListQuestion = useSelector(
    (state) => state.test.testDetail?.listQuestion
  );

  const [onSearch, setOnSearch] = useState("");
  const [page, setPage] = useState(1);

  const onTestNameChange = (e) => {
    let newTestData = {
      ...testDetail,
      testName: e.target.value,
    };
    dispatch(actions.setNewTest(newTestData));
  };

  const onTestTimeChange = (e) => {
    let newTestData = {
      ...testDetail,
      testTime: Number(e.target.value),
    };
    dispatch(actions.setNewTest(newTestData));
  };

  const onTestLevelChange = (e) => {
    let newTestData = {
      ...testDetail,
      testLevel: e.target.value,
    };
    dispatch(actions.setNewTest(newTestData));
  };

  const onTestTypeChange = (e) => {
    let newTestData = {
      ...testDetail,
      testType: e.target.value,
    };
    dispatch(actions.setNewTest(newTestData));
  };

  const onAddQuestionToList = (question) => {
    let newList = newTestListQuestion;
    let existingQuestion = newList.map((item) => item._id);

    if (!existingQuestion.includes(question._id)) {
      let newListQuestionAdded = newList.concat(question);
      let newTestData = {
        ...testDetail,
        listQuestion: newListQuestionAdded,
      };
      dispatch(actions.setNewTest(newTestData));
    }
  };

  const onCheckIsInList = (question) => {
    let newList = newTestListQuestion;
    let existingQuestion = newList.map((item) => item._id);

    if (existingQuestion.includes(question._id)) {
      return "Đã thêm";
    } else {
      return "Thêm";
    }
  };

  const onRemoveQuestionFromList = (question) => {
    let newList = newTestListQuestion;
    let newListQuestionRemoved = newList.filter(function (item) {
      return item._id !== question._id;
    });
    let newTestData = {
      ...testDetail,
      listQuestion: newListQuestionRemoved,
    };
    dispatch(actions.setNewTest(newTestData));
  };

  const onPageChange = (event, value) => {
    setPage(value);
    dispatch(
      actions.getListQuestionRequest({
        page: value,
      })
    );
  };

  const onSearchChange = (e) => {
    setOnSearch(e.target.value);
  };

  const onSubmitSearch = (e) => {
    e.preventDefault();
    let data = {
      page: 1,
      query: onSearch,
    };
    dispatch(actions.searchQuestionRequest(data));
  };

  const onCreateTest = () => {
    const newListQuestionArray = newTestListQuestion.map(
      ({ _id: questionId, ...rest }) => ({
        questionId,
        ...rest,
      })
    );

    let newTestData = {
      ...testDetail,
      listQuestion: newListQuestionArray,
    };

    dispatch(actions.createTestRequest(newTestData));
  };

  useEffect(() => {
    dispatch(actions.getListQuestionRequest({ page: 1 }));
  }, [dispatch]);

  useEffect(() => {
    if (status === 200) {
      alert("Thêm bài kiểm tra mới thành công!");
      window.location.reload();
    }
  }, [status]);

  useEffect(() => {
    if (error) {
      alert("Thêm bài kiểm tra mới thất bại!");
      window.location.reload();
    }
  }, [error]);

  return (
    <Box className={classes.createTestBody}>
      <Box className={classes.testField}>
        <Box className={classes.inputField}>
          <InputBase
            className={classes.testNameInput}
            placeholder="Tên bài kiểm tra..."
            value={testName}
            onChange={onTestNameChange}
          />
          <InputBase
            className={classes.testTimeInput}
            placeholder="Thời gian..."
            type="number"
            value={testTime}
            onChange={onTestTimeChange}
          />
        </Box>
        <Box className={classes.selectField}>
          <FormControl className={classes.formControl}>
            <InputLabel id="simple-select-label-test">Độ khó</InputLabel>
            <Select
              labelId="select-label"
              id="select-test-level"
              value={testLevel}
              onChange={onTestLevelChange}
            >
              <MenuItem value={1}>Dễ</MenuItem>
              <MenuItem value={2}>Trung bình</MenuItem>
              <MenuItem value={3}>Khó</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="simple-select-label-test">Loại bài</InputLabel>
            <Select
              labelId="select-label"
              id="select-test-type"
              value={testType}
              onChange={onTestTypeChange}
            >
              <MenuItem value={1}>Riêng tư</MenuItem>
              <MenuItem value={2}>Miễn phí</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box className={classes.selectedQuestionField}>
          {newTestListQuestion.map((item, index) => (
            <Box className={classes.selectedQuestionDetail} key={item._id}>
              <Box className={classes.questionDetailBox}>
                <Box className={classes.questionName}>
                  Câu {index + 1}: {item.questionName}
                </Box>
                {item?.answer.map((answer, index) => (
                  <Box className={classes.selectedQuestionAnswer} key={index}>
                    {index + 1}: {answer?.answerName}
                  </Box>
                ))}
              </Box>
              <Box
                className={classes.removeQuestionText}
                onClick={() => {
                  onRemoveQuestionFromList(item);
                }}
              >
                Xóa
              </Box>
            </Box>
          ))}
        </Box>
        <Box className={classes.saveBtnField}>
          <Button className={classes.saveBtn} onClick={onCreateTest}>
            Lưu bài kiểm tra
          </Button>
        </Box>
      </Box>
      <Box className={classes.questionField}>
        <Box className={classes.searchQuestionField}>
          <form onSubmit={onSubmitSearch}>
            <InputBase
              placeholder="Tìm kiếm..."
              className={classes.searchInput}
              onChange={onSearchChange}
              value={onSearch}
            />
          </form>
        </Box>
        <Box className={classes.allQuestion}>
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
              <Box className={classes.questionLevelBody}>
                <Typography className={classes.content}>
                  {getQuestionLevel(data?.questionLevel)}
                </Typography>
              </Box>
              <Box
                className={classes.questionActionField}
                onClick={() => {
                  onAddQuestionToList(data);
                }}
              >
                <Typography className={classes.content}>
                  {onCheckIsInList(data)}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
        <Box>
          <Pagination
            count={totalPage}
            page={page}
            variant="outlined"
            shape="rounded"
            onChange={onPageChange}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default CreateTest;

const useStyles = makeStyles((theme) => ({
  createTestBody: {
    display: "flex",
  },
  testField: {
    width: "50%",
    maxWidth: "50%",
    marginRight: theme.spacing(1),
  },
  questionField: {
    width: "50%",
  },
  testNameInput: {
    border: "1px solid #C4C4C4",
    borderRadius: 3,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    minWidth: 350,
    marginRight: theme.spacing(5),
  },
  testTimeInput: {
    border: "1px solid #C4C4C4",
    borderRadius: 3,
    maxWidth: 120,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    marginRight: theme.spacing(5),
  },
  formControl: {
    minWidth: 200,
    marginRight: theme.spacing(2),
  },
  selectedQuestionField: {
    margin: theme.spacing(2, 0),
    minHeight: 400,
    maxHeight: 400,
    overflow: "auto",
  },
  saveBtn: {
    background: "#F99846",
    textTransform: "none",
  },
  allQuestion: {
    margin: theme.spacing(2, 0),
    minHeight: 450,
    maxHeight: 450,
    overflow: "auto",
  },
  searchInput: {
    border: "1px solid #C4C4C4",
    borderRadius: 3,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    minWidth: 350,
    marginRight: theme.spacing(5),
  },
  questionRow: {
    display: "flex",
    border: "1px solid #C4C4C4",
    borderRadius: 3,
  },
  content: {
    padding: theme.spacing(1, 0),
  },
  questionNameBody: {
    width: "50%",
    padding: theme.spacing(0, 2),
    borderRight: "1px solid #C4C4C4",
  },
  questionAnswerBody: {
    width: "30%",
    padding: theme.spacing(0, 2),
    borderRight: "1px solid #C4C4C4",
  },
  questionLevelBody: {
    width: "10%",
    padding: theme.spacing(0, 2),
    borderRight: "1px solid #C4C4C4",
  },
  questionActionField: {
    width: "10%",
    padding: theme.spacing(0, 2),
    "&:hover": {
      cursor: "pointer",
    },
  },
  selectedQuestionDetail: {
    display: "flex",
    marginBottom: theme.spacing(1),
  },
  questionDetailBox: {
    width: "80%",
    maxWidth: "80%",
  },
  removeQuestionText: {
    color: "#F50808",
    "&:hover": {
      cursor: "pointer",
    },
  },
  selectedQuestionAnswer: {
    marginLeft: theme.spacing(6),
    marginTop: theme.spacing(1),
  },
}));
