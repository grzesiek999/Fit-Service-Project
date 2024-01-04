import React, {useEffect, useState } from "react";
import { getUserWithExpiry } from "../../../utils/LocalStorageManagment";
import { SESSION } from "../../../constant/Session";
import "../../../styles/index.scss";
import Button from "../../atoms/buttons/Button";
import ParametersHistory from "../../molecules/UserPanel/ParametersHistory";
import { useNavigate } from "react-router-dom";
import { ROUTER_PATH } from "../../../router/RouterPath";



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

const UserProfilContent = () => {

    const [user_id, setID] = useState(getUserWithExpiry(SESSION.USER).id);
    const [avaibleParameters, setAvaibleParameters] = useState<Parameters | null>(null);
    const navigate = useNavigate();


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
            if(content.message === 'user dont have any parameters') { return navigate(ROUTER_PATH.ADD_PARAMETERS); }
            else { setAvaibleParameters(content); }
        }
    }

    useEffect(() => {
        fetchParameters();
    }, []);

    const addParameters = () => { return navigate(ROUTER_PATH.ADD_PARAMETERS); }

    return (
        <div className="user-profil-content-div-wrapper">
            <div className="user-parameters-div-wrapper">
                <div>
                    <div>{avaibleParameters?.age}</div>
                    <div>{avaibleParameters?.height}</div>
                    <div>{avaibleParameters?.weight}</div>
                </div>
                <div className="user-parameters-model-div-wrapper">
                    <img src="/public/images/model.PNG" alt="model image error" className="model-image" />
                    <div className="biceps-parameters-div-wrapper">{avaibleParameters?.biceps} cm</div>
                    <div className="chest-parameters-div-wrapper">{avaibleParameters?.chest} cm</div>
                    <div className="arms-parameters-div-wrapper">{avaibleParameters?.arms} cm</div>
                    <div className="belly-parameters-div-wrapper">{avaibleParameters?.belly} cm</div>
                    <div className="thighs-parameters-div-wrapper">{avaibleParameters?.thighs} cm</div>
                    <div className="calves-parameters-div-wrapper">{avaibleParameters?.calves} cm</div>
                    <div className="bmi-parameters-div-wrapper">{avaibleParameters?.bmi}</div>
                </div>
                <Button buttonType="button" className="p" onClick={addParameters} buttonTittle="Dodaj parametry" />
                <ParametersHistory />
            </div>
        </div>
    );
}

export default UserProfilContent;