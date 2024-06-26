import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "../store";
import Post from "../jscomponents/Post";

const PostContainer: React.FC = () => {
  return (
    <div className="info">
      <Provider store={store}>
        <Post />
      </Provider>
    </div>
  );
};

export default PostContainer;
