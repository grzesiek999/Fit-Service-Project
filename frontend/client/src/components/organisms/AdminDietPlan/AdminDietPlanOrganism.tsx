import React, { SyntheticEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CreateDietsInputs from "../../atoms/inputs/CreateDietInputs";
import MessageTextArea from "../../atoms/inputs/MessageTextArea";
import Button from "../../atoms/buttons/Button";
import { DefaultizedPieValueType } from '@mui/x-charts';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';


const AdminDietPlanOrganism = () => {

    const navigate = useNavigate();
    const {diet_id, user_id} = useParams();
    const [describe, setDescribe] = useState<string | null>();
    const [kcal, setKcal] = useState<number | null>();
    const [proteins, setProteins] = useState<number | null>(null);
    const [carbohydrates, setCarbohydrates] = useState<number | null>(null);
    const [fats, setFats] = useState<number | null>(null);
    const [fiber, setFiber] = useState<number | null>(null);
    const [fluids, setFluids] = useState<number | null>(null);

    let data = [
        { label: 'Białko', value: proteins ? proteins : 0.00001, color: '#4472c4' },
        { label: 'Węglowodany', value: carbohydrates ? carbohydrates : 0.00001, color: '#ed7d30' },
        { label: 'Tłuszcze', value: fats ? fats : 0.00001, color: '#fbc003' },
    ];

    const sizing = {
        margin: { right: 200, },
        width: 500,
        height: 300,
        legend: { hidden: false },
    };
      
    const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);
      
    const getArcLabel = (params: DefaultizedPieValueType) => {
        const percent = params.value / TOTAL;
            return `${(percent * 100).toFixed(0)}%`;
    };

    useEffect(() => {
        calculateKcal();
    }, [proteins, carbohydrates, fats, fiber]);

    const calculateKcal = () => {
        if (proteins !== null && carbohydrates !== null && fats !== null && fiber !== null) {
            const totalKcal = proteins * 4 + carbohydrates * 4 + fats * 9 + fiber * 2;
            setKcal(totalKcal);
        } else {
            setKcal(0);
        }
    };

    const handleProteins = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.trim(); 
        if (value === '') {
            setProteins(null);
        } else {
            const inputProteins = parseFloat(value);
            setProteins(isNaN(inputProteins) ? null : inputProteins);
        }
    };

    const handleCarbohydrates = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.trim();
        if (value === '') {
            setCarbohydrates(null);
        } else {
            const inputCarbohydrates = parseFloat(value);
            setCarbohydrates(isNaN(inputCarbohydrates) ? null : inputCarbohydrates);
        }
    };

    const handleFats = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.trim(); 
        if (value === '') {
            setFats(null);
        } else {
            const inputFats = parseFloat(value);
            setFats(isNaN(inputFats) ? null : inputFats);
        }
    };

    const handleFiber = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.trim(); 
        if (value === '') {
            setFiber(null);
        } else {
            const inputFiber = parseFloat(value);
            setFiber(isNaN(inputFiber) ? null : inputFiber);
        }
    };

    const handleFluids = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.trim(); 
        if (value === '') {
            setFluids(null);
        } else {
            const inputFluids = parseFloat(value);
            setFluids(isNaN(inputFluids) ? null : inputFluids);
        }
    };
    
    const handleDescribe = (desc :string) => {
        setDescribe(desc);
    };

    const fetchDiet = async () => {
        const response = await fetch(`http://localhost:8000/api/diets/get?user_id=${user_id}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        });
        if(response.ok){
            const content = await response.json();
            setDescribe(content.describe);
            if(content.kcal === null) {setKcal(0);} else {setKcal(content.kcal);}
            setProteins(content.proteins);
            setCarbohydrates(content.carbohydrates);
            setFats(content.fats);
            setFiber(content.fiber);
            setFluids(content.fluids);
        }
        else{ console.log(response.status, response.statusText); }
    }

    useEffect(()=>{
        fetchDiet();
    },[user_id]);

    const patchDiet = async (e: SyntheticEvent) => {
        e.preventDefault();
        let id = diet_id;
        const diet_response = await fetch('http://localhost:8000/api/diets/edit', {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id,
                describe,
                kcal,
                proteins,
                carbohydrates,
                fats,
                fiber,
                fluids
            })
        });
        if (diet_response.ok){ 
            const order_response = await fetch('http://localhost:8000/api/orders/activate_order', {
                method: 'PATCH',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                user_id,
            })
            });
            if(order_response.ok) { navigate(`/admin/diet_plan_meal/${diet_id}`); }
            else { console.log(diet_response.status, diet_response.statusText); }
        }
        else { console.log(diet_response.status, diet_response.statusText); }
    }

    return (
        <div className="admin-create-diet-plan-organism-div-wrapper">
            <h5>Plan Dietetyczny</h5>
            <form onSubmit={patchDiet}>
                <div className="create-diet-form-inputs-divs-wrapper">
                    <div className="create-form-inputs-part1-div-wrapper">
                        <span className="macro-title-span">Makroskładniki:</span>
                        <CreateDietsInputs inputType="proteins" value={proteins} onChange={handleProteins} />
                        <CreateDietsInputs inputType="carbohydrates" value={carbohydrates} onChange={handleCarbohydrates} />
                        <CreateDietsInputs inputType="fats" value={fats} onChange={handleFats} />
                        <CreateDietsInputs inputType="fiber" value={fiber} onChange={handleFiber} />
                        <div className="create-diet-plan-piechart-div-wrapper">
                            <PieChart
                                series={[
                                    {
                                    outerRadius: 150,
                                    data,
                                    arcLabel: getArcLabel,
                                    },
                                ]}
                                sx={{
                                    [`& .${pieArcLabelClasses.root}`]: {
                                    fill: 'white',
                                    fontSize: 18,
                                    fontWeight: 600,
                                    },
                                }}
                                {...sizing}
                            />
                        </div>
                        <span className="diet-create-calories-span">Wartość energetyczna: {kcal} kcal</span>
                    </div>
                    <div className="create-form-inputs-part2-div-wrapper">
                        <CreateDietsInputs inputType="fluids" value={fluids} onChange={handleFluids} />
                        <span className="describe-title-span">Opis do diety:</span>
                        <MessageTextArea className="create-diet-describe-input" onChange={handleDescribe} />
                    </div>
                </div>
                <Button buttonType="submit" className="path-diet-button-wrapper" onClick={()=>{}} buttonTittle="Zapisz" />
            </form>
            
        </div>
    );
}

export default AdminDietPlanOrganism;