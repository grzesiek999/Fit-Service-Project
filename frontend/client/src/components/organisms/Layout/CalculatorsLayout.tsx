import React from "react";
import { Outlet } from "react-router-dom";
import "../../../styles/index.scss";
import CalculatorsNav from "../Calculators/CalculatorsNav";



const CalculatorsLyaout = () => {

    return (
        <>
        <CalculatorsNav />
        <Outlet />
      </>
    );
}

export default CalculatorsLyaout;