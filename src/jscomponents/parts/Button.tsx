import React, { useState, useMemo } from "react";
import { getRandomString } from "../../lib/helper";

type Props = {
  label?: string;
  type?: string;
  onClickAction: () => void;
};

function Botton(props: Props) {
  const { label, type, onClickAction } = props;
  const chnageAction = onClickAction ?? (() => {});

  const setClass = useMemo(() => {
    switch (type) {
      case "danger":
        return "danger";
      case "caution":
        return "caution";
      default:
        return "base";
    }
  }, [type]);

  return (
    <div className={`btn-box d-inline-b ${setClass}`}>
      <button onClick={chnageAction}>{label ?? <>btn</>}</button>
    </div>
  );
}

export default Botton;
