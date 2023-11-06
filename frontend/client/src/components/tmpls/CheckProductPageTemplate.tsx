import React from "react";
import SearchDiv from "../organisms/CheckProduct/SearchAndResultsDiv";


type CheckProductPageTemplateProps = {
    isLogged: boolean
}

const CheckProductPageTemplate = ({isLogged}: CheckProductPageTemplateProps) => {

    return (
        <div><SearchDiv isLogged={isLogged} /></div>
    );
}

export default CheckProductPageTemplate;