import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "../store";
import DashBord from "../jscomponents/DashBord";

const DashBordContainer: React.FC = () => {
  return (
    <div className="info">
      <DashBord />
    </div>
  );
};

export default DashBordContainer;
