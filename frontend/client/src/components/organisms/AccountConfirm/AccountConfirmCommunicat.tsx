import React from "react";


type AccountConfirmCommunicatProps = {
    active: boolean;
}

const AccountConfirmCommunicat = ({active}: AccountConfirmCommunicatProps) => {

    if(active === true) {
        return(
            <div>
                Twoje konto zostało zaaktywowane!
            </div>
        );
    }
    else {
        return(
            <div>
                Nieważny link aktywacyjny!
            </div>
        );
    }
}

export default AccountConfirmCommunicat;