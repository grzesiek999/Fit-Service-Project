import React, {useState, SyntheticEvent} from "react";
import EmailRegisterInput from "../atoms/inputs/EmailRegisterInput";
import Button from "../atoms/buttons/Button";


const RestorePasswordPageTemplate = () => {

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
    <div>
      <form onSubmit={submit}>
        <h2>Odzyskaj hasło</h2>
        <EmailRegisterInput onEmailChange={handleEmail} />
        <Button buttonType="submit" className="" onClick={()=>{}} buttonTittle="Resetuj hasło" />
      </form>
      {message && <div>{message}</div>}
    </div>
  );
}

export default RestorePasswordPageTemplate;