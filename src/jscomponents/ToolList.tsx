import React, { useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getToolCycle } from "../store/toolCycleSlice";
import type { RootState } from "../store";
import type { AppDispatch } from "../store";

import Button from "./parts/Button";

export const ToolList: React.FC = () => {
  const toolCycles = useSelector((state: RootState) => {
    return state.toolCycleStore.toolCycles
  });
  const [title, titleSet] = useState("");
  const [body, bodySet] = useState("");

  const dispatch = useDispatch<AppDispatch>();

  useMemo(() => {
    dispatch(getToolCycle())
  },[])

  return (
    <div className="task-cycle">
      <div className="task-input max420">
        <h4 className="field-title pt-2 pb-1">サイクル一覧</h4>
      </div>
      <div className="task-output p-2 ">
        {(toolCycles ?? []).map((item) => (
          <div key={item.id} className="card">
            <h4 className="title pb-1">{item.title}</h4>
            <div className="body">{item.body.slice(0, 64)}...</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolList;
