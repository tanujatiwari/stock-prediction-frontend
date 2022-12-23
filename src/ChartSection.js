import './ChartSection.css'
import { BarChart, Bar, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useEffect, useState } from 'react';

function ChartSection({ predictedData, originalData, data, bargraphData, thirtyDayData }) {
    let [graphPoints, setGraphPoints] = useState([])
    let [mergedGraphPoints, setMergedGraphPoints] = useState([])

    useEffect(() => {
        const closure = (predictedData, originalData) => {
            let graphPoints = []
            for (let i = 0; i < predictedData.length; i++) {
                let obj = {}
                obj.name = i + 1;
                obj.pv = predictedData[i][0][0]
                obj.uv = originalData[i]
                graphPoints.push(obj)
            }
            setGraphPoints(() => graphPoints)
        }
        closure(predictedData, originalData)
    }, [predictedData])

    useEffect(() => {
        const closure = (originalData, thirtyDayData) => {
            let graphPoints = []
            let day = 1
            for (let i = 0; i < originalData.length; i++) {
                let obj = {}
                obj.name = day++;
                obj.uv = originalData[i][0][0]
                graphPoints.push(obj)
            }
            for (let i = 0; i < thirtyDayData.length; i++) {
                let obj = {}
                obj.name = day++;
                obj.pv = thirtyDayData[i][0][0]
                graphPoints.push(obj)
            }
            setMergedGraphPoints(() => graphPoints)
        }
        closure(predictedData, originalData)
    }, [originalData, thirtyDayData])


    return (
        <>
            <div className=''>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        width={500}
                        height={300}
                        data={graphPoints}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="5 5" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                    </LineChart>
                </ResponsiveContainer>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        width={500}
                        height={300}
                        data={mergedGraphPoints}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="5 5" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <div className='Bar-Graph'>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width={500}
                        height={300}
                        data={bargraphData}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="pv" fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </>
    )
}

export default ChartSection