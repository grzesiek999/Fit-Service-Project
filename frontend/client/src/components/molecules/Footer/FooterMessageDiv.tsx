import React, { useState } from "react";
import Button from "../../atoms/buttons/Button";
import SignInInput from "../../atoms/inputs/SignInInput";
import MessageTextArea from "../../atoms/inputs/MessageTextArea";


const FooterMessageDiv = () => {

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleEmail = (email :string) => {
        setEmail(email);
    };

    const handleMessage = (mess :string) => {
        setMessage(mess);
    };

    const sendMessage = async () => {

    }

    return(
        <div className="footer-message-div-wrapper">
            <form onSubmit={sendMessage}>
                <span className="message-span">Chcesz dowiedzieć się więcej ?</span>
                <SignInInput inputType="email" className="email-input-to-message" onChange={handleEmail} />
                <MessageTextArea className="text-input-to-message" onChange={handleMessage} />
                <Button buttonType="submit" className="send-message-button-wrapper" onClick={()=>{}} buttonTittle="Wyślij" />
            </form>
        </div>
    );
}

export default FooterMessageDiv