import React, { useState, useCallback, useEffect } from "react";
import {
  makeStyles,
  Box,
  Typography,
  InputBase,
  Button,
} from "@material-ui/core";
import AppLogo from "../../assets/icons/home-logo.png";
import { PersonOutline, VpnKey } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { REGISTER, HOME } from "../../constants/path.const";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions";
import { AppConst, PathConst } from "../../constants";
import { useHistory } from "react-router-dom";

const Login = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const isAuth = useSelector((state) => state.auth.isAuth);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const onPassChange = (e) => {
    setPassword(e.target.value);
  };

  const onLogin = () => {
    const account = {
      username: username,
      password: password,
    };
    dispatch(actions.postLoginStart(account));
  };

  useEffect(() => {
    if (isAuth) {
      history.push(PathConst.HOME);
    }
  }, [isAuth]);

  return (
    <Box className={classes.loginContainer}>
      <Box className={classes.loginBody}>
        <Box className={classes.leftBody}>
          <Box className={classes.webImage}>
            <img src={AppLogo} alt="e4u-logo" className={classes.appLogo} />
          </Box>
        </Box>
        <Box className={classes.rightBody}>
          <Box className={classes.formHeader}>
            <Typography className={classes.welcomeText}>
              Welcome back to E4U
            </Typography>
          </Box>
          <Box className={classes.formTitle}>
            <Typography className={classes.formTitleText}>Sign In</Typography>
          </Box>
          <Box className={classes.formBody}>
            <InputBase
              className={classes.formInput}
              placeholder="Username"
              startAdornment={<PersonOutline className={classes.inputIcon} />}
              onChange={onUsernameChange}
            />
            <InputBase
              className={classes.formInput}
              placeholder="Password"
              startAdornment={<VpnKey className={classes.inputIcon} />}
              type="password"
              onChange={onPassChange}
            />
            <Box className={classes.btnField}>
              <Button className={classes.submitBtn} onClick={onLogin}>
                <Typography>Login</Typography>
              </Button>
            </Box>
            <Typography
              className={classes.registerText}
              component={Link}
              to={REGISTER}
            >
              Create new account
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

export default Login;

const useStyles = makeStyles((theme) => ({
  loginContainer: {
    backgroundColor: "#F89898",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  loginBody: {
    backgroundColor: "white",
    width: "70%",
    height: "60%",
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
  registerText: {
    textAlign: "center",
    color: "#9B9B9B",
  },
  homeText: {
    textAlign: "center",
    color: "#9B9B9B",
    marginTop: theme.spacing(2),
  },
}));
