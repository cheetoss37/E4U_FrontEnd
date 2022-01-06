import React, { useState } from "react";
import {
  makeStyles,
  Box,
  Typography,
  InputBase,
  Button,
} from "@material-ui/core";
import { AppConst } from "../../../../constants";
import AdminSidebar from "../../../../components/AdminSidebar";
import CreateTest from "./CreateTest";
import EditTest from "./EditTest";
import { Pagination } from "@material-ui/lab";
import { getTestStatus, getTestLevel } from "../../../../utils";
import ActionMenu from "./ActionMenu";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../../../redux/actions";
import DeleteConfirmModal from "./DeleteConfirmModal";

const ManageTestBody = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const listTest = useSelector((state) => state.test?.allTestList);
  const totalPage = useSelector((state) => state.test?.totalPage);
  const userInfo = JSON.parse(localStorage.getItem(AppConst.USER_PROFILE));

  const [anchorEl, setAnchorEl] = useState(null);
  const [page, setPage] = useState(1);
  const [onSearch, setOnSearch] = useState("");
  const [isCreateTest, setIsCreateTest] = useState(false);
  const [isEditTest, setIsEditTest] = useState(false);
  const [isDeleteTest, setIsDeleteTest] = useState(false);
  const [selectedTest, setSelectedTest] = useState();

  const onSearchChange = (e) => {
    setOnSearch(e.target.value);
  };

  const onSubmitSearch = (e) => {
    e.preventDefault();
    let data = {
      page: 1,
      query: onSearch,
    };
    dispatch(actions.searchTestRequest(data));
  };

  const onMenuOpen = (testData) => (event) => {
    setAnchorEl(event.currentTarget);
    setSelectedTest(testData);
  };

  const onClose = () => {
    setAnchorEl(null);
    setIsDeleteTest(false);
  };

  const onCreateTestMode = () => {
    setIsCreateTest(true);
  };

  const onCancelCreateTest = () => {
    setIsCreateTest(false);
    const defaultData = {
      testName: "",
      testType: 2,
      testTime: "",
      testLevel: 1,
      state: 1,
      listQuestion: [],
    };
    dispatch(actions.setNewTest(defaultData));
  };

  const onEditTest = () => {
    setIsEditTest(true);
    setAnchorEl(null);
    const newListQuestionArray = selectedTest?.listQuestion.map(
      ({ questionId: _id, ...rest }) => ({
        _id,
        ...rest,
      })
    );
    let newTestData = {
      ...selectedTest,
      listQuestion: newListQuestionArray,
    };

    dispatch(actions.setNewTest(newTestData));
  };

  const onCancelEditTest = () => {
    setIsEditTest(false);
    const defaultData = {
      testName: "",
      testType: 2,
      testTime: "",
      testLevel: 1,
      state: 1,
      listQuestion: [],
    };
    dispatch(actions.setNewTest(defaultData));
  };

  const onOpenConfirmDelete = () => {
    setIsDeleteTest(true);
    setAnchorEl(null);
  };

  const onConfirmDelete = () => {
    setIsDeleteTest(false);
    let data = {
      role: userInfo?.user?.role,
      testId: selectedTest._id,
    };
    dispatch(actions.deleteTestRequest(data));
  };

  const onPublistTest = () => {
    let data = {
      role: userInfo?.user?.role,
      testId: selectedTest._id,
      state: AppConst.TEST_STATUS.public,
    };
    dispatch(actions.updateTestRequest(data));
    setAnchorEl(null);
    window.location.reload();
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
            {!isCreateTest && !isEditTest && (
              <form onSubmit={onSubmitSearch}>
                <InputBase
                  placeholder="Tìm kiếm..."
                  className={classes.searchInput}
                  onChange={onSearchChange}
                  value={onSearch}
                />
              </form>
            )}
            {!isCreateTest && !isEditTest && (
              <Button className={classes.addBtn} onClick={onCreateTestMode}>
                Tạo bài kiểm tra
              </Button>
            )}
            {isCreateTest && (
              <Button
                className={classes.cancelBtn}
                onClick={onCancelCreateTest}
              >
                Hủy tạo bài kiểm tra
              </Button>
            )}
            {isEditTest && (
              <Button className={classes.cancelBtn} onClick={onCancelEditTest}>
                Hủy sửa bài kiểm tra
              </Button>
            )}
          </Box>
          <Box className={classes.manageTestBody}>
            {!isCreateTest && !isEditTest && (
              <Box>
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
                    <Box
                      className={classes.actionField}
                      onClick={onMenuOpen(data)}
                    >
                      <Typography className={classes.content}>
                        Chức năng
                      </Typography>
                    </Box>
                    <ActionMenu
                      anchorEl={anchorEl}
                      onClose={onClose}
                      onOpenConfirmDelete={onOpenConfirmDelete}
                      onEditTest={onEditTest}
                      onPublistTest={onPublistTest}
                    />
                  </Box>
                ))}
              </Box>
            )}
            {isCreateTest && <CreateTest />}
            {isEditTest && <EditTest />}
          </Box>
          <Box className={classes.manageTestFooter}>
            {!isCreateTest && !isEditTest && (
              <Pagination
                count={totalPage}
                page={page}
                variant="outlined"
                shape="rounded"
                onChange={onPageChange}
              />
            )}
          </Box>
          <DeleteConfirmModal
            isOpen={isDeleteTest}
            onClose={onClose}
            onConfirm={onConfirmDelete}
          />
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
    display: "flex",
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
  cancelBtn: {
    background: "#F50808",
    textTransform: "none",
    color: "white",
    fontWeight: "bold",
    "&:hover": {
      background: "#F50808",
    },
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
