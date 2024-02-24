import React,  {useState, SyntheticEvent} from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../atoms/buttons/Button";
import SignInInput from "../../atoms/inputs/SignInInput";
import SignInLabel from "../../atoms/labels/SignInLabel";

const SetNewPasswordForm = () => {

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
            method: 'PATCH',
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
        <div className="set-new-password-form-div-wrapper">
            <form onSubmit={submit}>
                <h6>Przywracanie hasła</h6>
                <SignInLabel context='Podaj nowe hasło:' />
                <SignInInput inputType="password" className="signin-input" onChange={handlePassword} />
                <SignInLabel context='Powtórz nowe hasło:' />
                <SignInInput inputType="password" className="signin-input" onChange={handleConfirmPassword} />
                {message && <div className='error-message-div-wrapper'>{message}</div>}
                <Button buttonType="submit" className="set-new-password-button-wrapper" onClick={()=>{}} buttonTittle="Ustaw hasło" />
            </form>
        </div>
    )
}

export default SetNewPasswordForm;