import React from "react";
import SearchProduct from "../organisms/CheckProduct/SearchProduct";

type CheckProductPageTemplateProps = {
    isLogged: boolean
}

const CheckProductPageTemplate = ({isLogged}: CheckProductPageTemplateProps) => {

    return (
        <div><SearchProduct isLogged={isLogged} /></div>
    );
}

export default CheckProductPageTemplate;