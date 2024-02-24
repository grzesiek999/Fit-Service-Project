import React, {useState, SyntheticEvent} from "react";
import Button from "../../atoms/buttons/Button";
import SignInInput from "../../atoms/inputs/SignInInput";
import SignInLabel from "../../atoms/labels/SignInLabel";

const RestorePasswordFormDiv = () => {

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
      
    const handleEmail = (email :string) => {
      setEmail(email);
    };
  
    const submit = async (e: SyntheticEvent) => {
      e.preventDefault();
  
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
      <div className="restore-password-form-div">
        <form onSubmit={submit}>
          <h6>Przypomnij hasło</h6>
          <SignInLabel context='Podaj adres email:' />
          <SignInInput inputType="email" className="signin-input" onChange={handleEmail} />
          <p>W celu przypomnienia hasła, zostanie wysłany na twój adres email link resetujący hasło.</p>
          <Button buttonType="submit" className="restore-password-button-wrapper" onClick={()=>{}} buttonTittle="Wyślij" />
        </form>
        {message && <div className="error-message-div-wrapper">{message}</div>}
      </div>
    );
  }

  export default RestorePasswordFormDiv;