import React from "react";


const DietPurchasedStatus =() => {

    return (
        <div className="diet-purchased-status-div-wrapper">
            <span className="payment-status-inf-span">Zaktualizowanie status płatności moze potrwać do kilku minut, odświez stronę lub sprawdz swój email.</span>
            <div className="payment-status-div-wrapper">
                <span className="payment-status-title-span">Status płatności: </span>
                <span className="payment-status-value-span">Potwierdzona</span>
                <span className="payment-status-problem-span">W przypadku problemu z płatnością, skontaktuj się z nami za pomocą formularza 
                kontaktowego lub telefonicznie.</span>
            </div>
        </div>
    );
}

export default DietPurchasedStatus;