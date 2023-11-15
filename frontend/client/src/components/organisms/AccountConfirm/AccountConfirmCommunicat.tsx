import React from "react";


type AccountConfirmCommunicatProps = {
    actived: boolean;
}

const AccountConfirmCommunicat = ({actived}: AccountConfirmCommunicatProps) => {

    if(actived === true) {
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