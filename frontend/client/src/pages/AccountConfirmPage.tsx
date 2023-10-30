import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";


const AccountConfirmPage = () =>{

    const {uid, token} = useParams();
    const [active, setActive] = useState<boolean>(false);

    useEffect(()=> {
        const confirmEmail = async (uid:string | undefined, token:string | undefined) => {
            if(uid && token){
                try{
                    const response = await fetch('http://localhost:8000/api/confirm_email', {
                        method: 'POST',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify({
                            uid,
                            token
                        })
                    });
                    if(response.ok){
                        console.log('konto aktywowane')
                        setActive(true);

                    }
                    else{
                        console.log('blad aktywacji konta');
                    }

                } catch (error){
                    console.log('request error');
                }
            }
        }
        confirmEmail(uid, token);
    }, [uid, token]);

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
                Twoje konto zostało nie zaostało zaaktywowane!
            </div>
        );
    }
}

export default AccountConfirmPage;