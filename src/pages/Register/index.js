import React, { useState, useEffect } from "react";
import {
  makeStyles,
  Box,
  Typography,
  InputBase,
  Button,
} from "@material-ui/core";
import AppLogo from "../../assets/icons/home-logo.png";
import { PersonOutline, VpnKey, MailOutlineOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { LOGIN, HOME } from "../../constants/path.const";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions";
import { useHistory } from "react-router-dom";

const Register = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth?.error);
  const user = useSelector((state) => state.auth?.user);
  const history = useHistory();

  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const onUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const onNameChange = (e) => {
    setName(e.target.value);
  };
  const onPassChange = (e) => {
    setPass(e.target.value);
  };

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onSubmit = () => {
    const data = {
      username: username,
      name: name,
      password: pass,
      email: email,
    };
    setUsername("");
    setPass("");
    setName("");
    setEmail("");
    dispatch(actions.postRegisterStart(data));
  };

  useEffect(() => {
    if (error) {
      alert("Đã xảy ra lỗi, vui lòng thử lại");
    }
  }, [error]);

  useEffect(() => {
    if (Object.keys(user).length > 0) {
      alert("Đăng ký thành công");
      history.push(LOGIN);
    }
  }, [user]);
  return (
    <Box className={classes.regsterContainer}>
      <Box className={classes.regsterBody}>
        <Box className={classes.leftBody}>
          <Box className={classes.webImage}>
            <img src={AppLogo} alt="e4u-logo" className={classes.appLogo} />
          </Box>
        </Box>
        <Box className={classes.rightBody}>
          <Box className={classes.formHeader}>
            <Typography className={classes.welcomeText}>
              Welcome to E4U
            </Typography>
          </Box>
          <Box className={classes.formTitle}>
            <Typography className={classes.formTitleText}>
              Create Account
            </Typography>
          </Box>
          <Box className={classes.formBody}>
            <InputBase
              className={classes.formInput}
              placeholder="Username"
              value={username}
              onChange={onUsernameChange}
              startAdornment={<PersonOutline className={classes.inputIcon} />}
            />
            <InputBase
              className={classes.formInput}
              placeholder="Họ tên"
              value={name}
              onChange={onNameChange}
              startAdornment={<PersonOutline className={classes.inputIcon} />}
            />
            <InputBase
              className={classes.formInput}
              placeholder="Email"
              value={email}
              onChange={onEmailChange}
              startAdornment={
                <MailOutlineOutlined className={classes.inputIcon} />
              }
            />
            <InputBase
              className={classes.formInput}
              placeholder="Password"
              type="password"
              value={pass}
              onChange={onPassChange}
              startAdornment={<VpnKey className={classes.inputIcon} />}
            />
            <Box className={classes.btnField}>
              <Button className={classes.submitBtn} onClick={onSubmit}>
                <Typography>Register</Typography>
              </Button>
            </Box>
            <Typography
              className={classes.loginText}
              component={Link}
              to={LOGIN}
            >
              Go to login page
            </Typography>
            <Typography className={classes.homeText} component={Link} to={HOME}>
              Back to homepage
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Register;

const useStyles = makeStyles((theme) => ({
  regsterContainer: {
    backgroundColor: "#F89898",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  regsterBody: {
    backgroundColor: "white",
    width: "70%",
    height: "80%",
    borderRadius: 10,
    display: "flex",
    [theme.breakpoints.down("md")]: {
      alignItems: "center",
      justifyContent: "center",
    },
  },
  leftBody: {
    width: "50%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  appLogo: {
    width: 200,
    height: 200,
  },
  rightBody: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      width: "60%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  formHeader: {
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      fontSize: 18,
    },
  },
  formBody: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  formTitleText: {
    fontSize: 24,
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      fontSize: 18,
    },
  },
  formInput: {
    margin: theme.spacing(2),
    backgroundColor: "#E5E5E5",
    borderRadius: 50,
    padding: theme.spacing(2),
  },
  inputIcon: {
    color: "#9B9B9B",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  btnField: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: theme.spacing(2),
  },
  submitBtn: {
    textTransform: "none",
    minWidth: 120,
    backgroundColor: "#FA811B",
    "&:hover": {
      backgroundColor: "#FA811B",
    },
    borderRadius: 50,
  },
  loginText: {
    textAlign: "center",
    color: "#9B9B9B",
  },
  homeText: {
    textAlign: "center",
    color: "#9B9B9B",
    marginTop: theme.spacing(2),
  },
}));
