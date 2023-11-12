import React, { useState } from "react";
import Button from "../atoms/buttons/Button";


type UserSettingsPageTemplateProps = {
    email: string;
}

const UserSettingsPageTemplate = ({email}: UserSettingsPageTemplateProps) => {

    const [message, setMessage] = useState('');

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
            <div>Twój email {email}</div>
            <Button buttonType="button" className="" onClick={changePassword} buttonTittle="Zmień hasło" />
            <div>{message}</div>
        </div>
    );
}

export default UserSettingsPageTemplate;