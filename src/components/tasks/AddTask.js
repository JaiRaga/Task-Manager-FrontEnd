import React, { Fragment } from "react";
import AddIcon from "@material-ui/icons/Add";
import { IconButton } from "@material-ui/core";

// import { makeStyles } from "@material-ui/styles";
// import theme from "../../theme";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     main: "#000"
//   },
//   create: {
//     main: theme.palette.create.main
//   }
// }));

const AddTask = () => {
  //   const classes = useStyles();

  const createTask = () => {};

  return (
    <Fragment>
      <IconButton aria-label='create' color='primary'>
        <AddIcon onClick={createTask} />
      </IconButton>
    </Fragment>
  );
};

export default AddTask;
