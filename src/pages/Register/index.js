import React from "react";
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

const Register = () => {
  const classes = useStyles();

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
              startAdornment={<PersonOutline className={classes.inputIcon} />}
            />
            <InputBase
              className={classes.formInput}
              placeholder="Email"
              startAdornment={<MailOutlineOutlined className={classes.inputIcon} />}
            />
            <InputBase
              className={classes.formInput}
              placeholder="Password"
              startAdornment={<VpnKey className={classes.inputIcon} />}
            />
            <InputBase
              className={classes.formInput}
              placeholder="Confirm password"
              startAdornment={<VpnKey className={classes.inputIcon} />}
            />
            <Box className={classes.btnField}>
              <Button className={classes.submitBtn}>
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
