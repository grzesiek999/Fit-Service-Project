import React, { useContext, useEffect, useState } from "react";
import Button from "../../atoms/buttons/Button";
import { UserAuth } from "../../../context/UserDataContext";


interface Parameters {
    id: number,
    user_id: number,
    created_at: string,
    height: number,
    weight: number,
    bmi: number,
    physic_activity: number,
    chest: number,
    belly: number,
    biceps: number,
    arms: number,
    thighs: number,
    calves: Number
}

const UserProfilParametersHistory = () => {

    const {user} = useContext(UserAuth);
    const [user_id, setID] = useState(user?.id);

    const fetchParameters = async () => {
        const response =  await fetch('http://localhost:8000/api/parameters/all_users_parameters', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                user_id
            })
        });
        if(response.ok) {
            const content = await response.json();
            if(content.message === 'user dont have any parameters'){ }
            else { 
            }
        }
    }

    useEffect(() => {
        setID(user?.id);
    }, [user]);

    return (
        <div>
            <Button buttonType="button" className="show-parameters-history-button-wrapper" onClick={fetchParameters} buttonTittle="Pokaz historie" />       
        </div>
    );
}

export default UserProfilParametersHistory;