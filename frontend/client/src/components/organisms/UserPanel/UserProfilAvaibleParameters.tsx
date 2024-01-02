import React, {useEffect, useState } from "react";
import { getUserWithExpiry } from "../../../utils/LocalStorageManagment";
import { SESSION } from "../../../constant/Session";
import AddParametersForm from "./AddParametersForm";


interface Parameters {
    id: number,
    user_id: number,
    created_at: string,
    sex: number,
    age: number,
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

const UserProfilAvaibleParameters = () => {

    const [user_id, setID] = useState(getUserWithExpiry(SESSION.USER).id);
    const [avaibleParameters, setAvaibleParameters] = useState<Parameters | null>(null);
    const [existParatmetrs, setExistParameters] = useState<boolean>(false);

    const fetchParameters = async () => {
        const response =  await fetch('http://localhost:8000/api/parameters/last_users_parameters', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                user_id
            })
        });
        if(response.ok) {
            const content = await response.json();
            if(content.message === 'user dont have any parameters'){}
            else {
                setExistParameters(true); 
                setAvaibleParameters(content); 
            }
        }
    }

    useEffect(() => {
        fetchParameters();
    }, []);


    return (
        <div>
            {
                existParatmetrs ? 
                <div className="user-parameters-div-wrapper">
                    <div>
                        <div>{avaibleParameters?.age}</div>
                        <div>{avaibleParameters?.height}</div>
                        <div>{avaibleParameters?.weight}</div>
                    </div>
                    <div className="user-parameters-model-div-wrapper">
                        <div className="biceps-parameters-div-wrapper">{avaibleParameters?.biceps} cm</div>
                        <div className="chest-parameters-div-wrapper">{avaibleParameters?.chest} cm</div>
                        <div className="arms-parameters-div-wrapper">{avaibleParameters?.arms} cm</div>
                        <div className="belly-parameters-div-wrapper">{avaibleParameters?.belly} cm</div>
                        <div className="thighs-parameters-div-wrapper">{avaibleParameters?.thighs} cm</div>
                        <div className="calves-parameters-div-wrapper">{avaibleParameters?.calves} cm</div>
                        <div className="bmi-parameters-div-wrapper">{avaibleParameters?.bmi}</div>
                    </div>
                </div>
                :
                <AddParametersForm />
            }
        </div>
    );
}

export default UserProfilAvaibleParameters;