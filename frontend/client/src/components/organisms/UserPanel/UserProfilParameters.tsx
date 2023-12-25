import React, { useContext, useEffect, useState } from "react";
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

const UserProfilParameters = () => {

    const {user} = useContext(UserAuth);
    const [user_id, setID] = useState(user?.id);

    const fetchParameters = async () => {
        const response =  await fetch('http://localhost:8000/api/parameters/users_parameters', {
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
                console.log(content);
            }
        }
    }

    useEffect (() => {
        fetchParameters();
    }, []);

    return (
        <div>
            
        </div>
    );
}

export default UserProfilParameters;