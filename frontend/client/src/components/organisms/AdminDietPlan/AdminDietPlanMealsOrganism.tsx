import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DietMealExample from "../../molecules/UserPanel/MyDiets/DietMeals/DietMealExaple";
import AddMealDetails from "../../molecules/AdminDietPlan/AddMealDetails";
import MealSummary from "../../molecules/AdminDietPlan/MealSummary";


interface DietMeal {
    id: number, 
    diet_id: number, 
    meal: number, 
    name: string, 
    describe: string, 
    product1_weight: number | null, 
    product1_id: number | null,
    product2_weight: number | null, 
    product2_id: number | null,
    product3_weight: number | null, 
    product3_id: number | null,
    product4_weight: number| null, 
    product4_id: number | null,
    product5_weight: number | null, 
    product5_id: number | null,
    product6_weight: number | null, 
    product6_id: number | null,
    product7_weight: number | null, 
    product7_id: number | null,
    product8_weight: number | null, 
    product8_id: number | null,
    product9_weight: number | null, 
    product9_id: number | null,
    product10_weight: number | null, 
    product10_id: number | null,
    product11_weight: number | null, 
    product11_id: number | null,
    product12_weight: number | null, 
    product12_id: number | null
}

interface Product {
    id: number,
    name: string,
    weight: number,
    energy: number,
    proteins: number,
    carbohydrates: number,
    fats: number,
    fiber: number
}

const AdminDietPlanMealsOrganism = () => {

    const {diet_id} = useParams();
    const [firstMeal, setFirstMeal] = useState<DietMeal[]>([]);
    const [secondMeal, setSecondMeal] = useState<DietMeal[]>([]);
    const [thirdMeal, setThirdMeal] = useState<DietMeal[]>([]);
    const [fourthMeal, setFourthMeal] = useState<DietMeal[]>([]);
    const [fifthMeal, setFifthMeal] = useState<DietMeal[]>([]);
    const [sixthMeal, setSixthMeal] = useState<DietMeal[]>([]);
    const [isMeal, setIsMeal] = useState<boolean[]>(Array(6).fill(false));
    const [tempWeight, setTempWeight] = useState<number | null>(0);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);



    const handleUpdateIsMeal = (indexToUpdate: number) => {
        setIsMeal(prevState => {
          const newState = [...prevState];
          newState[indexToUpdate] = true; 
          return newState; 
        });
      };

    const fetchMeals = async (meal_number: number, setMealArray: (param: any) => void) => {
        const response = await fetch(`http://localhost:8000/api/diet_meals/get_bydiet?diet_id=${diet_id}&meal=${meal_number}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        });
        if (response.ok) {
            const content = await response.json();
            if (content.message === 'none') { return null; }
            else { 
                handleUpdateIsMeal(meal_number-1);
                setMealArray(content);
            }
        }
    }

    useEffect (() => {
        if(diet_id) {
            fetchMeals(1, setFirstMeal);
            fetchMeals(2, setSecondMeal);
            fetchMeals(3, setThirdMeal);
            fetchMeals(4, setFourthMeal);
            fetchMeals(5, setFifthMeal);
            fetchMeals(6, setSixthMeal);
        }
    }, [diet_id]);

    return (
        <div className="admin-diet-plan-meals-organism-div-wrapper">
            <h5>Jadłospis Planu Dietetycznego</h5>
            { isMeal[0] || isMeal[1] || isMeal[2] || isMeal[3] || isMeal[4] || isMeal[5] ?
                <div className="there-is-diet-meals-div-wrapper">
                    <div className="meals-in-diet-div-wrapper">
                        <div className="example-meal-div-wrapper">
                            <span className="meal-title-span">PIERWSZY POSIŁEK</span>
                            <DietMealExample meal={firstMeal}/> 
                        </div>
                        <div className="example-meal-div-wrapper">
                            <span className="meal-title-span">DRUGI POSIŁEK</span>
                            <DietMealExample meal={secondMeal}/> 
                        </div>        
                        <div className="example-meal-div-wrapper">
                            <span className="meal-title-span">TRZECI POSIŁEK</span> 
                            <DietMealExample meal={thirdMeal}/> 
                        </div>        
                        <div className="example-meal-div-wrapper">
                            <span className="meal-title-span">CZWARTY POSIŁEK</span>
                            <DietMealExample meal={fourthMeal}/> 
                        </div>
                        <div className="example-meal-div-wrapper">
                            <span className="meal-title-span">PIĄTY POSIŁEK</span>
                            <DietMealExample meal={fifthMeal}/> 
                        </div>                        
                        <div className="example-meal-div-wrapper">
                            <span className="meal-title-span">SZÓSTY POSIŁEK</span>
                            <DietMealExample meal={sixthMeal}/> 
                        </div>
                    </div>
                    <div className="no-meals-for-user-diet-div-wrapper">
                        <AddMealDetails setTempWeight={setTempWeight} tempWeight={tempWeight} setSelectedProduct={setSelectedProduct} selectedProduct={selectedProduct}/>
                        <MealSummary product={selectedProduct} tempWeight={tempWeight}/>
                    </div>
                </div>:
                <div className="no-meals-for-user-diet-div-wrapper">
                    <AddMealDetails setTempWeight={setTempWeight} tempWeight={tempWeight} setSelectedProduct={setSelectedProduct} selectedProduct={selectedProduct}/>
                    <MealSummary product={selectedProduct} tempWeight={tempWeight}/>
                </div>
            }
        </div>
    );
}

export default AdminDietPlanMealsOrganism;