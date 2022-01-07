import React, { useState } from "react";
import { makeStyles, Box, Typography, Button } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import { useSelector, useDispatch } from "react-redux";
import { AppConst } from "../../../../constants";
import * as actions from "../../../../redux/actions";
import FreeTestImg2 from "../../../../assets/images/free-test-2.png";
import { Link } from "react-router-dom";
import { getTestLevel } from "../../../../utils/index";

const ResultBody = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const totalPage = useSelector((state) => state.result?.totalPage);
  const listResult = useSelector((state) => state.result.listResult);
  const userInfo = JSON.parse(localStorage.getItem(AppConst.USER_PROFILE));

  const [page, setPage] = useState(1);

  const onPageChange = (event, value) => {
    setPage(value);
    dispatch(
      actions.getListResultRequest({
        page: value,
        userId: userInfo?.user?._id,
      })
    );
  };

  return (
    <Box className={classes.resultContainer}>
      <Box className={classes.listField}>
        {listResult.map((item) => (
          <Box className={classes.testItemContainer} key={item._id}>
            <Box className={classes.testItemLeft}>
              <img
                className={classes.testImage}
                src={FreeTestImg2}
                alt="free-test"
              />
            </Box>
            <Box className={classes.testItemRight}>
              <Box className={classes.testContent}>
                <Typography className={classes.testName}>
                  {item?.testData?.testName}
                </Typography>
                <Typography className={classes.testDescription}>
                  Độ khó: {getTestLevel(item?.testData?.testLevel)}
                </Typography>
                <Typography className={classes.testDescription}>
                  Điểm: {item?.point}
                </Typography>
              </Box>
              <Box
                className={classes.btnField}
                component={Link}
                to={`result-detail/${item._id}`}
              >
                <Button className={classes.doTestBtn}>Xem chi tiết</Button>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
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

export default ResultBody;

const useStyles = makeStyles((theme) => ({
  resultContainer: {
    flex: "1 1 auto",
    margin: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  listField: {
    width: "70%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  testItemContainer: {
    width: "100%",
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
    //flex: "0 1 auto",
    //marginRight: theme.spacing(2),
  },
  testImage: {
    maxWidth: 240,
    maxHeight: 190,
  },
  testItemRight: {
    //maxWidth: ,
    //flex: "1 1 auto",
    //marginLeft: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      maxWidth: 240,
      marginLeft: theme.spacing(0),
    },
  },
  testName: {
    color: "#FA811B",
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: theme.spacing(1),
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
    marginTop: theme.spacing(2),
  },
  paginationField: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: theme.spacing(2),
  },
}));
