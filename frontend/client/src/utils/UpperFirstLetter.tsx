import React from "react";



const upperFirstLetter = (text: string | undefined) => {
    if(text) {
        const capitalizedText = text.charAt(0).toUpperCase() + text.slice(1);
        return capitalizedText;
    }
}

export default upperFirstLetter;