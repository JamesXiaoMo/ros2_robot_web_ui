import AppBarComponent from "../components/appBar.tsx";
import Box from "@mui/material/Box";
import {Divider, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {brightnessTopic} from "../ros2/rosBridge.ts";
import { LineChart } from '@mui/x-charts/LineChart';

export default function Brightness() {
    const [brightness, setBrightness] = useState(0.0)
    const [labels, setLabels] = useState<string[]>([]);
    const [luxValues, setLuxValues] = useState<number[]>([]);
    useEffect(() => {
        const callback = (message: {data: number}) => {
            const now = new Date();
            const timeStr = now.toLocaleTimeString();
            setBrightness(message.data);
            setLabels((prev) => {
                const updated = [...prev, timeStr];
                return updated.length > 60 ? updated.slice(-60) : updated;
            });

            setLuxValues((prev) => {
                const updated = [...prev, message.data];
                return updated.length > 60 ? updated.slice(-60) : updated;
            });
        };
        brightnessTopic.subscribe(callback);


        return () => {
            brightnessTopic.unsubscribe();
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
            <Box
                sx={{
                    width: '95%',
                    height: 100,
                    backgroundColor: '#2b2b2b',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10,
                    gap:2
                }}
            >
                <Typography
                    variant={"h5"}
                    sx={{
                        color:'white',
                        fontWeight:'bold',
                    }}
                >Brightness</Typography>
                <Divider
                    orientation={"vertical"}
                    sx={{
                        borderColor: '#737373FF',
                    }}
                />
                <Typography
                    variant={"h5"}
                    sx={{
                        color:'white',
                        fontWeight:'bold',
                        paddingLeft: 4,
                        paddingRight: 4,
                    }}
                >{brightness.toFixed(3)} lux</Typography>
            </Box>
            <Box sx={{ width: '95%', height: 300, backgroundColor: '#2b2b2b', borderRadius: 5, paddingBottom: 3}}>
                <LineChart
                    xAxis={[
                        {
                            data: labels,
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
                            data: luxValues,
                            label: 'Brightness (lux)',
                            color: '#90caf9',
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
