import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SESSION } from "../../../constant/Session";
import { UserAuth } from "../../../context/UserDataContext";
import { setUserWithExpiry } from "../../../utils/LocalStorageManagment";


const AccountConfirmCommunicat = () => {

    const {sigIn} = useContext(UserAuth);
    const {uid, token} = useParams();
    const [actived, setActived] = useState<boolean>(false);
    const [activeMessage, setActiveMessage] = useState('');

    const fetchUser = async () =>{
        const response = await fetch('http://localhost:8000/api/user', {
          method: 'GET',
          headers: {'Content-Type': 'application/json'},
          credentials: 'include',
        });
        
        const content = await response.json();
        if(content.detail === 'Unauthenticated!'){}
        else{
          sigIn(setUserWithExpiry(SESSION.USER, content, SESSION.TIME));
        }
    }

    const confirmEmail = async (uid:string | undefined, token:string | undefined) => {
        if(uid && token){
            const response = await fetch('http://localhost:8000/api/confirm_email', {
                method: 'PATCH',
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
                    setActived(true);
                    fetchUser();
                }
            }
            else{
                console.error('response error');
            }
        }
    }

    useEffect(()=> {
        confirmEmail(uid, token);
    }, [activeMessage]);


    if(actived) {
        return(
            <div className="account-confirm-communicat-div-wrapper">
                <span className="succesfull-span-information">Twoje konto zostało zaaktywowane!</span>
            </div>
        );
    }
    else {
        return(
            <div className="account-confirm-communicat-div-wrapper">
                <span className="fault-span-information">Nieważny link aktywacyjny!</span>
            </div>
        );
    }
}

export default AccountConfirmCommunicat;