import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from "../store/index";
import { sendPost } from '../store/postSlice'
import type { Post as PostType } from '../store/postSlice'
import type { AppDispatch } from '../store';

type Props = {
  edititem?: PostType
}

export const Post: React.FC<Props> = (props:Props) => {
  const posts = useSelector((state:RootState) => state.postStore.posts);
  const dispatch = useDispatch<AppDispatch>();
  const [title, titleSet] = useState("");
  const [body, bodySet] = useState("");

  const addAction = () => {
    const d = {
      id: 1,
      title: title,
      body: body,
    }
    dispatch(sendPost(d));
  }

  return <div className='post-fields'>
    <div className="fields">
      <div className="field">
        <input type="text"
          value={title}
          onChange={(e) => {titleSet(e.target.value)}}
        />
      </div>
      <div className="field">
        <textarea
          cols={30}
          rows={10}
          value={body}
          onChange={(e) => {bodySet(e.target.value)}}
        ></textarea>
      </div>
      <div className="field">
        <button className='btn' onClick={addAction}>add</button>
      </div>
    </div>
  </div>
};

export default Post;