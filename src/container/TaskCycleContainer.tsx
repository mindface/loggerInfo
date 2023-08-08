import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { taskStore } from '../store/taskSlice';
import TaskCycle from "../jscomponents/TaskCycle";

const TaskCycleContainer: React.FC = () => {
  return <div className='info'>
    {/* {posts.map((item) => <>{item.title}</>)} */}
    <Provider store={taskStore}>
      <TaskCycle />
    </Provider>
  </div>
}

export default TaskCycleContainer;
