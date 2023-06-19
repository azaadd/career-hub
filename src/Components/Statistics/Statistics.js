import React from 'react';
import './Statistics.css';
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';




const Statistics = () => {
    const marksArray = [
        {
            name: "A1",
            id: 1,
            marks: 30
        },
        {
            name: "A2",
            id: 2,
            marks: 30
        },
        {
            name: "A3",
            id: 3,
            marks: 29
        },
        {
            name: "A4",
            id: 4,
            marks: 28
        },
        {
            name: "A5",
            id: 5,
            marks: 30
        },
        {
            name: "A6",
            id: 6,
            marks: 30
        },
        {
            name: "A7",
            id: 7,
            marks: 30
        },
        {
            name: "A8",
            id: 8,
            marks: 29
        }
    ];

    return (
        <div className='chart-container'>
            <h2 className='chart-title'>Assignments Marks Chart</h2>
            
                <ComposedChart
                    width={700}
                    height={400}
                    data={marksArray}
                    
                >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="name" scale="band" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="id" barSize={20} fill="#413ea0" />
                    <Line type="monotone" dataKey="marks" stroke="#565fed" />
                </ComposedChart>
            

        </div>
    );
};

export default Statistics;