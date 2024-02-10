import React from "react";
import { Outlet } from "react-router-dom";
import CalculatorsNav from "../../../molecules/Layouts/Calculators/CalculatorsNav";



const CalculatorsLyaout = () => {

    return (
      <div className="calculators-layout-div-wrapper">
        <CalculatorsNav />
        <Outlet />
      </div>
    );
}

export default CalculatorsLyaout;