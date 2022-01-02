import React, { useEffect, useState } from "react";
import {
  makeStyles,
  Container,
  Box,
  Typography,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../../../redux/actions";
import ConfirmModal from "./ConfirmModal";
import {
  getUserSelectedAnswer,
  getResultTest,
  getTrueAnswer,
} from "../../../../utils";
import ResultModal from "./ResultModal";
import { useParams } from "react-router-dom";
import { AppConst } from "../../../../constants";

const DoTestBody = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { id } = useParams();
  const userInfo = JSON.parse(localStorage.getItem(AppConst.USER_PROFILE));

  const testDataAPI = useSelector((state) => state.test.testDetail);
  const testData = useSelector((state) => state.doTest.testData);
  const selectedQuestion = useSelector(
    (state) => state.doTest.selectedQuestion
  );
  const selectedQuestionId = useSelector(
    (state) => state.doTest.selectedQuestionId
  );
  const listQuestion = useSelector((state) => state.doTest.listQuestion);
  const questionIndex = listQuestion.findIndex(
    (item) => item?.questionId === selectedQuestion?.questionId
  );

  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [isShowResult, setIsShowResult] = useState(false);
  const [minute, setMinute] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isDoTest, setIsDoTest] = useState(false);

  const onSubmit = () => {
    const userSelectedAnswer = getUserSelectedAnswer(listQuestion);
    const trueAnswer = getTrueAnswer(listQuestion);
    const result = getResultTest(trueAnswer, userSelectedAnswer);

    const userTestData = {
      ...testData,
      testId: testData._id,
      listQuestion: listQuestion,
      point: `${result}/${listQuestion.length}`,
    };
    dispatch(actions.setTestData(userTestData));
    setIsShowResult(true);
    setIsConfirmOpen(false);
    if (userInfo) {
      dispatch(
        actions.postResultRequest({
          userId: userInfo?.user?._id,
          testData: userTestData,
          point: `${result}/${listQuestion.length}`,
          username: userInfo?.user?.username,
          name: userInfo?.user?.name,
          email: userInfo?.user?.email,
        })
      );
    }
  };

  const onStartDoTest = () => {
    setIsDoTest(true);
    setMinute(testData?.testTime);
  };

  const onOpenConfirmSubmit = () => {
    setIsConfirmOpen(true);
    let newTestData = {
      ...testData,
      listQuestion: listQuestion,
    };
    dispatch(actions.setTestData(newTestData));
  };

  const onChange = (event, value) => {
    if (isDoTest) {
      let newSelectedAnswer = value;
      let newSelectedQuestionData = {
        ...selectedQuestion,
        selectedAnswer: newSelectedAnswer.toString(),
      };
      let newListQuestion = [...listQuestion];
      newListQuestion[questionIndex] = newSelectedQuestionData;
      dispatch(actions.setSelectedQuestion(newSelectedQuestionData));
      dispatch(actions.setListQuestion(newListQuestion));
    }
  };

  const onSelectedQuestion = (data) => {
    dispatch(actions.setSelectedQuestion(data));
  };

  useEffect(() => {
    if (Object.keys(testDataAPI).length > 0) {
      dispatch(actions.setListQuestion(testDataAPI.listQuestion));
    }
  }, [dispatch, testDataAPI]);

  useEffect(() => {
    if (listQuestion.length > 0 && !isDoTest) {
      dispatch(actions.setSelectedQuestion(listQuestion[0]));
    }
  }, [listQuestion, dispatch]);

  useEffect(() => {
    let refactorData = {
      ...testDataAPI,
      point: 0,
    };
    dispatch(actions.setTestData(refactorData));
  }, [dispatch, testDataAPI]);

  useEffect(() => {
    dispatch(actions.getTestDetail(id));
  }, []);

  useEffect(() => {
    const countDown = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minute === 0 && isDoTest) {
          const userSelectedAnswer = getUserSelectedAnswer(listQuestion);
          const trueAnswer = getTrueAnswer(listQuestion);
          const result = getResultTest(trueAnswer, userSelectedAnswer);

          const userTestData = {
            ...testData,
            point: `${result}/${listQuestion.length}`,
          };
          dispatch(actions.setTestData(userTestData));
          setIsShowResult(true);
          return () => {
            clearInterval(countDown);
          };
        } else {
          setMinute(minute - 1);
          setSeconds(59);
        }
      }
    }, 1000);

    return () => {
      clearInterval(countDown);
    };
  });

  return (
    <Container className={classes.doTestContainer}>
      <Box className={classes.doTestWrapper}>
        <Box className={classes.doTestHeader}>
          <Box>
            <Typography className={classes.testName}>
              {testData.testName}
            </Typography>
          </Box>
          <Box className={classes.testTime}>
            {isDoTest ? (
              <Box className={classes.time}>
                <Typography>
                  {minute} : {seconds < 10 ? `0${seconds}` : seconds}
                </Typography>
              </Box>
            ) : (
              <Box className={classes.time} onClick={onStartDoTest}>
                <Typography>Bắt đầu</Typography>
              </Box>
            )}
            {isDoTest && (
              <Box
                className={classes.submitResult}
                onClick={onOpenConfirmSubmit}
              >
                <Typography>Nộp bài</Typography>
              </Box>
            )}
          </Box>
        </Box>
        <Box className={classes.doTestBody}>
          <Box className={classes.questionField}>
            <Typography className={classes.questionName}>
              {selectedQuestion.questionName}
            </Typography>
            <Box>
              <RadioGroup
                name={`value${selectedQuestion.questionId}`}
                value={selectedQuestion.selectedAnswer}
                onChange={onChange}
              >
                {selectedQuestion?.answer.map((item) => (
                  <FormControlLabel
                    label={item.answerName}
                    key={item.answerId}
                    value={item.answerId.toString()}
                    control={<Radio color="primary" />}
                  />
                ))}
              </RadioGroup>
            </Box>
          </Box>
          <Box className={classes.doTestQuestionIndex}>
            {listQuestion.map((question, index) => (
              <Box
                className={
                  selectedQuestionId === question?.questionId
                    ? classes.questionNavSelected
                    : question?.selectedAnswer !== ""
                    ? classes.selectedAnswer
                    : classes.questionNav
                }
                key={question?.questionId}
                onClick={() => {
                  onSelectedQuestion(question);
                }}
              >
                <Typography className={classes.questionIndex}>
                  {index + 1}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <ConfirmModal
        isOpen={isConfirmOpen}
        onConfirm={onSubmit}
        onClose={() => {
          setIsConfirmOpen(false);
        }}
      />
      <ResultModal isOpen={isShowResult} userInfo={Boolean(userInfo)} />
    </Container>
  );
};

export default DoTestBody;

const useStyles = makeStyles((theme) => ({
  doTestContainer: {
    flex: "1 1 auto",
    margin: "auto",
    maxWidth: "65vw",
  },
  doTestWrapper: {
    margin: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
  },
  doTestHeader: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    flex: "0 1 auto",
  },
  testName: {
    fontWeight: "bold",
    fontSize: 20,
  },
  questionName: {
    fontWeight: "bold",
  },
  testTime: {
    display: "flex",
  },
  time: {
    padding: theme.spacing(1, 1),
    backgroundColor: "#FA811B",
    borderRadius: 10,
    marginRight: theme.spacing(2),
    minWidth: 100,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    "&:hover": {
      cursor: "pointer",
    },
  },
  submitResult: {
    padding: theme.spacing(1, 1),
    backgroundColor: "#FA811B",
    borderRadius: 10,
    "&:hover": {
      cursor: "pointer",
    },
    minWidth: 100,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
  doTestBody: {
    display: "flex",
    marginTop: theme.spacing(4),
    justifyContent: "space-between",
  },
  questionField: {
    width: 600,
    marginBottom: theme.spacing(2),
  },
  answerField: {
    "&:hover": {
      cursor: "pointer",
    },
    display: "flex",
    alignItems: "center",
    marginBottom: 4,
  },
  doTestQuestionIndex: {
    marginBottom: theme.spacing(2),
    display: "grid",
    gridGap: theme.spacing(1),
    gridTemplateColumns: "50px 50px 50px",
    justifyContent: "center",
    marginTop: theme.spacing(1),
  },
  questionNav: {
    border: "1px solid black",
    borderRadius: 4,
    display: "flex",
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    marginRight: theme.spacing(0.5),
    "&:hover": {
      cursor: "pointer",
    },
  },
  questionNavSelected: {
    border: "1px solid black",
    background: "#FA811B",
    fontWeight: "bold",
    color: "white",
    borderRadius: 4,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: theme.spacing(0.5),
    "&:hover": {
      cursor: "pointer",
    },
  },
  selectedAnswer: {
    border: "1px solid black",
    background: "grey",
    fontWeight: "bold",
    color: "white",
    borderRadius: 4,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: theme.spacing(0.5),
    "&:hover": {
      cursor: "pointer",
    },
  },
  questionIndex: {},
}));
