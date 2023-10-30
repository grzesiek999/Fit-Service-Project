import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";


const AccountConfirmPageTemplate = () =>{

    const {uid, token} = useParams();
    const [active, setActive] = useState<boolean>(false);
    const [activeMessage, setActiveMessage] = useState('');

    useEffect(()=> {
        const confirmEmail = async (uid:string | undefined, token:string | undefined) => {
            if(uid && token){
                const response = await fetch('http://localhost:8000/api/confirm_email', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        uid,
                        token
                    })
                });
                if(response.ok){
                    const content = await response.json();
                    setActiveMessage(content.message);
                    if(activeMessage === "activation successful"){
                        setActive(true);
                    }
                }
                else{
                    console.error('response error');
                }
            }
        }
        confirmEmail(uid, token);
    }, [uid, token, activeMessage, active]);

    if(active === true){
        return(
            <div>
                Twoje konto zostało zaaktywowane!
            </div>
        );
    }
    else{
        return(
            <div>
                Nieważny link aktywacyjny!
            </div>
        );
    }
}

export default AccountConfirmPageTemplate;