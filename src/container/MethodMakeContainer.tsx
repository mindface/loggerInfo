import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import { taskStore } from "../store/methodSlice";
import MethodMake from "../jscomponents/MethodMake";

const MethodMakeContainer: React.FC = () => {
  return (
    <div className="info">
      <Provider store={taskStore}>
        <MethodMake />
      </Provider>
    </div>
  );
};

export default MethodMakeContainer;
