import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import { taskStore } from "../store/taskSlice";
// タスクループを形成する予定
// import TaskCycle from "../jscomponents/TaskCycle";

const TaskMakeContainer: React.FC = () => {
  return (
    <div className="info">
      <Provider store={taskStore}>
        タスクループを形成する予定
        {/* <TaskCycle /> */}
      </Provider>
    </div>
  );
};

export default TaskMakeContainer;
