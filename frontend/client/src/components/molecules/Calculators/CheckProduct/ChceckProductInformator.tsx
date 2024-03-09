import React from "react";


const CheckProductInformator = () => {

    return(
        <div className="check-product-informator-div-wrapper">
            <span className="check-product-title-span">Jak to działa ?</span>
            <p>W obecnej zakładce mozesz wyszukiwać produnkty które znajdują się w naszej bazie danych i sprawdzać ich wartość energetyczną oraz makroskładniki
                takie jak białko, tłuszcze, węglowodany, błonnik. Wartości te w naszej bazie są określone na 100g danego produktu, 
                dzięki temu moesz sam personalizować sobie własne posiłki, inne niz zalecane w danej diecie lecz nadal spełniające 
                ogólne karoloczne załoenia dietetyczne z zachowaniem odpowiedniej ilości makroskładników.</p>
            <span className="check-product-title-span">Pamiętaj !</span>
            <p>Dieta, liczenie kalorii oraz makroskładników to podstawowa i najwazniejsza część naszej przemiany sylwetki, stanowi to około 70% twojego sukcesu, 
                dlatego jeśli nie jesteś pewny jaką wartość energetyczną ma dany składnik twojego posiłku, skorzystaj z naszej darmowej wyszukiwarki produktów. </p>
        </div>
    );
}

export default CheckProductInformator;