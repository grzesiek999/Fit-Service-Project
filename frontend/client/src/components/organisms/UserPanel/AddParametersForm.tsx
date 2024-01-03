import React, { SyntheticEvent, useState } from "react";
import Button from "../../atoms/buttons/Button";
import { ROUTER_PATH } from "../../../router/RouterPath";
import { useNavigate } from "react-router-dom";
import AddParameterInput from "../../atoms/inputs/AddParametersInput";




const AddParametersForm = () =>  {

    const navigate = useNavigate();
    const [message, setMessage] = useState<string>('');
    const [user_id, setUser_id] = useState<number>();
    const [sex, setSex] = useState<number>(0);
    const [age, setAge] = useState<number | null>(null);
    const [height, setHeight] = useState<number>();
    const [weight, setWeight] = useState<number>();
    const [physic_activity, setPhysic_activity] = useState<number>();
    const [chest, setChest] = useState<number>();
    const [belly, setBelly] = useState<number>();
    const [biceps, setBiceps] = useState<number>();
    const [arms, setArms] = useState<number>();
    const [thighs, setThighs] = useState<number>();
    const [calves, setCales] = useState<number>();

    const handleSex = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSex(parseInt(e.target.value));
      };

    const handleAge = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.value === '') { setAge(null); }
        else {
            const inputAge = parseInt(e.target.value);
            setAge(inputAge);
        }
    }
    
    const addParameters = async (e: SyntheticEvent) =>{
        e.preventDefault();

        const response = await fetch('http://localhost:8000/api/parameters/add', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                user_id,
                sex,
                age,
                height,
                weight,
                physic_activity,
                chest,
                belly,
                biceps,
                arms, 
                thighs,
                calves
            })
        });
        if(response.ok) { return navigate(ROUTER_PATH.USER_PROFIL); }
        else { setMessage(response.statusText) }
    };


    return (
        <div>
            <form onSubmit={addParameters}>
                <AddParameterInput inputType="sex" value={sex} onChange={handleSex} />
                <AddParameterInput inputType="int" value={age} onChange={handleAge}/>
                <Button buttonType="submit" className="add-parameters-button-wrapper" onClick={()=>{}} buttonTittle="Dodaj" />
            </form>
            {message && <div>{message}</div>}
        </div>
    );
}

export default AddParametersForm;