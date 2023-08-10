import React, { useState } from "react";
import { Provider } from "react-redux";
import { taskStore } from "../store/taskSlice";
import TaskMake from "../jscomponents/TaskMake";
import TaskCycle from "../jscomponents/TaskCycle";

const TaskCycleContainer: React.FC = () => {
  const [tab, tabSet] = useState("make");
  return (
    <div className="task-cycle">
      {/* {posts.map((item) => <>{item.title}</>)} */}
      <Provider store={taskStore}>
        <>
          <div className="tab-action">
            <button className="btn" onClick={() => tabSet("make")}>
              タスクを作る
            </button>
            <button className="btn" onClick={() => tabSet("cycle")}>
              サイクル構造にする
            </button>
            <button className="btn" onClick={() => tabSet("json")}>
              json
            </button>
          </div>
          <div className="tab-content">
            {tab === "make" && <TaskMake />}
            {tab === "cycle" && <TaskCycle />}
            {tab === "json" && <>json情報化</>}
          </div>
        </>
      </Provider>
    </div>
  );
};

export default TaskCycleContainer;
