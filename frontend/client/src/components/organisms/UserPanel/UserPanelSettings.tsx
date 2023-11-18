import React, {useContext, useState} from "react";
import Button from "../../atoms/buttons/Button";
import { UserAuth } from "../../../context/UserDataContext";



const UserPanelSettings = () => {

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
            setMessage('Na podany adres email został wysłany link resetujący hasło')
        }
        else {
            if(response.status === 403){
                setMessage('Podano nieprawiłowy adres email');
            }
            else {
                console.error('Error', response.status, response.statusText);
            }
        }
    }

    return (
        <div>
            <div>Twój email {user?.email}</div>
            <Button buttonType="button" className="" onClick={changePassword} buttonTittle="Zmień hasło" />
            <div>{message}</div>
        </div>
    );
}

export default UserPanelSettings;