import React, { Fragment } from "react";
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const DeleteTask = () => {
  return (
    <Fragment>
      <IconButton aria-label='delete' color='primary'>
        <DeleteIcon />
      </IconButton>
    </Fragment>
  );
};

export default DeleteTask;
