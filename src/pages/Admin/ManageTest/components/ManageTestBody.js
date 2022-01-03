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
import { getTestStatus, getTestLevel } from "../../../../utils";
import ActionMenu from "./ActionMenu";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../../../redux/actions";

const ManageTestBody = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const listTest = useSelector((state) => state.test?.allTestList);
  const totalPage = useSelector((state) => state.test?.totalPage);

  const [anchorEl, setAnchorEl] = useState(null);
  const [page, setPage] = useState(1);

  const onMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const onClose = () => {
    setAnchorEl(null);
  };

  const onPageChange = (event, value) => {
    setPage(value);
    dispatch(
      actions.getAllTestRequest({
        page: value,
      })
    );
  };

  return (
    <Box className={classes.homeContainer}>
      <AdminSidebar />
      <Box className={classes.homeBody}>
        <Box className={classes.testContainer}>
          <Box className={classes.manageTestHeader}>
            <InputBase
              placeholder="Tìm kiếm..."
              className={classes.searchInput}
            />
            <Button className={classes.addBtn}>Tạo bài kiểm tra</Button>
          </Box>
          <Box className={classes.manageTestBody}>
            {listTest.map((data) => (
              <Box className={classes.testRow} key={data?._id}>
                <Box className={classes.testName}>
                  <Typography className={classes.content}>
                    {data?.testName}
                  </Typography>
                </Box>
                <Box className={classes.testLevel}>
                  <Typography className={classes.content}>
                    Độ khó: {getTestLevel(data?.testLevel)}
                  </Typography>
                </Box>
                <Box className={classes.testStatus}>
                  <Typography className={classes.content}>
                    Trạng thái: {getTestStatus(data?.state)}
                  </Typography>
                </Box>
                <Box className={classes.actionField} onClick={onMenuOpen}>
                  <Typography className={classes.content}>Chức năng</Typography>
                </Box>
                <ActionMenu anchorEl={anchorEl} onClose={onClose} />
              </Box>
            ))}
          </Box>
          <Box className={classes.manageTestFooter}>
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
    </Box>
  );
};

export default ManageTestBody;

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
  testContainer: {
    background: "white",
    width: "95%",
    height: "95%",
    borderRadius: 16,
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
  },
  manageTestHeader: {
    flex: "0 1 auto",
  },
  manageTestBody: {
    flex: "1 1 auto",
    padding: theme.spacing(1, 0),
  },
  manageTestFooter: {
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
  testRow: {
    display: "flex",
    border: "1px solid #C4C4C4",
    borderRadius: 3,
    marginBottom: theme.spacing(3),
  },
  testName: {
    width: "40%",
    padding: theme.spacing(0, 2),
    borderRight: "1px solid #C4C4C4",
  },
  testStatus: {
    width: "20%",
    padding: theme.spacing(0, 2),
    borderRight: "1px solid #C4C4C4",
  },
  testLevel: {
    width: "20%",
    padding: theme.spacing(0, 2),
    borderRight: "1px solid #C4C4C4",
  },
  actionField: {
    width: "10%",
    padding: theme.spacing(0, 2),
    display: "flex",
    "&:hover": {
      cursor: "pointer",
    },
  },
  content: {
    padding: theme.spacing(1, 0),
  },
}));

const FAKE_DATA = [
  { testId: 1, testName: "Bài kiểm tra 1", testLevel: 2, testStatus: 2 },
  { testId: 2, testName: "Bài kiểm tra 2", testLevel: 3, testStatus: 1 },
  { testId: 3, testName: "Bài kiểm tra 3", testLevel: 2, testStatus: 2 },
  { testId: 4, testName: "Bài kiểm tra 4", testLevel: 1, testStatus: 1 },
];
