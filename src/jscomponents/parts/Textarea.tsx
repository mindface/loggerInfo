import React, { useState } from "react";
import { getRandomString } from "../../lib/helper";

type Props = {
  value?: string;
  label?: string;
  id?: string;
  onChangeAction: (value: string) => void;
};

function Textarea(props: Props) {
  const { value, label, id, onChangeAction } = props;
  const chnageAction = onChangeAction ?? (() => {});

  const [textareaValue, textareaValueSet] = useState(value ?? "");
  const [textareaId, _] = useState(
    `${getRandomString(8)}-${id}` ?? getRandomString(8),
  );

  return (
    <div className="input-box">
      {label && (
        <label htmlFor={textareaId} className="label d-inline-b p-05">
          {label}
        </label>
      )}
      <textarea
        className="textarea d-inline-b"
        id={textareaId}
        value={textareaValue}
        onChange={(e) => {
          const v = e.target.value;
          textareaValueSet(v);
          chnageAction(v);
        }}
      />
    </div>
  );
}

export default Textarea;
