import React, { Dispatch, createContext, useReducer, ReactNode } from "react";

export type Info = {
  infoId: string;
  title: string;
  datail: string;
};

export type InfoList = Info[];

export type List = {
  id: number;
  title: string;
  category: string;
  date: string;
  infoList: InfoList;
};

interface State {
  layerList: List[];
  layer: List;
}

interface Action {
  type: string;
  layerList?: List[];
  layer?: List;
}

interface Props {
  children: React.ReactNode;
}

export const layerContext = React.createContext(
  {} as {
    state: State;
    dispatch: React.Dispatch<Action>;
  },
);

const reducer = (state: State, action: Action) => {
  const actionList = action.layerList ?? [];
  switch (action.type) {
    case "layer/add":
      return {
        ...state,
        layerList: actionList,
      };
    case "layer/update":
      const __ = actionList
        .map((item) => {
          return item.id === action.layer!.id ? action.layer : item;
        })
        .filter(Boolean) as List[];
      return {
        ...state,
        layerList: __,
      };
    default:
      return state;
  }
};

const initalState: State = {
  layerList: [
    {
      id: 1,
      title: "name",
      category: "",
      date: "20230102",
      infoList: [{ infoId: "info01", title: "info01", datail: "" }],
    },
    {
      id: 2,
      title: "name",
      category: "",
      date: "20230102",
      infoList: [{ infoId: "info01", title: "info02", datail: "" }],
    },
    {
      id: 3,
      title: "name",
      category: "",
      date: "20230102",
      infoList: [{ infoId: "info01", title: "info03", datail: "" }],
    },
  ],
  layer: {
    id: 1,
    title: "name",
    category: "",
    date: "20230102",
    infoList: [{ infoId: "info01", title: "info03", datail: "" }],
  },
};

export const LayerProvider = (props: Props) => {
  const [state, dispatch] = React.useReducer(reducer, initalState);
  return (
    <layerContext.Provider value={{ state, dispatch }}>
      {props.children}
    </layerContext.Provider>
  );
};
