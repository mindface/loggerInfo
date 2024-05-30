import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "../store";
import Task from "../jscomponents/Task";

const PostContainer: React.FC = () => {
  return (
    <div className="info">
      <Provider store={store}>
        <Task />
      </Provider>
    </div>
  );
};

export default PostContainer;
