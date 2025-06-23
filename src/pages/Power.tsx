import AppBarComponent from "../components/appBar.tsx";
import Box from "@mui/material/Box";
import {useEffect, useState} from "react";
import {powerTopic} from "../ros2/rosBridge.ts";
import { LineChart } from '@mui/x-charts/LineChart';

interface powerMessage {
    current: number;
    power: number;
    voltage: number;
}

export default function Power() {
    // const [current, setCurrent] = useState(0.0)
    // const [voltage, setVoltage] = useState(0.0)
    const [x1, setX1] = useState<string[]>([]);
    const [y1, setY1] = useState<number[]>([]);
    const [y2, setY2] = useState<number[]>([]);
    useEffect(() => {
        const callback = (message: powerMessage) => {
            const now = new Date();
            const timeStr = now.toLocaleTimeString();
            // setVoltage(parseFloat(message.voltage.toFixed(1)));
            // setCurrent(parseFloat(message.current.toFixed(1)));
            setX1((prev) => {
                const updated = [...prev, timeStr];
                return updated.length > 60 ? updated.slice(-60) : updated;
            });

            setY1((prev) => {
                const updated = [...prev, parseFloat(message.current.toFixed(3))];
                console.log(message);
                return updated.length > 60 ? updated.slice(-60) : updated;
            });
            setY2((prev) => {
                const updated = [...prev, parseFloat(message.voltage.toFixed(3))];
                return updated.length > 60 ? updated.slice(-60) : updated;
            });
        };
        powerTopic.subscribe(callback);


        return () => {
            powerTopic.unsubscribe();
        };
    }, []);
    return(
        <Box sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
        }}>
            <AppBarComponent title={"Brightness Measurement"}/>
            <Box sx={{ width: '95%', height: 300, backgroundColor: '#2b2b2b', borderRadius: 5, paddingBottom: 3}}>
                <LineChart
                    xAxis={[
                        {
                            data: x1,
                            scaleType: 'point',
                            labelStyle: { fill: 'white' },
                            tickLabelStyle: { fill: 'white' },
                            stroke: 'white',
                        },
                    ]}
                    yAxis={[
                        {
                            labelStyle: { fill: 'white' },
                            tickLabelStyle: { fill: 'white' },
                            stroke: 'white',
                        },
                    ]}
                    series={[
                        {
                            data: y1,
                            label: 'Current (A)',
                            color: '#ff0000',
                        },
                    ]}
                    height={300}
                    sx={{
                        '.MuiChartsAxis-root text': {
                            fill: 'white',
                        },
                        '.MuiChartsLegend-root': {
                            color: 'white',
                        },
                    }}
                />
            </Box>
            <Box sx={{ width: '95%', height: 300, backgroundColor: '#2b2b2b', borderRadius: 5, paddingBottom: 3}}>
                <LineChart
                    xAxis={[
                        {
                            data: x1,
                            scaleType: 'point',
                            labelStyle: { fill: 'white' },
                            tickLabelStyle: { fill: 'white' },
                            stroke: 'white',
                        },
                    ]}
                    yAxis={[
                        {
                            labelStyle: { fill: 'white' },
                            tickLabelStyle: { fill: 'white' },
                            stroke: 'white',
                        },
                    ]}
                    series={[
                        {
                            data: y2,
                            label: 'Voltage (V)',
                            color: '#4dff46',
                        },
                    ]}
                    height={300}
                    sx={{
                        '.MuiChartsAxis-root text': {
                            fill: 'white',
                        },
                        '.MuiChartsLegend-root': {
                            color: 'white',
                        },
                    }}
                />
            </Box>
        </Box>
    )
}
