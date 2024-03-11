import React, {useContext, useState} from "react";
import { UserAuth } from "../../../../context/UserDataContext";
import Button from "../../../atoms/buttons/Button";



const ChangePassword = () => {

    const {user} = useContext(UserAuth);   
    const [message, setMessage] = useState('');
    const email = user?.email;

    const changePassword = async () => {
        const response = await fetch('http://localhost:8000/api/send_password_restore', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                email,
            })
        });
        if(response.ok){
            setMessage('Na adres email: '+email+' został wysłany link resetujący hasło.')
        }
        else {
            if(response.status === 403){
                setMessage('Podano nieprawiłowy adres email !');
            }
            else {
                console.error('Error', response.status, response.statusText);
            }
        }
    }

    return (
        <div className="change-password-option-div-wrapper">
            <Button buttonType="button" className="change-password-button-wrapper" onClick={changePassword} buttonTittle="Resetuj hasło" />
            <span className="option-span">{message}</span>
        </div>
    );
}

export default ChangePassword;