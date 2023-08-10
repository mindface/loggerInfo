import React from "react";
import DashBord from "../jscomponents/DashBord";

const PostContainer: React.FC = () => {
  return (
    <div className="info">
      {/* {posts.map((item) => <>{item.title}</>)} */}
      <DashBord />
    </div>
  );
};

export default PostContainer;
