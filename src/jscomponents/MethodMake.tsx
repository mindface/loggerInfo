import React, { useState } from "react";
import { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import  { getMethod, sendMethod } from "../store/methodSlice";
import type { MethodState } from "../store/methodSlice";
import type { AppDispatch } from "../store";
import { countCharacters } from "../lib/helper";

import Input from "./parts/Input";
import Textarea from "./parts/Textarea";
import Button from "./parts/Button";

export const MethodMake: React.FC = () => {
  const methods = useSelector((state: MethodState) => {
    return state.methods;
  });
  const [title, titleSet] = useState("");
  const [body, bodySet] = useState("");
  const [methodList, methodListSet] = useState(methods ?? []);

  const dispatch = useDispatch<AppDispatch>();

  useMemo(() => {
    dispatch(getMethod())
  },[title])

  const addActiojn = () => {
    const item = {
      id: methodList.length + 1,
      title: title,
      body: body,
    };
    dispatch(sendMethod(item)).then((res) => {
      console.log(res)
    })
    // taskListSet([...taskList, item]);
  };

  const setEndPic = (text:string) => {
    const setText = text.slice(0, 64)
    const num = countCharacters(text)
    console.log(num)
    return  setText + (num > 40 ? "...":"")
  }

  return (
    <div className="task-cycle">
      <div className="task-input max420">
        <h4 className="field-title pt-2 pb-2">手段作成</h4>
        <div className="field pb-1">
          <Input
            label="タイトル"
            onChangeAction={(v) => {
              titleSet(v);
            }}
          />
        </div>
        <div className="field pb-1">
          <Textarea
            label="詳細"
            onChangeAction={(v) => {
              bodySet(v);
            }}
          />
        </div>
        <div className="field">
          <Button label="追加" onClickAction={addActiojn} />
        </div>
      </div>
      <div className="task-output p-2 flex">
        {(methods ?? []).map((item) => (
          <div key={item.id} className="card">
            <h4 className="title pb-1">{item.title}</h4>
            <div className="body">{setEndPic(item.body) }</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MethodMake;
