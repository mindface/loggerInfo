import React, { useEffect, useState, useContext } from "react";
import { MyComponent } from "./MyComponent";
import { LayerProvider } from "../context/layer";

const PostsInit: React.FC = () => {
  return (
    <div className="info">
      {/* {posts.map((item) => <>{item.title}</>)} */}
      <LayerProvider>
        <MyComponent />
      </LayerProvider>
    </div>
  );
};

export default PostsInit;
