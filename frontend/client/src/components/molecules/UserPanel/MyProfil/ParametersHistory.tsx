import React, { useState } from "react";
import Button from "../../../atoms/buttons/Button";
import { SESSION } from "../../../../constant/Session";
import { getUserWithExpiry } from "../../../../utils/LocalStorageManagment";
import { IoIosArrowDown } from "react-icons/io";



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

const ParametersHistory = () => {

    const [user_id, setID] = useState(getUserWithExpiry(SESSION.USER).id);
    const [historyParameters, setHistoryParameters] = useState<Parameters[]>([]);

    const showHistory = async () =>{
        const url = `http://localhost:8000/api/parameters/all_users_parameters?user_id=${user_id}`
        const response = await fetch(url, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        });
        if(response.ok){
            const results = await response.json();
            setHistoryParameters(results);
            window.scrollTo({ top: 650, behavior: 'smooth' });
        }
        else {console.log(response.statusText);}
    }

    return (
        <div className="parameters-history-div-wrapper">
            <span className="show-history-span-wrapper" onClick={showHistory}>Pokaz historie parametrów<IoIosArrowDown /></span>
            <ul id="l1">
                {historyParameters.map((parameters: Parameters) => (
                    <li id='l2' key={parameters.id}>
                        <ul>
                            <li><p className="parameters-date">{new Date(parameters.created_at).toLocaleDateString()}</p></li>
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

export default ParametersHistory;