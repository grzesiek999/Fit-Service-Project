import React from "react";
import Button from "../../../atoms/buttons/Button";
import { useNavigate } from "react-router-dom";
import { ROUTER_PATH } from "../../../../router/RouterPath";


const BmrInformator = () => {
    
    const navigate = useNavigate();

    return (
        <div className="bmr-informator-div-wrapper">
            <span className="bmr-informator-title">Do czego słuzy kalkulator BMR</span>
            <p>Kalkulatory BMR pozwalają na oszacowanie, czy obecna dieta dostarcza ilość kalorii potrzebną organizmowi (tzw. "zero" energetyczne), 
            czy może jest hipokaloryczna (podaż poniżej zapotrzebowania), czy też hiperkaloryczna (podaż powyżej zapotrzebowania).</p> 
            <p>Aspekty te stanowią podstawę procesów odchudzania, czy budowania masy i poznanie swojego wskaźnika BMR może pozwolić 
            na bardziej precyzyjny start w kontekście diety. Oczywiście istnieją bardziej precyzyjne i bezpośrednie metody, 
            jednak korzystanie z kalkulatorów jest darmowe i bardzo szybkie, a dokładność wyników jest z pewnością wystarczająca 
            na potrzeby ustalania kaloryczności jadłospisów.</p>
            <span className="bmr-advertisement-title">Pamiętaj, ze dieta to 70% Twojego sukcesu!</span>
            <p>Doskonała figura może być osiągnięta wtedy, gdy mamy prawidłowo dobraną i zbilansowaną dietę. 
                Utrzymywanie jej stale i dbanie o to, co mamy na talerzu, stanowi aż 70% sukcesu dążenia do poprawy naszej figury.</p> 
            <p>Pozostałe 30% to dodatek w postaci treningów, które warto dodać do swojej codzienności, gdyż pomogą nadać skórze jędrności i wzmocnią mięśnie. 
                Dieta jest najważniejsza podczas walki o swój wygląd. Bez racjonalnego i prawidłowego odzywiania się-idealna figura nigdy nie zostanie osiągnięta.</p>
            <Button buttonType="button" className="buy-diet-link-button" onClick={()=>{navigate(ROUTER_PATH.DIETS); document.body.scrollIntoView({ behavior: "smooth", block: "start" });}} buttonTittle="Zdobądź plan dietetyczny &#10148;" />
        </div>
    );    
}

export default BmrInformator;