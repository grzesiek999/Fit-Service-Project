import React from "react";


const BmiInformator = () => {

    return (
        <div className="bmi-informator-div-wrapper">
            <span className="bmi-informator-border-text">Korzystając z BMI, musimy pamiętać również o tym, że jest to wskaźnik stosowany wyłącznie u osób dorosłych, które ukończyły 20 rok życia.</span> 
            
            <p className="bmi-informator-text">Co więcej, kryteria oceny tego parametru zmieniają się również wraz z wiekiem i są inne dla seniorów niż dla osób wieku poprodukcyjnym. Ma to związek z faktem, że wraz z wiekiem zmniejsza się masa mięśniowa oraz gęstość kości, natomiast rośnie ilość tkanki tłuszczowej.</p>

            <span className="bmi-informator-title">BMI kobiety a BMI mężczyzny</span>
            
            <p className="bmi-informator-text">Chociaż wskaźnik BMI nie uwzględnia ani wieku, ani płci, to właśnie te czynniki są kluczowe i należy je należy brać podczas interpretacji wyniku BMI. Kobieta i mężczyzna o podobnym wzroście i wadze mogą mieć zbliżone BMI, jednak z uwagi na uwarunkowania fizjologiczne kobiet do gromadzenia większej ilości tkanki tłuszczowej, to właśnie tłuszcz będzie stanowił u nich znacznie większą część masy ciała niż u mężczyzny.</p>

            <p className="bmi-informator-text">Z drugiej strony, mężczyźni, którzy prowadzą aktywny styl życia również mogą mieć problem z prawidłową interpretacją wyniku BMI. W przypadku kulturystów podwyższony poziom BMI spowodowany zwiększoną masą mięśniową może sugerować nadwagę, a nawet otyłość, natomiast niski poziom tkanki tłuszczowej u lekkoatlety mógłby być potencjalnie powiązany z niedowagą.</p>

            <span className="bmi-informator-border-text">W związku z tym BMI należy zawsze traktować wyłącznie jako swego rodzaju wskazówkę informującą o tym, że powinniśmy lepiej dbać o nasze zdrowie.</span>
            
            <span className="bmi-informator-title">BMI nastolatków i dzieci</span>

            <p className="bmi-informator-text">U dorosłych obliczanie BMI jest stosunkowo proste, jednak w przypadku dzieci i młodzieży sprawa jest nieco bardziej skomplikowana. Jest to związane przede wszystkim z faktem, że dzieci i młodzież stale rosną, a wraz z wiekiem zmienia się także zawartość tkanki tłuszczowej w ich ciele. Dodatkowym aspektem jest to, że ilość tłuszczu i jego rozmieszczenie u chłopców i dziewczynek mocno się różni, dlatego też konieczne jest stosowanie nieco innego sposobu na obliczanie BMI w tej grupie osób.</p>
        </div>
    );
}

export default BmiInformator;