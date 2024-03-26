import React, { useState } from "react";


type DietFluidsProps = {
    fluids: number | undefined;
}

const DietFluids = ({fluids}: DietFluidsProps) => {

    let liters =  fluids ? fluids/1000: null;
    let images = [];
    let glasses = fluids ? fluids/250: null;
    let divWidth = 318;

    if(fluids && glasses){
        if (glasses > 12) { divWidth = 371; }
        for(let i = 0; i < glasses; i++){
            images.push(<img key={i} src="/public/images//water-glass.jpeg" alt={`Water-glass image ${i}`} className="water-glass" />);
        }
    }

    return(
        <div className="diet-fluids-div-wrapper">
            <img src="/public/images/fluids-image.jpeg" alt="fluids image error" className="fluids-image" />
            <span className="drinking-fluids-span">Dostarczaj dziennie organizmowi {liters} l. wody.</span>
            <div className="water-glass-div-wrapper" style={{width: divWidth}}>{images}</div>
        </div>
    );
}

export default DietFluids;