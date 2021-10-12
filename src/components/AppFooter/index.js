import React from 'react'
import { makeStyles, Box, Typography } from '@material-ui/core'

const AppFooter = () => {
  const classes = useStyles();

  return (
    <Box className={classes.footerCointainer}>
      <Box className={classes.footerBody}>
        <Box className={classes.leftBody}>
          <Typography className={classes.appText}> E4U ENGLISH INTERNATIONAL EDUCATION SYSTEM </Typography>
          <Typography> Head Office: Tay Son, Dong Da, Hanoi </Typography>
          <Typography> Contact Us: minhtung112@gmail.com  </Typography>
        </Box>
        <Box className={classes.leftBody}>
          <Typography className={classes.languageText}>Languages: </Typography>
          <Box className={classes.languagesBox}>
          <Typography className={classes.engText}>English </Typography>
          <Typography className={classes.viText}>Tiếng Việt </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default AppFooter

const useStyles = makeStyles((theme) => ({
  footerCointainer: {
    background: "white",
    boxShadow: "0px -1px 1px #DFE9EE",
    color: theme.palette.text.primary,
    height: 120,
    flex: "0 1 auto",
    [theme.breakpoints.down("xs")]: {
      display: "none"
    },
  },
  footerBody: {
    margin: theme.spacing(2),
    marginLeft: theme.spacing(10),
    marginRight: theme.spacing(20),
    display: "flex",
    justifyContent: "space-between",
  },
  appText: {
    fontWeight: "bold"
  },
  languagesBox: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: theme.spacing(1)
  },
  languageText: {
    fontWeight: "bold",
  },
  engText: {
    marginRight: theme.spacing(2)
  },
  viText: {
    marginLeft: theme.spacing(2)
  }
}))