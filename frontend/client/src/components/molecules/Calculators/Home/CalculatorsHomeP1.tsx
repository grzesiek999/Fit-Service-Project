import React from "react";


const CalculatorsHomeP1 = () => {

    return (
        <div className="calculators-home-p1-div-wrapper">
            <span className="informations-titles-span">BMI</span>
            <p>Kalkulator BMI to narzędzie, dzięki któremu w szybki sposób możesz obliczyć, ile wynosi twój wskaźnik masy ciała.</p> 
            <p>Na podstawie wyniku łatwo ocenić, czy nasza waga jest prawidłowa, czy też mamy nadwagę, otyłość albo niedowagę.</p>
            <div className="calculators-image-02-div-wrapper">
                <img src="./public/images/calculators-image_02.png" alt="calculators image-02 error" className="calculators-image-02"/>
            </div>
            <span className="informations-titles-span">BMR</span>
            <p>Kalkulatory BMR pozwalają na oszacowanie, czy obecna dieta dostarcza ilość kalorii potrzebną organizmowi tzw. "zero" energetyczne, czy może jest hipokaloryczna podaż poniżej zapotrzebowania, czy też hiperkaloryczna podaż powyżej zapotrzebowania.</p> 
            <p>Aspekty te stanowią podstawę procesów odchudzania, czy budowania masy i poznanie swojego wskaźnika BMR może pozwolić na bardziej precyzyjny start w kontekście diety.</p>
        </div>
    );
}

export default CalculatorsHomeP1;