import React, { useEffect, useState, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from "../store/index";
import { getPost } from '../store/postSlice'
import type { AppDispatch } from '../store';
import PostForm from "./PostForm";

export const Post: React.FC = () => {
  const posts = useSelector((state:RootState) => state.postStore.posts);
  
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getPost());
  },[])
  return <div className='info'>
    <PostForm />
    {posts.map((item) => <div key={item.id}>{item.title}</div>)}
  </div>
};

export default Post;