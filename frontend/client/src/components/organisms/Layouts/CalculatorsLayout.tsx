import React from "react";
import { Outlet } from "react-router-dom";
import "../../../styles/index.scss";
import CalculatorsNav from "../../molecules/Calculators/CalculatorsNav";



const CalculatorsLyaout = () => {

    return (
      <div className="calculators-layout-div-wrapper">
        <CalculatorsNav />
        <Outlet />
      </div>
    );
}

export default CalculatorsLyaout;