import React from "react";
import {
  makeStyles,
  Box,
  Typography,
  Button,
  Divider,
} from "@material-ui/core";
import SchoolImage from "../../../../assets/images/home-pic1.png";
import GroupImg from "../../../../assets/icons/group-icons.png";
import PaperImg from "../../../../assets/icons/card-icon2.png";
import PhoneImg from "../../../../assets/icons/card-icon3.png";
import { Link } from "react-router-dom";
import { FREE_TEST, OUR_EXAMS } from "../../../../constants/path.const";

const HomeBody = () => {
  const classes = useStyles();

  return (
    <Box className={classes.homeBodyContainer}>
      <Box className={classes.freeTestField}>
        <Box className={classes.freeTestLeft}>
          <img src={SchoolImage} alt="" className={classes.homeImg} />
        </Box>
        <Box className={classes.freeTestRight}>
          <Typography className={classes.headerText}>
            Kiểm tra tiếng anh ngay hôm nay
          </Typography>
          <Box className={classes.aboutTestText}>
            <Typography>
              - Làm bài thi trực tuyến tại bất kì đâu, bất kì lúc nào
            </Typography>
            <Typography>
              - Hoàn thành trong thời gian ngắn, nhận kết quả tức thì
            </Typography>
            <Typography>- Kết quả chính xác</Typography>
          </Box>
          <Button
            className={classes.freeTestBtn}
            component={Link}
            to={FREE_TEST}
          >
            Làm bài kiểm tra miễn phí
          </Button>
        </Box>
      </Box>
      <Divider className={classes.divider} />
      <Box className={classes.ourExamsField}>
        <Box className={classes.examsHeader}>
          <Typography className={classes.examsHeaderText}>
            Ngân hàng đề kiểm tra đa dạng và phong phú
          </Typography>
        </Box>
        <Box className={classes.examsBody}>
          <Box className={classes.aboutExam}>
            <Box>
              <img
                src={GroupImg}
                alt="group-icon"
                className={classes.logoImg}
              />
            </Box>
            <Box className={classes.aboutExamName}>
              <Typography className={classes.aboutExamNameText}>
                Đội ngũ nhiều kinh nghiệm
              </Typography>
            </Box>
            <Box>
              <Typography>
                Đội ngũ chuyên nghiệp, có nhiều năm kinh nghiệm
              </Typography>
            </Box>
          </Box>
          <Box className={classes.aboutExam}>
            <Box>
              <img
                src={PaperImg}
                alt="paper-icon"
                className={classes.logoImg}
              />
            </Box>
            <Box className={classes.aboutExamName}>
              <Typography className={classes.aboutExamNameText}>
                Bài kiểm tra phù hợp
              </Typography>
            </Box>
            <Box>
              <Typography>
                Tập hợp nhiều đề ôn tập và đề kiểm tra với chất lượng phân cấp
                rõ ràng.
              </Typography>
            </Box>
          </Box>
          <Box className={classes.aboutExam}>
            <Box>
              <img
                src={PhoneImg}
                alt="phone-icon"
                className={classes.logoImg}
              />
            </Box>
            <Box className={classes.aboutExamName}>
              <Typography className={classes.aboutExamNameText}>
                Chất lượng
              </Typography>
            </Box>
            <Box>
              <Typography>
                Đảm bảo nâng cao các kĩ năng nghe, đọc, viết trong tiếng Anh.
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box className={classes.examsFooter}>
          <Button className={classes.examsBtn} component={Link} to={OUR_EXAMS}>
            Các bài kiểm tra
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default HomeBody;

const useStyles = makeStyles((theme) => ({
  homeBodyContainer: {
    flex: "1 1 auto",
    margin: theme.spacing(2),
  },
  freeTestLeft: {
    marginRight: theme.spacing(10),
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  freeTestRight: {
    marginLeft: theme.spacing(10),
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  freeTestField: {
    display: "flex",
    justifyContent: "center",
  },
  ourExamsField: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  homeImg: {
    width: 400,
    height: 250,
  },
  headerText: {
    fontWeight: 700,
    fontSize: 25,
  },
  aboutTestText: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  freeTestBtn: {
    backgroundColor: "#FA811B",
    "&:hover": {
      backgroundColor: "#FA811B",
    },
    color: "white",
    fontWeight: "bold",
    padding: theme.spacing(1),
  },
  divider: {
    margin: theme.spacing(2),
    marginLeft: theme.spacing(20),
    marginRight: theme.spacing(20),
  },
  examsHeader: {
    textAlign: "center",
  },
  examsHeaderText: {
    fontWeight: 700,
    fontSize: 25,
  },
  examsBody: {
    display: "flex",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  aboutExam: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: 350,
    textAlign: "center",
  },
  aboutExamName: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  aboutExamNameText: {
    fontWeight: "bold",
    fontSize: 20,
  },
  logoImg: {
    maxWidth: 50,
    maxHeight: 50,
  },
  examsBtn: {
    backgroundColor: "#FA811B",
    "&:hover": {
      backgroundColor: "#FA811B",
    },
    color: "white",
    fontWeight: "bold",
    padding: theme.spacing(1),
  },
}));
