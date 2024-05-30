import React, { useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../store/index";
import { sendPost } from "../store/postSlice";
import type { Post as PostType } from "../store/postSlice";
import type { AppDispatch } from "../store";

import Select from "./parts/Select";
import type { SelectList, SelectItem } from "./parts/Select";
import Input from "./parts/Input";
import Textarea from "./parts/Textarea";

type Props = {
  edititem?: PostType;
};

export const TaskList: React.FC<Props> = (props: Props) => {
  const toolCycles = useSelector((state: RootState) => state.toolCycleStore.toolCycles);
  const dispatch = useDispatch<AppDispatch>();
  const [title, titleSet] = useState("");
  const [body, bodySet] = useState("");

  const addAction = () => {
    const addItem = {
      id: 1,
      title: title,
      body: body,
      status: "run"
    };
    dispatch(sendPost(addItem));
  };

  const taskList = useMemo(() => {
    let list = [] as SelectList
    toolCycles.forEach((toolCycle, i) => {
      list.push({
        id: `task${i}`,
        value: `${toolCycle.id}`,
        name: toolCycle.title
      })
    })
    return list
  },[toolCycles])

  return (
    <div className="task-memory">
      <div className="post-fields">
        <div className="task-memory-input max420">
          <h4 className="field-title pt-2 pb-2">タスク一覧</h4>
          TaskList
        </div>
      </div>
    </div>
  );
};

export default TaskList;
