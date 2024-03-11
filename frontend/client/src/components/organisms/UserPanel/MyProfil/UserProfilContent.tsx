import React, {useEffect, useState } from "react";
import { getUserWithExpiry } from "../../../../utils/LocalStorageManagment";
import { SESSION } from "../../../../constant/Session";
import Button from "../../../atoms/buttons/Button";
import { useNavigate } from "react-router-dom";
import { ROUTER_PATH } from "../../../../router/RouterPath";
import AddParametersForm from "./AddParametersForm";
import { calculateAge } from "../../../../utils/CalculateAge";
import EditParametersForm from "./EditParametersForm";
import ParametersHistory from "../../../molecules/UserPanel/MyProfil/ParametersHistory";


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
        const url = `http://localhost:8000/api/parameters/last_users_parameters?user_id=${user_id}`
        const response =  await fetch(url, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
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
        <div className="user-profil-div-wrapper">
            <div className="edit-parameters-div-wrapper">
                {displayEditPar ? null : <Button buttonType="button" className="edit-parameters-button-wrapper" onClick={()=>{setDisplayEditPar(true);}} buttonTittle="Edytuj"/>}
                {displayEditPar ? <EditParametersForm parameters_id={avaibleParameters?.id} isSex={avaibleParameters?.sex} /> : null}
                {displayEditPar ? <Button buttonType="button" className="edit-parameters-button-wrapper" onClick={()=>{setDisplayEditPar(false);}} buttonTittle="Zamknij"/> : null}
            </div>
            <div className="user-main-parameters-div-wrapper">
                <div className="height-parameters-div-wrapper">
                    <div className="main-parameter-title-div-wrapper">Wzrost</div>
                    <div className="main-parameter-value-div-wrapper">{avaibleParameters?.height}</div>
                </div>
                <div className="age-parameters-div-wrapper">
                    <div className="main-parameter-title-div-wrapper">Wiek</div>
                    <div className="main-parameter-value-div-wrapper">{age}</div>
                </div>
                <div className="weight-parameters-div-wrapper">
                    <div className="main-parameter-title-div-wrapper">Waga</div>
                    <div className="main-parameter-value-div-wrapper">{avaibleParameters?.weight}</div>
                </div>
            </div>
            <div className="user-parameters-model-div-wrapper">
                <div>
                    <div className="biceps-parameters-div-wrapper">
                        <div className="parameter-title-div-wrapper">BICEPS</div>
                        <div className="parameter-value-div-wrapper">{avaibleParameters?.biceps} cm</div>
                    </div>
                    <div className="arms-parameters-div-wrapper">
                        <div className="parameter-title-div-wrapper">PRZEDRAMIĘ</div>
                        <div className="parameter-value-div-wrapper">{avaibleParameters?.arms} cm</div>
                    </div>
                    <div className="calves-parameters-div-wrapper">
                        <div className="parameter-title-div-wrapper">ŁYDKA</div>
                        <div className="parameter-value-div-wrapper">{avaibleParameters?.arms} cm</div>
                    </div>
                </div>
                <img src="/public/images/model.jpeg" alt="model image error" className="model-image" />
                <div>
                    <div className="chest-parameters-div-wrapper">
                        <div className="parameter-title-div-wrapper">KLATKA</div>
                        <div className="parameter-value-div-wrapper">{avaibleParameters?.chest} cm</div>
                    </div>
                    <div className="belly-parameters-div-wrapper">
                        <div className="parameter-title-div-wrapper">BRZUCH</div>
                        <div className="parameter-value-div-wrapper">{avaibleParameters?.belly} cm</div>
                    </div>
                    <div className="thighs-parameters-div-wrapper">
                        <div className="parameter-title-div-wrapper">UDO</div>
                        <div className="parameter-value-div-wrapper">{avaibleParameters?.thighs} cm</div>
                    </div>
                </div>
            </div>
            <div className="bmi-parameters-div-wrapper">
                <div className="bmi-title-div-wrapper">BMI</div>
                <div className="bmi-value-div-wrapper">{avaibleParameters?.bmi.toFixed(2)}</div>
            </div>
            <div className="add-parameters-div-wrapper">
                {displayAddPar ? null : <Button buttonType="button" className="add-parameters-button-wrapper" onClick={()=>{setDisplayAddPar(true);}} buttonTittle="Dodaj" />}
                {displayAddPar ? <AddParametersForm isSex={avaibleParameters?.sex} /> : null}
                {displayAddPar ? <Button buttonType="button" className="p" onClick={()=>{setDisplayAddPar(false);}} buttonTittle="Zamknij" /> : null}
            </div>
            <ParametersHistory />
        </div>
    );
}

export default UserProfilContent;