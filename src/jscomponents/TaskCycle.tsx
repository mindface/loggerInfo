import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { TaskState, Task } from "../store/taskSlice";
import type { AppDispatch } from "../store";

import Input from "./parts/Input";
import Textarea from "./parts/Textarea";
import Button from "./parts/Button";

export const TaskCycle: React.FC = () => {
  const tasks = useSelector((state: TaskState) => {
    return state.tasks;
  });
  const [title, titleSet] = useState("");
  const [body, bodySet] = useState("");
  const [taskType, taskTypeSet] = useState("");
  const [taskList, taskListSet] = useState(tasks ?? []);

  const dispatch = useDispatch<AppDispatch>();

  const addActiojn = () => {
    const item = {
      id: taskList.length + 1,
      title: title,
      body: body,
      taskType: taskType,
    };
    taskListSet([...taskList, item]);
  };

  return (
    <div className="task-cycle">
      <div className="task-input max420">
        <div className="field pb-1">
          <Input
            label="タイトル"
            value={title}
            onChangeAction={(v) => {
              titleSet(v);
            }}
          />
        </div>
        <div className="field pb-1">
          <Input
            label="タスクタイプ"
            value={taskType}
            onChangeAction={(v) => {
              taskTypeSet(v);
            }}
          />
        </div>
        <div className="field pb-1">
          <select>
            <option>選択してください</option>
            {tasks.map((task, k) => (
              <option key={`task${k}`} value={task.title}>
                {task.title}
              </option>
            ))}
          </select>
        </div>
        <div className="field pb-1">
          <Textarea
            label="詳細"
            value={body}
            onChangeAction={(v) => {
              bodySet(v);
            }}
          />
        </div>
        <div className="field">
          <Button label="追加" onClickAction={addActiojn} />
        </div>
      </div>
      <div className="task-output p-2 ">
        {(taskList ?? []).map((item) => (
          <div key={item.id} className="card">
            <h4 className="title pb-1">{item.title}</h4>
            <div className="body">{item.body}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskCycle;
