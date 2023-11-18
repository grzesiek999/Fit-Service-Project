import React, { useContext, useState } from "react";
import Button from "../../atoms/buttons/Button";
import { UserAuth } from "../../../context/UserDataContext";


const AccountNoActiveCommunicat = () => {

    const {user} = useContext(UserAuth);
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState(user?.email);

    const send = async () => {

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
    <div>
        <div>Konto nie aktywne</div>
        <div>Sprawdź folder spam na poczcie elektronicznej lub wyślij link aktywacyjny ponownie </div>
        <Button buttonType="button" className="" onClick={send} buttonTittle="Wyślij" />
        <div>{message}</div>
    </div>
    );
}

export default AccountNoActiveCommunicat;