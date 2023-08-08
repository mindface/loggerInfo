import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';
import DashBord from "../jscomponents/DashBord";

const PostContainer: React.FC = () => {
  return <div className='info'>
    {/* {posts.map((item) => <>{item.title}</>)} */}
    <Provider store={store}>
      <DashBord />
    </Provider>
  </div>
}

export default PostContainer;
