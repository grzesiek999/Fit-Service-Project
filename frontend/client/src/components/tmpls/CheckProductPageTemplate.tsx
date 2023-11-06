import React, {useState} from "react";
import  SearchDiv  from "../organisms/SearchDiv";


type CheckProductPageTemplateProps = {
    isLogged: boolean
}

const CheckProductPageTemplate = ({isLogged}: CheckProductPageTemplateProps) => {

    return (
        <div><SearchDiv isLogged={isLogged} /></div>
    );
}

export default CheckProductPageTemplate;