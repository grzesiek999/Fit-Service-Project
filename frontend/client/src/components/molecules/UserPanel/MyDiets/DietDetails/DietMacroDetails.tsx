import React from 'react';
import { DefaultizedPieValueType } from '@mui/x-charts';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';

interface Diet {
    id: number,
    describe: string,
    kcal: number,
    proteins: number,
    carbohydrates: number,
    fats: number,
    fiber: number,
    fluids:number,
}

type DietMacroDetailsProps = {
    diet: Diet | null;
}

const DietMacroDetails = ({diet}: DietMacroDetailsProps) => {

    let data = [
        { label: 'Białko', value: 0, color: '#4472c4' },
        { label: 'Węglowodany', value: 0, color: '#ed7d30' },
        { label: 'Tłuszcze', value: 0, color: '#fbc003' },
    ];

    if (diet) {
        data = [
            { label: 'Białko', value: diet.proteins, color: '#4472c4' },
            { label: 'Węglowodany', value: diet.carbohydrates, color: '#ed7d30' },
            { label: 'Tłuszcze', value: diet.fats, color: '#fbc003' },
        ];
    }
      
    const sizing = {
        margin: { right: 200, },
        width: 500,
        height: 300,
        legend: { hidden: false },
    };
      
    const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);
      
    const getArcLabel = (params: DefaultizedPieValueType) => {
        const percent = params.value / TOTAL;
            return `${(percent * 100).toFixed(0)}%`;
    };
      

    return(
        <div className='diet-macro-detais-div-wrapper'>
            <span className='macro-components-title-span'>Makroskładniki:</span>
            <PieChart
                series={[
                    {
                    outerRadius: 150,
                    data,
                    arcLabel: getArcLabel,
                    },
                ]}
                sx={{
                    [`& .${pieArcLabelClasses.root}`]: {
                    fill: 'white',
                    fontSize: 18,
                    fontWeight: 600,
                    },
                }}
                {...sizing}
            />
            <div className='diet-macro-components-table-div'>
                <span className='needed-calories-span'>Zabotrzebowanie kaloryczne: {diet?.kcal} kcal</span>
                <ul>
                    <li><p>Białko:</p><p className="p-macro">{diet?.proteins} g</p></li>
                    <li><p>Węglowoday:</p><p className="p-macro">{diet?.carbohydrates} g</p></li>
                    <li><p>Tłuszcze:</p><p className="p-macro">{diet?.fats} g</p></li>
                    <li><p>Błonnik:</p><p className="p-macro">{diet?.fiber} g</p></li>
                </ul>
            </div>
        </div>
    );
}

export default DietMacroDetails;