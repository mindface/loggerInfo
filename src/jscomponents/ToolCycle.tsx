import React, { useState, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMethod  } from "../store/methodSlice";
import { sendToolCycle } from "../store/toolCycleSlice";
import type { Method } from "../store/methodSlice";
import type { AppDispatch } from "../store";
import type { RootState } from "../store/index";

import Input from "./parts/Input";
import Textarea from "./parts/Textarea";
import Button from "./parts/Button";
import Select from "./parts/Select";
import cycleTypeJson from "../json/cycleTypeList.json";

export const TaskCycle: React.FC = () => {
  const methods = useSelector((state: RootState) => {
    return state.methodStore.methods;
  });
  const toolCycles = useSelector((state: RootState) => {
    return state.toolCycleStore.toolCycles;
  });
  const [selectItem, selectItemSet] = useState(false);
  const [title, titleSet] = useState("");
  const [body, bodySet] = useState("");
  const [cycleType, cycleTypeSet] = useState("none");
  const [toolCyclesList, toolCyclesListSet] = useState(toolCycles ?? []);
  const [methodList, methodListSet] = useState<Method[]>([]);

  const dispatch = useDispatch<AppDispatch>();

  const addAction = () => {
    const item = {
      id: 1,
      title: title,
      body: body,
      taskId: "",
      similarTag: cycleType,
      methods: methodList
    };
    dispatch(sendToolCycle(item))
  };

  const addMethodAction = (method:Method) => {
    methodListSet([...methodList,method])
  }

  useMemo(() => {
    dispatch(getMethod())
  },[])

  return (
    <div className="task-cycle">
      <div className="task-input">
        <div className="fields mb-2">
          <h4 className="field-title pt-2 pb-2">タスクサイクル作成</h4>
          <div className="field pb-1 max420">
            <Input
              label="タイトル"
              value={title}
              onChangeAction={(v) => {
                titleSet(v);
              }}
            />
          </div>
          <div className="field pb-1 max420">
            <Select
              label="サイクルタイプ"
              selectList={cycleTypeJson}
              onChangeAction={(value) => {
                cycleTypeSet(value)
              }}
            />
          </div>
          <div className="field pb-1 max420">
            <Textarea
              label="詳細"
              value={body}
              onChangeAction={(v) => {
                bodySet(v);
              }}
            />
          </div>
        </div>
        <div className="method-area">
          <div className="method-output minh150 flex mb-2 p-2 bg-white">
            { methodList.length === 0 && <>カードを選んでください</>}
            {(methodList ?? []).map((method) => <div key={method.id} className="card">
                <h4 className="title pb-1">{method.title}</h4>
                <div className="body">タイトルの決定因子から情報を形成</div>
              </div>)}
          </div>
          <button onClick={() => selectItemSet(!selectItem)}>選択カード</button>
          <div className="relative">
            { selectItem && <div className="absolute-tl box-shadow bg-white">
              <div className="method-output p-2 flex maxvhCardArea">
                {(methods.filter((item) => item.title !== "")).map((method) => (
                  <div key={method.id} className="card">
                    <h4 className="title pb-1">{method.title}</h4>
                    <div className="body">{method.body}</div>
                    <button onClick={() => addMethodAction(method)}>追加</button>
                  </div>
                ))}
              </div>
            </div>}
          </div>
        </div>
        {/* 検討して機能因子を再構築 */}
        {/* <div className="field pb-1">
          <select>
            <option>選択してください</option>
            {toolCycles.map((task, k) => (
              <option key={`task${k}`} value={task.title}>
                {task.title}
              </option>
            ))}
          </select>
        </div> */}
        <div className="field">
          <Button label="追加" onClickAction={addAction} />
        </div>
      </div>
    </div>
  );
};

export default TaskCycle;
