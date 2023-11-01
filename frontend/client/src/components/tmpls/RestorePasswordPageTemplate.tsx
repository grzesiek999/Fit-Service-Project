import React, {useState} from "react";
import EmailRegisterInput from "../atoms/inputs/EmailRegisterInput";


const RestorePasswordPageTemplate = () => {

    const [email, setEmail] = useState('');
    
  const handleEmail = (email :string) => {
    setEmail(email);
  };

    return (
        <div>
            <div>Odzyskaj hasło</div>
            <EmailRegisterInput onEmailChange={handleEmail} />
        </div>
    );
}

export default RestorePasswordPageTemplate;