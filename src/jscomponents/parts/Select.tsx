import React, { useState, useMemo } from "react";
import { getRandomString } from "../../lib/helper";

export interface SelectItem {
  id: string;
  value: string;
  name: string;
}

export type SelectList = SelectItem[];

type Props = {
  label?: string;
  type?: string;
  className?: string;
  selectList: SelectList;
  onChangeAction: (value: string) => void;
};

function Select(props: Props) {
  const { label, onChangeAction, selectList, className } = props;
  const chnageAction = onChangeAction ?? (() => {});

  return (
    <div className={`select-box d-inline-b ${className}`}>
      { label && <label htmlFor="" className="label pb-1">{label}</label>}
      <select
        className="select"
        onChange={(e) => {
          const value = e.target.value;
          if (value !== "") {
            chnageAction(e.target.value);
          }
        }}
      >
        <option>選んでください</option>
        {selectList.map((selectItem) => (
          <option key={`selectItem${selectItem.id}`}>{selectItem.name}</option>
        ))}
      </select>
    </div>
  );
}

export default Select;
