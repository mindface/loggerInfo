import React, { useState, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../store/index";
import { sendPost } from "../store/postSlice";
import { getToolCycle } from "../store/toolCycleSlice";
import type { Post as PostType } from "../store/postSlice";
import type { AppDispatch } from "../store";

import Select from "./parts/Select";
import type { SelectList, SelectItem } from "./parts/Select";
import Input from "./parts/Input";
import Textarea from "./parts/Textarea";

type Props = {
  edititem?: PostType;
};

export const TaskForm: React.FC<Props> = (props: Props) => {
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

  useMemo(() => {
    dispatch(getToolCycle());
  },[])

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
          <h4 className="field-title pt-2 pb-2">タスク記録する</h4>
            <div className="field">
              <Input
                label="タイトル"
                value={title}
                onChangeAction={(v) => {
                  titleSet(v);
                }}
              /> 
            </div>
            <div className="field">
              <Textarea
                label="詳細"
                value={body}
                onChangeAction={(v) => {
                  bodySet(v);
                }}
              />
            </div>
            <Select
              selectList={taskList ?? []}
              onChangeAction={(value) => {
                console.log(value)
              }}
            />
            <a href="/toolCycle" target="_brank">タスク循環を確認する</a>
            <div className="field">
              <button className="btn" onClick={addAction}>
                add
              </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default TaskForm;
