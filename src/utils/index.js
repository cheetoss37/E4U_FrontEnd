import { AppConst } from "../constants";

export const uuid = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

export const getUserRole = (roleId) => {
  if (roleId === AppConst.USER_ROLE.author) {
    return "Quản lí đề";
  } else if (roleId === AppConst.USER_ROLE.normalUser) {
    return "Người dùng";
  } else if (roleId === AppConst.USER_ROLE.admin) {
    return "Quản lí";
  }
};

export const getQuestionType = (questionType) => {
  if (questionType === AppConst.QUESTION_TYPE.multipleChoice) {
    return "Trắc nghiệm";
  } else if (questionType === AppConst.QUESTION_TYPE.writing) {
    return "Tự luận";
  }
};

export const getQuestionLevel = (questionLevel) => {
  if (questionLevel === AppConst.QUESTION_LEVEL.easy) {
    return "Dễ";
  } else if (questionLevel === AppConst.QUESTION_LEVEL.normal) {
    return "Trung bình";
  } else if (questionLevel === AppConst.QUESTION_LEVEL.hard) {
    return "Khó";
  }
};

export const getTestStatus = (testStatus) => {
  if (testStatus === AppConst.TEST_STATUS.public) {
    return "Đã phát hành";
  } else if (testStatus === AppConst.TEST_STATUS.unpublic) {
    return "Chưa phát hành";
  }
};

export const getTestLevel = (testLevel) => {
  if (testLevel === AppConst.TEST_LEVEL.easy) {
    return "Dễ";
  } else if (testLevel === AppConst.TEST_LEVEL.normal) {
    return "Trung bình";
  } else if (testLevel === AppConst.TEST_LEVEL.hard) {
    return "Khó";
  }
};

export const getAllSelectedAnswer = (listQuestion) => {
  const listAnswer = listQuestion.map((item) => item.selectedAnswer);
  return listAnswer;
};

export const getUserSelectedAnswer = (listQuestion) => {
  const listUserAnswer = listQuestion
    .filter(function (item) {
      if (item.selectedAnswer === "") {
        return false;
      }
      return true;
    })
    .map((item) => item.selectedAnswer);
  return listUserAnswer;
};

export const getTrueAnswer = (listQuestion) => {
  const listTrueAnswer = listQuestion.map((item) => item.trueAnswer.toString());
  return listTrueAnswer;
};

export const getUnanswerQuestion = (trueAnswer, listQuestion) => {
  let unAnswer = trueAnswer.length - listQuestion.length;
  return unAnswer;
};

export const getResultTest = (trueAnswer, listQuestion) => {
  let trueAnswerSelected = trueAnswer.filter((x) => !listQuestion.includes(x));
  let result = trueAnswer.length - trueAnswerSelected.length;
  return result;
};

export const getTrueAnswerText = (listAnswer, answerId) => {
  let trueAnswerText = listAnswer.filter(
    (item) => item.answerId.toString() === answerId.toString()
  );

  return trueAnswerText[0].answerName;
};
