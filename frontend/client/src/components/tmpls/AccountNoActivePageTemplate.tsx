import React, {useState} from "react";
import Button from "../atoms/buttons/Button";


const AccountNoActiveTemplatePage = ({email}: {email: string}) => {

    const [message, setMessage] = useState('');

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

export default AccountNoActiveTemplatePage;