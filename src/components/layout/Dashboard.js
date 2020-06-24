import React, { Fragment } from "react";
import AddTask from "../tasks/AddTask";
import DeleteTask from "../tasks/DeleteTask";

const Dashboard = () => {
  return (
    <Fragment>
      <AddTask />
      <DeleteTask />
    </Fragment>
  );
};

export default Dashboard;
