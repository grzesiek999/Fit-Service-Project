import React, { useEffect, useState } from "react";
import NoDietInformation from "../../../molecules/UserPanel/MyDiets/NoDietInformation";
import { getUserWithExpiry } from "../../../../utils/LocalStorageManagment";
import { SESSION } from "../../../../constant/Session";
import DietNoActiveInformation from "../../../molecules/UserPanel/MyDiets/DietNoActiveInformation";
import DietIsEnd from "../../../molecules/UserPanel/MyDiets/DietIsEnd";
import MyDietPlan from "../../../molecules/UserPanel/MyDiets/MyDietPlan";



const MyDietsOrganism = () => {

    const user_id = getUserWithExpiry(SESSION.USER).id; 
    const [isOrder, setIsOrder] = useState<boolean>(false);
    const [isActive, setIsActive] = useState<boolean>(false);
    const [isLastDay, setIsLastDay] = useState<boolean>(false);
    const [isEnd, setIsEnd] = useState<boolean>(false);

    const fetchOrder = async () => {
        
        const response = await fetch(`http://localhost:8000/api/orders/get?user_id=${user_id}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        });
        if(response.ok) {
            const order_content = await response.json();
            if (order_content.payment_status){
                setIsOrder(true);
                if(order_content.expiry_date === null) {setIsActive(false);}
                else {
                    setIsActive(true);
                    let expiry_date = new Date(order_content.expiry_date);
                    const today = new Date();
                    if(expiry_date === today) {setIsLastDay(true);}
                    else if (expiry_date < today) {return null;}
                    else {setIsEnd(true);}
                }
            }
            else {return null;}
        } else {console.log(response.status, response.statusText);}
    }


    useEffect(()=>{
        fetchOrder();
    }, []);

    
    return (
        <div className="my-diets-organism-div-wrapper">
            {isOrder ?
                <>
                    {isActive ?
                        <>
                            {isEnd ?
                                <MyDietPlan isLastDay={isLastDay} />:
                                <DietIsEnd />
                            }
                        </>:
                        <DietNoActiveInformation />
                    }
                </>:
                <NoDietInformation />
            }
        </div>
    );
}

export default MyDietsOrganism;