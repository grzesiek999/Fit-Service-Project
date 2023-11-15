import React, {useContext, useState} from "react";
import AccountNoActiveCommunicat from "../organisms/AccountNoActive/AccountNoActiveCommunicat";
import { UserAuth } from "../../context/UserDataContext";


const AccountNoActivePageTemplate = () => {

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
       <AccountNoActiveCommunicat message={message} send={send} />
    );
}

export default AccountNoActivePageTemplate;