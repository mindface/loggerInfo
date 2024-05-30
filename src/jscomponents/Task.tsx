import React from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

export const Post: React.FC = () => {
  return (
    <div className="info">
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default Post;
