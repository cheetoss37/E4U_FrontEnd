import React from "react";
import { makeStyles, Box, Typography, Button } from "@material-ui/core";
import FreeTestImg1 from "../../../../assets/images/free-test-1.png";
import FreeTestImg2 from "../../../../assets/images/free-test-2.png";
import FreeTestImg3 from "../../../../assets/images/free-test-3.png";
import { Link } from "react-router-dom";

const OurExamsBody = () => {
  const classes = useStyles();
  // useEffect(() => {
  //     if (Object.keys(test).length > 0) {
  //         alert("Đăng ký thành công");
  //         history.push(LOGIN);
  //       }
  // }, [test])
  return (
    <Box className={classes.freeTestContainer}>
      <Box className={classes.freeTestHeader}>
        <Typography className={classes.mainHeaderText}>
          Khám phá các bài kiểm tra Tiếng Anh
        </Typography>
        <Typography className={classes.headerAboutText}>
          Giúp bạn chuẩn bị tốt hơn cho những kỳ thi lấy chứng chỉ tiếng Anh
          quan trọng với các phiên bản rút gọn dựa trên cấu trúc thực tế.
        </Typography>
      </Box>
      <Box className={classes.freeTestBody}>
        {MockupData.map((item) => (
          <Box className={classes.testItemContainer} key={item.id}>
            <Box className={classes.testItemLeft}>
              <img
                className={classes.testImage}
                src={item.testImage}
                alt="free-test"
              />
            </Box>
            <Box className={classes.testItemRight}>
              <Box className={classes.testContent}>
                <Typography className={classes.testName}>
                  {item.testName}
                </Typography>
                <Typography className={classes.testDescription}>
                  {item.testDescription}
                </Typography>
              </Box>
              <Box
                className={classes.btnField}
                component={Link}
                to={`do-test/${item._id}`}
              >
                <Button className={classes.doTestBtn}>Làm bài kiểm tra</Button>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default OurExamsBody;

const useStyles = makeStyles((theme) => ({
  freeTestContainer: {
    flex: "1 1 auto",
    margin: theme.spacing(2),
  },
  freeTestBody: {
    marginLeft: theme.spacing(10),
    marginRight: theme.spacing(10),
    [theme.breakpoints.down("xs")]: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
    },
  },
  freeTestHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  mainHeaderText: {
    color: "#FA811B",
    fontWeight: "bold",
    fontSize: 36,
    textAlign: "center",
  },
  headerAboutText: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    maxWidth: 600,
  },
  testItemContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    marginTop: theme.spacing(5),
    minHeight: 200,
    alignItems: "stretch",
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  testItemLeft: {
    flex: "0 1 auto",
    marginRight: theme.spacing(2),
  },
  testItemRight: {
    maxWidth: 600,
    flex: "1 1 auto",
    marginLeft: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      maxWidth: 240,
      marginLeft: theme.spacing(0),
    },
  },
  testImage: {
    maxWidth: 240,
    maxHeight: 190,
  },
  testName: {
    color: "#FA811B",
    fontWeight: "bold",
    fontSize: 20,
  },
  btnField: {
    marginTop: theme.spacing(2),
  },
  doTestBtn: {
    backgroundColor: "#FA811B",
    "&:hover": {
      backgroundColor: "#FA811B",
    },
    color: "white",
    fontWeight: "bold",
  },
}));

const MockupData = [
  {
    id: 1,
    testName: "ENTRANCE TEST A - E4U ENGLISH",
    testTime: "20 Minutes",
    testDescription:
      "Bạn muốn được thử sức mình với những bài kiểm tra tiếng Anh để đánh giá lại kiến thức của bản thân? Bạn cũng muốn được trở thành 1 học viên E4U, cháy hết mình cùng những buổi học đầy năng lượng, đầy hào hứng tại E4U…. Hãy làm ngay bài test sau đây ..",
    testImage: FreeTestImg1,
  },
  {
    id: 2,
    testName: "ENTRANCE TEST B - E4U ENGLISH",
    testTime: "20 Minutes",
    testDescription:
      "Bạn muốn được thử sức mình với những bài kiểm tra tiếng Anh để đánh giá lại kiến thức của bản thân? Bạn cũng muốn được trở thành 1 học viên E4U, cháy hết mình cùng những buổi học đầy năng lượng, đầy hào hứng tại E4U…. Hãy làm ngay bài test sau đây ..",
    testImage: FreeTestImg2,
  },
  {
    id: 3,
    testName: "ENTRANCE TEST C - E4U ENGLISH",
    testTime: "20 Minutes",
    testDescription:
      "Bạn muốn được thử sức mình với những bài kiểm tra tiếng Anh để đánh giá lại kiến thức của bản thân? Bạn cũng muốn được trở thành 1 học viên E4U, cháy hết mình cùng những buổi học đầy năng lượng, đầy hào hứng tại E4U…. Hãy làm ngay bài test sau đây ..",
    testImage: FreeTestImg3,
  },
];
