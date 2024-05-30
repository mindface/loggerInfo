import React, { useEffect, useState, useContext } from "react";
import { LayerProvider } from "../context/layer";

const DashBord: React.FC = () => {
  return (
    <div className="info">
      <LayerProvider>DashBord</LayerProvider>
    </div>
  );
};

export default DashBord;
