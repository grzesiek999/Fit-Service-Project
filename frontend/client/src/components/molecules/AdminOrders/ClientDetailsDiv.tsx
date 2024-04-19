import React, { useEffect, useState } from "react";
import upperFirstLetter from "../../../utils/UpperFirstLetter";
import { calculateAge } from "../../../utils/CalculateAge";
import UserMessagesDiv from "./UserMessagesDiv";


interface User {
    id: number; 
    last_login: string; 
    email: string; 
    password: string; 
    name: string; 
    surname: string; 
    birthday: string; 
    created_at: string; 
    is_active: boolean; 
    is_admin: boolean;
}

interface Parameters {
    id: number,
    user_id: number,
    created_at: string,
    sex: number,
    height: number,
    weight: number,
    bmi: number,
    physic_activity: number,
    chest: number,
    belly: number,
    biceps: number,
    arms: number,
    thighs: number,
    calves: number
}


type OrderDetailsDivProps = {
    user_id: number | undefined
}

const ClientDetailsDiv = ({user_id}: OrderDetailsDivProps) => {

    const [user, setUser] = useState<User>();
    const [historyParameters, setHistoryParameters] = useState<Parameters[]>([]);


    const fetchUser = async () => {
        const response = await fetch(`http://localhost:8000/api/getby_userid?user_id=${user_id}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        });
        if(response.ok){
            const content = await response.json();
            setUser(content);
        }
    }

    const showHistory = async () =>{
        const url = `http://localhost:8000/api/parameters/all_users_parameters?user_id=${user_id}`
        const response = await fetch(url, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        });
        if(response.ok){
            const results = await response.json();
            setHistoryParameters(results);
        }
        else {console.log(response.statusText);}
    }

    useEffect (()=>{
        fetchUser();
        showHistory();
    }, [user_id])

    return(
        <div className="client-details-div-wrapper">
            <span className="client-title-span">Użytkownik: {upperFirstLetter(user?.name) + ' ' + upperFirstLetter(user?.surname)}</span>
            <UserMessagesDiv user_id={user_id} />
            <span className="client-details-span">Parametry użytkownika:</span>
            <ul id="l1">
                {historyParameters.map((parameters: Parameters) => (
                    <li id='l2' key={parameters.id}>
                        <ul>
                            <li><p className="parameters-date">{new Date(parameters.created_at).toLocaleDateString()}</p></li>
                            <li><p>Wiek:</p><p className="p-ph">{calculateAge(user?.birthday)}</p></li>
                            <li><p>Wzrost:</p><p className="p-ph">{parameters.height} cm</p></li>
                            <li><p>Waga:</p><p className="p-ph">{parameters.weight} kg</p></li>
                            <li><p>BMI:</p><p className="p-ph">{parameters.bmi.toFixed(2)}</p></li>
                            <li><p>Biceps:</p><p className="p-ph">{parameters.biceps} cm</p></li>
                            <li><p>Klata:</p><p className="p-ph">{parameters.chest} cm</p></li>
                            <li><p>Przedrammie:</p><p className="p-ph">{parameters.arms} cm</p></li>
                            <li><p>Brzuch:</p><p className="p-ph">{parameters.belly} cm</p></li>
                            <li><p>Uda:</p><p className="p-ph">{parameters.thighs} cm</p></li>
                            <li><p>Łydki:</p><p className="p-ph">{parameters.calves} cm</p></li>
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );

}

export default ClientDetailsDiv;