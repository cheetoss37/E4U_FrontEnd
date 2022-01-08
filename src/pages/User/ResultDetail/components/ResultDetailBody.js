import React from "react";
import { makeStyles, Box, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import {
  getTestLevel,
  getTrueAnswerText,
  getSelectedAnswerText,
} from "../../../../utils";

const ResultDetailBody = () => {
  const classes = useStyles();
  const resultDetail = useSelector((state) => state.result.resultDetail);
  return (
    <Box className={classes.resultContainer}>
      <Box className={classes.resultBody}>
        <Box className={classes.basicInfoField}>
          <Box className={classes.basicInfoDetail}>
            <Typography className={classes.basicInfoName}>
              Tên bài kiểm tra:&nbsp;
            </Typography>
            <Typography>{resultDetail?.testData?.testName}</Typography>
          </Box>
          <Box className={classes.basicInfoDetail}>
            <Typography className={classes.basicInfoName}>
              Độ khó:&nbsp;{" "}
            </Typography>
            <Typography>
              {getTestLevel(resultDetail?.testData?.testLevel)}
            </Typography>
          </Box>
          <Box className={classes.basicInfoDetail}>
            <Typography className={classes.basicInfoName}>
              Thời gian:&nbsp;{" "}
            </Typography>
            <Typography>{resultDetail?.testData?.testTime} phút</Typography>
          </Box>
          <Box className={classes.basicInfoDetail}>
            <Typography className={classes.basicInfoName}>
              Người thực hiện:&nbsp;
            </Typography>
            <Typography>{resultDetail?.name}</Typography>
          </Box>
          <Box className={classes.basicInfoDetail}>
            <Typography className={classes.basicInfoName}>
              Điểm:&nbsp;
            </Typography>
            <Typography>{resultDetail?.point}</Typography>
          </Box>
        </Box>
        <Box className={classes.questionField}>
          <Typography className={classes.questionDetailText}>
            Chi tiết bài làm:
          </Typography>
          {resultDetail?.testData?.listQuestion.map((item, index) => (
            <Box className={classes.questionDetail} key={item?.questionId}>
              <Box className={classes.questionName}>
                <Typography className={classes.questionIndex}>
                  Câu {index + 1}: {item?.questionName}
                </Typography>
              </Box>
              <Box className={classes.answerField}>
                {item?.answer.map((answer, index) => (
                  <Box className={classes.answerDetail} key={answer.answerId}>
                    <Typography>
                      {index + 1}. {answer.answerName}
                    </Typography>
                  </Box>
                ))}
              </Box>
              <Box className={classes.trueAnswerField}>
                <Typography>Đáp án đúng:&nbsp;</Typography>
                <Typography className={classes.answerNameDetail}>
                  {getTrueAnswerText(item?.answer, item?.trueAnswer)}
                </Typography>
              </Box>
              <Box className={classes.selectedAnswerField}>
                <Typography>Đáp án bạn chọn:&nbsp;</Typography>
                <Typography className={classes.answerNameDetail}>
                  {getSelectedAnswerText(item?.answer, item?.selectedAnswer)}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ResultDetailBody;

const useStyles = makeStyles((theme) => ({
  resultContainer: {
    flex: "1 1 auto",
    margin: theme.spacing(2),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  resultBody: {
    width: "50%",
  },
  basicInfoDetail: {
    display: "flex",
  },
  basicInfoName: {
    fontWeight: "bold",
  },
  questionDetail: {
    marginBottom: theme.spacing(1),
  },
  questionIndex: {
    fontWeight: "bold",
  },
  questionDetailText: {
    fontWeight: "bold",
    marginTop: theme.spacing(2),
  },
  trueAnswerField: {
    marginTop: theme.spacing(2),
    display: "flex",
  },
  selectedAnswerField: {
    display: "flex",
  },
  answerNameDetail: {
    fontWeight: "bold",
  },
}));
