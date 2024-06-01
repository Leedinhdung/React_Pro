import React from 'react'
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'
const data = [
    {
        name: "male",
        value: 400
    },
    {
        name: "female",
        value: 500
    },
    {
        name: "other",
        value: 600
    },
]
const COLORS = ['#0088FE', '#00C49F', '#FFBB28']
const RADIAN = Math.PI / 180
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)
    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>)
}

export default function BuyerChart() {
    return (
        <div className='w-[20rem] h-[22rem] bg-white p-4 rounded-sm border border-gray-300 flex flex-col' >
            <strong className='text-gray-700 font-medium'>Buyer Profile</strong>
            <div className='w-full mt-3 flex-1 text-xs'>
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart width={400} height={300} >
                        <Pie data={data} dataKey="value" cx="50%" cy="40%" labelLine={false} outerRadius={105} fill="#8884d8" label={renderCustomizedLabel} >
                            {data.map((_, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>

                </ResponsiveContainer>
            </div>

        </div >
    )
}
