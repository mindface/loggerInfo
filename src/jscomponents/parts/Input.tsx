import React, { useState } from "react";
import { getRandomString } from "../../lib/helper";

type Props = {
  type?: string;
  value?: string;
  label?: string;
  id?: string;
  onChangeAction: (value: string) => void;
};

function Input(props: Props) {
  const { type, value, label, id, onChangeAction } = props;
  const chnageAction = onChangeAction ?? (() => {});

  const [inputValue, inputValueSet] = useState(value ?? "");
  const [inputId, _] = useState(
    `${getRandomString(8)}-${id}` ?? getRandomString(8),
  );

  return (
    <div className="input-box">
      {label && (
        <label htmlFor={inputId} className="label d-inline-b p-05">
          {label}
        </label>
      )}
      <input
        className="input d-inline-b"
        type={type ? type : "text"}
        id={inputId}
        value={inputValue}
        onChange={(e) => {
          const v = e.target.value;
          inputValueSet(v);
          chnageAction(v);
        }}
      />
    </div>
  );
}

export default Input;
