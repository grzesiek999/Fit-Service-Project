import React, {useState} from "react";
import CheckProductPageTemplate from "../components/tmpls/CheckProductPageTemplate";


type CheckProductPageProps = {
    isLogged: boolean
}

const CheckProductPage = ({isLogged}: CheckProductPageProps) => {

    return (
        <CheckProductPageTemplate isLogged={isLogged} />
    );
}

export default CheckProductPage;