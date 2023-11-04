import React, {useState, SyntheticEvent} from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../atoms/buttons/Button";
import SignInInput from "../atoms/inputs/SignInInput";


const SetNewPasswordPageTemplate = () => {

    const {uid, token} = useParams();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();


    const handlePassword = (password :string) => {
        setPassword(password);
    };
    
    const handleConfirmPassword = (password :string) => {
        setConfirmPassword(password);
    };
    
    const submit = async (e: SyntheticEvent) =>{
        e.preventDefault();

        if(password === confirmPassword) {
          const response = await fetch('http://localhost:8000/api/set_new_password', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                uid,
                token,
                password
            })
          })
          if(response.ok){
            return navigate('/password_changed');
          }
          else{
            console.error('Error', response.status, response.statusText);
            return setMessage('Error');
          }
        }
        else {
          return setMessage('Podane hasła nie są takie same');
        }
    }
    

    return(
        <div>
            <form onSubmit={submit}>
                <SignInInput inputType="password" onChange={handlePassword} />
                <SignInInput inputType="password" onChange={handleConfirmPassword} />
                <Button buttonType="submit" className="" onClick={()=>{}} buttonTittle="Ustaw nowe hasło" />
            </form>
            {message && <div>{message}</div>}
        </div>
    );
}

export default SetNewPasswordPageTemplate