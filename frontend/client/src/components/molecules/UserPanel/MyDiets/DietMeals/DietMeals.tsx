import { useEffect, useState } from "react";
import DietMealExample from "./DietMealExaple";



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

type DietMealsProps = {
    diet_id: undefined | number;
}

const DietMeals = ({diet_id}: DietMealsProps) => {

    const [firstMeal, setFirstMeal] = useState<DietMeal[]>([]);
    const [secondMeal, setSecondMeal] = useState<DietMeal[]>([]);
    const [thirdMeal, setThirdMeal] = useState<DietMeal[]>([]);
    const [fourthMeal, setFourthMeal] = useState<DietMeal[]>([]);
    const [fifthMeal, setFifthMeal] = useState<DietMeal[]>([]);
    const [sixthMeal, setSixthMeal] = useState<DietMeal[]>([]);
    const [isMeal, setIsMeal] = useState<boolean[]>(Array(6).fill(false));

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
        <div className="diet-meals-div-wrapper">
            <span className="our-meals-proposition-span">Nasz proponowany jadłospis</span>
            <div className="example-meals-div-wrapper">
                { isMeal[0] ?
                    <div className="example-meal-div-wrapper">
                        <span className="meal-title-span">PIERWSZY POSIŁEK</span>
                        <DietMealExample meal={firstMeal}/> 
                    </div>
                : null }
                { isMeal[1] ? 
                    <div className="example-meal-div-wrapper">
                        <span className="meal-title-span">DRUGI POSIŁEK</span>
                        <DietMealExample meal={secondMeal}/> 
                    </div>        
                : null }
                { isMeal[2] ?
                    <div className="example-meal-div-wrapper">
                        <span className="meal-title-span">TRZECI POSIŁEK</span> 
                        <DietMealExample meal={thirdMeal}/> 
                    </div>        
                : null }
                { isMeal[3] ? 
                    <div className="example-meal-div-wrapper">
                        <span className="meal-title-span">CZWARTY POSIŁEK</span>
                        <DietMealExample meal={fourthMeal}/> 
                    </div>
                : null }
                { isMeal[4] ? 
                    <div className="example-meal-div-wrapper">
                        <span className="meal-title-span">PIĄTY POSIŁEK</span>
                        <DietMealExample meal={fifthMeal}/> 
                    </div>        
                : null }
                { isMeal[5] ? 
                    <div className="example-meal-div-wrapper">
                        <span className="meal-title-span">SZÓSTY POSIŁEK</span>
                        <DietMealExample meal={sixthMeal}/> 
                    </div>        
                : null }
            </div>
        </div>
    );
}

export default DietMeals;