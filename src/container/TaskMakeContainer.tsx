import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import { taskStore } from "../store/taskSlice";
import TaskCycle from "../jscomponents/TaskCycle";

const TaskMakeContainer: React.FC = () => {
  return (
    <div className="info">
      {/* {posts.map((item) => <>{item.title}</>)} */}
      <Provider store={taskStore}>
        タスクループを形成する
        <TaskCycle />
      </Provider>
    </div>
  );
};

export default TaskMakeContainer;
