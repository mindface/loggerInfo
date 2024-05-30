import React, { useState } from "react";
import { Provider } from "react-redux";
import ToolList from "../jscomponents/ToolList";
import TaskCycle from "../jscomponents/ToolCycle";
import { store } from "../store";

const ToolCycleContainer: React.FC = () => {
  const [tab, tabSet] = useState("list");
  return (
    <div className="task-cycle">
      <Provider store={store}>
        <>
          <div className="tab-action">
            <button className="btn" onClick={() => tabSet("list")}>
              サイクル一覧
            </button>
            <button className="btn" onClick={() => tabSet("cycle")}>
              サイクル構造にする
            </button>
            <button className="btn" onClick={() => tabSet("json")}>
              json
            </button>
          </div>
          <div className="tab-content">
            {tab === "list" && <ToolList />}
            {tab === "cycle" && <TaskCycle />}
            {tab === "json" && <>json情報化</>}
          </div>
        </>
      </Provider>
    </div>
  );
};

export default ToolCycleContainer;
