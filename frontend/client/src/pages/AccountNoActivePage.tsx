import React from "react";
import AccountNoActivePageTemplate from "../components/tmpls/AccountNoActivePageTemplate";

const AccountNoActivePage = ({email} :{email: string}) => {
    
    return(
        <AccountNoActivePageTemplate email={email} />
    );
}

export default AccountNoActivePage;