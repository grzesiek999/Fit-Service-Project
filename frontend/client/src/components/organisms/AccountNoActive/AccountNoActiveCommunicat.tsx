import React from "react";
import Button from "../../atoms/buttons/Button";


type AccountNoActiveCommunicatProps = {
    message: string;
    send: () => void;
}

const AccountNoActiveCommunicat = ({message, send}: AccountNoActiveCommunicatProps) => {
    return (
    <div>
        <div>Konto nie aktywne</div>
        <div>Sprawdź folder spam na poczcie elektronicznej lub wyślij link aktywacyjny ponownie </div>
        <Button buttonType="button" className="" onClick={send} buttonTittle="Wyślij" />
        <div>{message}</div>
    </div>
    );
}

export default AccountNoActiveCommunicat;