import React from "react";
import AccountNoActivePageTemplate from "../components/tmpls/AccountNoActivePageTemplate";


type AccountNoActivePageProps = {
    email: string;
}

const AccountNoActivePage = ({email}: AccountNoActivePageProps) => {
    
    return(
        <AccountNoActivePageTemplate email={email} />
    );
}

export default AccountNoActivePage;