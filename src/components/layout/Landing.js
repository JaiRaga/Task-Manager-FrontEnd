import React, { Fragment } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  makeStyles,
  Typography,
  Button
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const Landing = () => {
  const classes = useStyles();
  console.log(classes);
  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'>
            <HomeIcon />
          </IconButton>
          <Typography variant='h6' className={classes.title}>
            Tasker
          </Typography>
          <Button color='inherit'>Login</Button>
          <Button color='inherit'>Register</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Landing;
