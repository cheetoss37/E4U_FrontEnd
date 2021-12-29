import React, { useState } from "react";
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

const ManageUserBody = () => {
  const classes = useStyles();
  const [isAddUserModal, setIsAddUserModal] = useState(false);
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [page, setPage] = useState(1);

  const onUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const onChangeRole = (e) => {
    setRole(e.target.value);
  };

  const onOpenAddUserModal = () => {
    setIsAddUserModal(true);
  };

  const onOpenDeleteUserModal = () => {
    setIsDeleteModal(true);
  };

  const onCloseModal = () => {
    setIsAddUserModal(false);
    setIsDeleteModal(false);
    setUsername("");
    setName("");
    setRole("");
  };

  const onAddUser = () => {
    if (username && name && role) {
      const newUser = {
        username: username,
        name: name,
        role: role,
      };
      //Dispath create user
    } else {
      console.log("Nope");
    }
    onCloseModal();
  };

  const onDeleteUser = () => {
    alert("delete");
    //Dispath delete user
  };

  const onPageChange = (event, value) => {
    setPage(value);
    console.log(value);
    //dispatch get paging data
  };

  return (
    <Box className={classes.homeContainer}>
      <AdminSidebar />
      <Box className={classes.homeBody}>
        <Box className={classes.userContainer}>
          <Box className={classes.manageUserHeader}>
            <InputBase
              placeholder="Tìm kiếm..."
              className={classes.searchInput}
            />
            <Button
              className={classes.addBtn}
              onClick={() => {
                onOpenAddUserModal();
              }}
            >
              Thêm người dùng
            </Button>
          </Box>
          <Box className={classes.manageUserBody}>
            {FakeData.map((data) => (
              <Box className={classes.userRow} key={data.id}>
                <Box className={classes.usernameField}>
                  <Typography className={classes.userContent}>
                    Họ tên: {data.name}
                  </Typography>
                </Box>
                <Box className={classes.emailField}>
                  <Typography className={classes.userContent}>
                    Email: {data.email}
                  </Typography>
                </Box>
                <Box className={classes.roleField}>
                  <Typography className={classes.userContent}>
                    Chức vụ: {getUserRole(data.role)}
                  </Typography>
                </Box>
                <Box
                  className={classes.actionField}
                  onClick={() => {
                    onOpenDeleteUserModal();
                  }}
                >
                  <img src={trashIcon} className={classes.trashIcon} />
                  <Typography className={classes.userContent}>Xóa</Typography>
                </Box>
              </Box>
            ))}
          </Box>
          <Box className={classes.manageUserFooter}>
            <Pagination
              count={10}
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
            role={role}
            onUsernameChange={onUsernameChange}
            onNameChange={onNameChange}
            onChangeRole={onChangeRole}
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

const FakeData = [
  { id: 1, name: "Nguyễn Văn A", email: "nguyenvana@gmail.com", role: 1 },
  { id: 2, name: "Nguyễn Văn B", email: "nguyenvanb@gmail.com", role: 2 },
  { id: 3, name: "Nguyễn Văn C", email: "nguyenvanc@gmail.com", role: 1 },
  { id: 4, name: "Nguyễn Văn D", email: "nguyenvand@gmail.com", role: 2 },
  { id: 5, name: "Nguyễn Văn E", email: "nguyenvane@gmail.com", role: 1 },
  { id: 6, name: "Nguyễn Văn F", email: "nguyenvanf@gmail.com", role: 1 },
  { id: 7, name: "Nguyễn Văn G", email: "nguyenvang@gmail.com", role: 2 },
];
