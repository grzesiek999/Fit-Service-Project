import React, {useEffect, useState } from "react";
import { getUserWithExpiry } from "../../../utils/LocalStorageManagment";
import { SESSION } from "../../../constant/Session";
import "../../../styles/index.scss";
import Button from "../../atoms/buttons/Button";
import ParametersHistory from "../../molecules/UserPanel/ParametersHistory";
import { useNavigate } from "react-router-dom";
import { ROUTER_PATH } from "../../../router/RouterPath";
import AddParametersForm from "./AddParametersForm";
import { calculateAge } from "../../../utils/CalculateAge";
import EditParametersForm from "./EditParametersForm";



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

const UserProfilContent = () => {

    const user_id =getUserWithExpiry(SESSION.USER).id;
    const [avaibleParameters, setAvaibleParameters] = useState<Parameters | null>(null);
    const [displayAddPar, setDisplayAddPar] = useState<boolean>(false);
    const [displayEditPar, setDisplayEditPar] = useState<boolean>(false);
    const navigate = useNavigate();
    const birthday = getUserWithExpiry(SESSION.USER).birthday;
    const age = calculateAge(birthday);



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



    return (
        <div className="user-profil-content-div-wrapper">
            <div className="user-parameters-div-wrapper">
                <Button buttonType="button" className="edit-parameters-button-wrapper" onClick={()=>{setDisplayEditPar(true);}} buttonTittle="Edytuj parametry"/>
                {displayEditPar ? <EditParametersForm parameters_id={avaibleParameters?.id} isSex={avaibleParameters?.sex} /> : null}
                {displayEditPar ? <Button buttonType="button" className="edit-parameters-button-wrapper" onClick={()=>{setDisplayEditPar(false);}} buttonTittle="Zamknij"/> : null}
                <div>
                    <div>{age}</div>
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
                <ParametersHistory />
                <Button buttonType="button" className="p" onClick={()=>{setDisplayAddPar(true);}} buttonTittle="Dodaj parametry do historii" />
                {displayAddPar ? <AddParametersForm isSex={avaibleParameters?.sex} /> : null}
                {displayAddPar ? <Button buttonType="button" className="p" onClick={()=>{setDisplayAddPar(false);}} buttonTittle="Zamknij" /> : null}
            </div>
        </div>
    );
}

export default UserProfilContent;