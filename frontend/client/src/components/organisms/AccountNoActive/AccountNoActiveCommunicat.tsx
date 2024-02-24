import React, { useState } from "react";
import Button from "../../atoms/buttons/Button";
import { getUserWithExpiry } from "../../../utils/LocalStorageManagment";
import { SESSION } from "../../../constant/Session";


const AccountNoActiveCommunicat = () => {

    const [message, setMessage] = useState('');
    const [email, setEmail] = useState(getUserWithExpiry(SESSION.USER).email);

    const sendEmailAgain = async () => {

        const response = await fetch('http://localhost:8000/api/send_email_again', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({
              email
            })
        });
        if(response.ok){
            setMessage('Wysłano link aktywacyjny');
        }
        else{
            console.error('sending activation link error')
        }
    }

    return (
        <div className="account-no-active-communicat-div-wrapper">
            <span>Konto nie zweryfikowane !</span>
            <p>Sprawdź folder spam na poczcie elektronicznej lub wyślij link aktywacyjny ponownie.</p>
            <Button buttonType="button" className="send-email-agian-button-wrapper" onClick={sendEmailAgain} buttonTittle="Wyślij" />
            <div className="sended-status-div-message-wrapper">{message}</div>
        </div>
    );
}

export default AccountNoActiveCommunicat;