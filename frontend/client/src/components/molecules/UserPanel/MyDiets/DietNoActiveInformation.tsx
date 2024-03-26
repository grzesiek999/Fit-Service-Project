import React from "react";
import { ThreeDots } from 'react-loader-spinner'



const DietNoActiveInformation = () => {

    return (
        <div className="diet-no-active-information">
            <span className="diet-no-active-span">Plan dietetyczny nie jest jeszcze gotowy 😅</span>
            <p>Potrzebujemy trochę czasu aby móc stworzyć spersonalizowany plan dietetyczny pod twoje potrzeby 😉</p>
            <p>Gdy plan dietetyczny będzie gotowy powiadomimy cię o tym w osobnym mailu.</p>
            <ThreeDots
                visible={true}
                height="100"
                width="100"
                color="#1e73d3"
                radius="9"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClass="diet-in-proggress-loader"
            />
        </div>
    );
}

export default DietNoActiveInformation;