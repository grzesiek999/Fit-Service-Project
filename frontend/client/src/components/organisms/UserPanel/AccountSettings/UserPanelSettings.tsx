import React, { useState } from "react";
import ChangePassword from "../../../molecules/UserPanel/AccountesSettings/ChangePassword";


const UserPanelSettings = () => {

    
    return (
        <div className="user-settings-div-wrapper">
            <h5>Ustawienia Konta</h5>
            <span className="prolog-user-settings-span">Witaj w panelu ustawień konta znajdziesz szeroki zakres opcji, które umożliwiają dostosowanie platformy do Twoich indywidualnych preferencji. Możesz tutaj zmieniać hasło, aktualizować dane osobowe, zarządzać powiadomieniami e-mail, dostosowywać ustawienia prywatności oraz wiele innych. Dzięki temu możesz kontrolować, jakie informacje są udostępniane innym użytkownikom i jak otrzymujesz powiadomienia od naszej platformy.</span>
            <div className="options-div-wrapper">
                <span className="option-title-span">Ustawienia</span>
                <ChangePassword />
            </div>
        </div>
    );
}

export default UserPanelSettings;