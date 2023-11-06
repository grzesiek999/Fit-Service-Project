import React from "react";
import SearchAndResultsDiv from "../organisms/CheckProduct/SearchAndResultsDiv";


type CheckProductPageTemplateProps = {
    isLogged: boolean
}

const CheckProductPageTemplate = ({isLogged}: CheckProductPageTemplateProps) => {

    return (
        <div><SearchAndResultsDiv isLogged={isLogged} /></div>
    );
}

export default CheckProductPageTemplate;