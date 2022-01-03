import React, { useState } from "react";
import {
  makeStyles,
  Box,
  Typography,
  Button,
  CircularProgress,
} from "@material-ui/core";
import FreeTestImg3 from "../../../../assets/images/free-test-3.png";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Pagination } from "@material-ui/lab";
import * as actions from "../../../../redux/actions";
import { AppConst } from "../../../../constants";

const FreeTestsBody = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const freeTest = useSelector((state) => state.test.publicTestList);
  const isFetching = useSelector((state) => state.test.isFetching);
  const totalPage = useSelector((state) => state.test?.totalPage);

  const [page, setPage] = useState(1);

  const onPageChange = (event, value) => {
    setPage(value);
    dispatch(
      actions.getPublicTestRequest({
        page: value,
        state: AppConst.TEST_STATUS.public,
        testType: AppConst.TEST_TYPE.freeTest,
      })
    );
  };

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
      {isFetching ? (
        <Box className={classes.loadingField}>
          <CircularProgress />
        </Box>
      ) : (
        <Box className={classes.freeTestBody}>
          {freeTest.map((item) => (
            <Box className={classes.testItemContainer} key={item._id}>
              <Box className={classes.testItemLeft}>
                <img
                  className={classes.testImage}
                  src={FreeTestImg3}
                  alt="free-test"
                />
              </Box>
              <Box className={classes.testItemRight}>
                <Box className={classes.testContent}>
                  <Typography className={classes.testName}>
                    {item.testName}
                  </Typography>
                  <Typography className={classes.testDescription}>
                    Bạn muốn được thử sức mình với những bài kiểm tra tiếng Anh
                    để đánh giá lại kiến thức của bản thân? Bạn cũng muốn được
                    trở thành 1 học viên E4U, cháy hết mình cùng những buổi học
                    đầy năng lượng, đầy hào hứng tại E4U…. Hãy làm ngay bài test
                    sau đây ..
                  </Typography>
                </Box>
                <Box
                  className={classes.btnField}
                  component={Link}
                  to={`do-test/${item._id}`}
                >
                  <Button className={classes.doTestBtn}>
                    Làm bài kiểm tra
                  </Button>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      )}
      <Box className={classes.paginationField}>
        <Pagination
          count={totalPage}
          page={page}
          variant="outlined"
          shape="rounded"
          onChange={onPageChange}
        />
      </Box>
    </Box>
  );
};

export default FreeTestsBody;

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
  loadingField: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
  paginationField: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: theme.spacing(2),
  },
}));
