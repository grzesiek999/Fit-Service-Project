import React, { SyntheticEvent, useState } from "react";
import Button from "../../atoms/buttons/Button";




const AddParametersForm = () =>  {

    const [message, setMessage] = useState<string>('');
    const [user_id, setUser_id] = useState<number>();
    const [sex, setSex] = useState<number>();
    const [age, setAge] = useState<number>();
    const [height, setHeight] = useState<number>();
    const [weight, setWeight] = useState<number>();
    const [physic_activity, setPhysic_activity] = useState<number>();
    const [chest, setChest] = useState<number>();
    const [belly, setBelly] = useState<number>();
    const [biceps, setBiceps] = useState<number>();
    const [arms, setArms] = useState<number>();
    const [thighs, setThighs] = useState<number>();
    const [calves, setCales] = useState<number>();
    
    const addParameters = async (e: SyntheticEvent) =>{
        e.preventDefault();

        const response = await fetch('localhost:8000/api/parameters/add', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({

            })
        });
    };


    return (
        <div>
            <form onSubmit={addParameters}>
                <Button buttonType="submit" className="add-parameters-button-wrapper" onClick={()=>{}} buttonTittle="Dodaj" />
            </form>
            {message && <div>{message}</div>}
        </div>
    );
}

export default AddParametersForm;