import React, { useState, useEffect } from "react";
import {
  makeStyles,
  Box,
  Typography,
  InputBase,
  Button,
} from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import AdminSidebar from "../../../../components/AdminSidebar";
import { getUserRole } from "../../../../utils";
import trashIcon from "../../../../assets/icons/trash-2.png";
import AddUserModal from "./AddUserModal";
import DeleteUserModal from "./DeleteUserModal";
import { useSelector, useDispatch } from "react-redux";
import { AppConst } from "../../../../constants";
import * as actions from "../../../../redux/actions";

const ManageUserBody = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user?.listUser) || [];
  const totalPage = useSelector((state) => state.user?.totalPage);
  const error = useSelector((state) => state.user?.error);
  const defaultPassword = "0123456789";
  const userInfo = JSON.parse(localStorage.getItem(AppConst.USER_PROFILE));

  const [isAddUserModal, setIsAddUserModal] = useState(false);
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [selectedId, setSelectedId] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [page, setPage] = useState(1);
  const [onSearch, setOnSearch] = useState("");

  const onUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const onChangeRole = (e) => {
    setRole(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onOpenAddUserModal = () => {
    setIsAddUserModal(true);
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
    dispatch(actions.searchUserRequest(data));
  };

  const onOpenDeleteUserModal = (value) => {
    setIsDeleteModal(true);
    setSelectedId(value);
  };

  const onCloseModal = () => {
    setIsAddUserModal(false);
    setIsDeleteModal(false);
    setUsername("");
    setName("");
    setEmail("");
    setRole("");
    setSelectedId("");
  };

  const onAddUser = () => {
    if (username && name && role) {
      let newUser = {
        username: username,
        name: name,
        email: email,
        password: defaultPassword,
        role: role,
      };
      dispatch(actions.createUserRequest(newUser));
    } else {
      alert("Vui l??ng ??i???n ????? th??ng tin!");
    }
    onCloseModal();
  };

  const onDeleteUser = () => {
    let data = {
      role: userInfo?.user?.role,
      selectedId: selectedId,
    };
    dispatch(actions.deleteUserRequest(data));
    onCloseModal();
  };

  const onPageChange = (event, value) => {
    setPage(value);
    dispatch(actions.getListUserRequest({ page: value }));
  };

  useEffect(() => {
    if (error) {
      alert("???? x???y ra l???i, vui l??ng th??? l???i!");
      window.location.reload();
    }
  }, [error]);

  useEffect(() => {
    if (isAddUserModal && !error) {
      alert("Th??m ng?????i d??ng m???i th??nh c??ng");
    }
  }, [error]);

  useEffect(() => {
    if (isDeleteModal && !error) {
      alert("X??a ng?????i d??ng th??nh c??ng");
    }
  }, [error]);
  return (
    <Box className={classes.homeContainer}>
      <AdminSidebar />
      <Box className={classes.homeBody}>
        <Box className={classes.userContainer}>
          <Box className={classes.manageUserHeader}>
            <Box>
              <form onSubmit={onSubmitSearch}>
                <InputBase
                  placeholder="T??m ki???m..."
                  className={classes.searchInput}
                  onChange={onSearchChange}
                  value={onSearch}
                />
              </form>
            </Box>
            <Button
              className={classes.addBtn}
              onClick={() => {
                onOpenAddUserModal();
              }}
            >
              Th??m ng?????i d??ng
            </Button>
          </Box>
          <Box className={classes.manageUserBody}>
            {user.map((data) => (
              <Box className={classes.userRow} key={data._id}>
                <Box className={classes.usernameField}>
                  <Typography className={classes.userContent}>
                    H??? t??n: {data.name}
                  </Typography>
                </Box>
                <Box className={classes.emailField}>
                  <Typography className={classes.userContent}>
                    Email: {data.email}
                  </Typography>
                </Box>
                <Box className={classes.roleField}>
                  <Typography className={classes.userContent}>
                    Ch???c v???: {getUserRole(data.role)}
                  </Typography>
                </Box>
                {data?.role !== AppConst.USER_ROLE.admin ? (
                  <Box
                    className={classes.actionField}
                    onClick={() => {
                      onOpenDeleteUserModal(data?._id);
                    }}
                  >
                    <img src={trashIcon} className={classes.trashIcon} />
                    <Typography className={classes.userContent}>X??a</Typography>
                  </Box>
                ) : (
                  <Box className={classes.actionField}>
                    <Box src={trashIcon} className={classes.trashIcon} />
                    <Typography className={classes.userContent}></Typography>
                  </Box>
                )}
              </Box>
            ))}
          </Box>
          <Box className={classes.manageUserFooter}>
            <Pagination
              count={totalPage}
              page={page}
              variant="outlined"
              shape="rounded"
              onChange={onPageChange}
            />
          </Box>
          <AddUserModal
            isOpen={isAddUserModal}
            onClose={onCloseModal}
            onConfirm={onAddUser}
            username={username}
            name={name}
            email={email}
            role={role}
            onUsernameChange={onUsernameChange}
            onNameChange={onNameChange}
            onChangeRole={onChangeRole}
            onChangeEmail={onChangeEmail}
          />
          <DeleteUserModal
            isOpen={isDeleteModal}
            onClose={onCloseModal}
            onConfirm={onDeleteUser}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ManageUserBody;

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
  userContainer: {
    background: "white",
    width: "95%",
    height: "95%",
    borderRadius: 16,
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
  },
  manageUserHeader: {
    flex: "0 1 auto",
    marginBottom: theme.spacing(2),
    display: "flex",
  },
  manageUserBody: {
    flex: "1 1 auto",
    padding: theme.spacing(1, 0),
  },
  manageUserFooter: {
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
  userRow: {
    display: "flex",
    border: "1px solid #C4C4C4",
    borderRadius: 3,
    marginBottom: theme.spacing(3),
  },
  usernameField: {
    width: "30%",
    padding: theme.spacing(0, 2),
    borderRight: "1px solid #C4C4C4",
  },
  emailField: {
    width: "30%",
    padding: theme.spacing(0, 2),
    borderRight: "1px solid #C4C4C4",
  },
  roleField: {
    width: "30%",
    padding: theme.spacing(0, 2),
    borderRight: "1px solid #C4C4C4",
  },
  actionField: {
    width: "10%",
    padding: theme.spacing(0, 2),
    display: "flex",
    color: "#F50808",
    "&:hover": {
      cursor: "pointer",
    },
  },
  userContent: {
    padding: theme.spacing(1, 0),
  },
  trashIcon: {
    width: 20,
    height: 20,
    padding: theme.spacing(1, 0),
    marginRight: theme.spacing(1),
  },
}));
