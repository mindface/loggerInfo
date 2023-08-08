import React, { useEffect, useState, useContext } from 'react';
import { Info, List, InfoList, layerContext } from "../context/layer";

export const MyComponent: React.FC = () => {
  const {state, dispatch} = useContext(layerContext)
  // const [panelList,setPanelList] = useState<List[]>(state.layerList ?? []);
  useEffect(() => {
    console.log(state)
  },[])
  return <div className='info'>
    {/* {posts.map((item) => <>{item.title}</>)} */}
  </div>
};

