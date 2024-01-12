import React, { useState } from "react";
import Button from "../../atoms/buttons/Button";
import { SESSION } from "../../../constant/Session";
import { getUserWithExpiry } from "../../../utils/LocalStorageManagment";
import "../../../styles/index.scss";


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
        const response = await fetch('http://localhost:8000/api/parameters/all_users_parameters',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                user_id
            })
        });
        if(response.ok){
            const results = await response.json();
            setHistoryParameters(results);
        }
        else {console.log(response.statusText);}
    }

    return (
        <div className="parameters-history-div-wrapper">
            <Button buttonType="button" className="show-history-button-wrapper" onClick={showHistory} buttonTittle="Historia"/>
            <ul>
                {historyParameters.map((parameters: Parameters) => (
                    <li key={parameters.id}>
                        <ul>
                            <li>{new Date(parameters.created_at).toLocaleDateString()}</li>
                            <li>{parameters.height}</li>
                            <li>{parameters.weight}</li>
                            <li>{parameters.bmi}</li>
                            <li>{parameters.biceps}</li>
                            <li>{parameters.chest}</li>
                            <li>{parameters.arms}</li>
                            <li>{parameters.belly}</li>
                            <li>{parameters.thighs}</li>
                            <li>{parameters.calves}</li>
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ParametersHistory;