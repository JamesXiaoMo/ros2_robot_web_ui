import Box from "@mui/material/Box";
import {ModelCard} from "../components/3dModelCard.tsx";
import AppBarComponent from "../components/appBar.tsx";
import BatteryGauge from "react-battery-gauge";
import {Divider, Typography, List, ListItem, ListItemButton, ListItemText, ListItemIcon} from "@mui/material";
import SportsEsports from '@mui/icons-material/SportsEsports';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from 'react-router-dom'
import { powerTopic } from "../ros2/rosBridge.ts";
import {useState, useEffect} from "react";

interface powerMessage {
    current: number;
    power: number;
    voltage: number;
}

const Home = () => {
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.backgroundColor = '#0f0f0f';
    const navigate = useNavigate();
    const [voltage, setVoltage] = useState(0.0)
    const [current, setCurrent] = useState(0.0)
    useEffect(() => {
        const callback = (message: powerMessage) => {
            setVoltage(parseFloat(message.voltage.toFixed(1)));
            setCurrent(parseFloat(message.current.toFixed(1)));
        };
        powerTopic.subscribe(callback);

        return () => {
            powerTopic.unsubscribe();
        };
    }, []);
    return (
        <Box sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
        }}>
            <AppBarComponent title={"ROS2 Robot Web UI"}/>
            <ModelCard />
            <Box
                sx={{
                    width: '95%',
                    height: 100,
                    backgroundColor: '#2b2b2b',
                    display: 'flex',
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
                        paddingRight: 1
                    }}
                    onClick={() => navigate('/power')}
                >{voltage.toFixed(1)}V</Typography>
                <Divider
                    orientation={"vertical"}
                    sx={{
                        borderColor: '#737373FF',
                    }}
                />
                <BatteryGauge
                    value={((voltage-11)/2)<0 ? 0 : (voltage-11)/2}
                    max={100}
                    width={100}
                    animated={true}
                    charging={true}
                    customization={
                        {
                          batteryBody: {
                            strokeWidth: 1,
                            cornerRadius: 6,
                            fill: 'none',
                            strokeColor: '#ffffff'
                          },
                          batteryCap: {
                            fill: 'none',
                            strokeWidth: 1,
                            strokeColor: '#ffffff',
                            cornerRadius: 2,
                            capToBodyRatio: 0.4
                          },
                          batteryMeter: {
                            fill: 'green',
                            lowBatteryValue: 15,
                            lowBatteryFill: 'red',
                            outerGap: 1,
                            noOfCells: 1,
                            interCellsGap: 1
                          },
                          readingText: {
                            lightContrastColor: '#fff',
                            darkContrastColor: '#fff',
                            lowBatteryColor: 'red',
                            fontFamily: 'Helvetica',
                            fontSize: 14,
                            showPercentage: true
                          },
                          chargingFlash: {
                            scale: undefined,
                            fill: 'orange',
                            animated: true,
                            animationDuration: 1000
                          },
                        }
                    }
                    onClick={() => navigate('/power')}
                />
                <Divider
                    orientation={"vertical"}
                    sx={{
                        borderColor: '#737373FF',
                    }}
                />
                <Typography variant={"h5"} sx={{color:'white', fontWeight:'bold', paddingLeft: 1}} onClick={() => navigate('/power')}>{current.toFixed(1)}A</Typography>
            </Box>
            <Box
                sx={{
                    width: '95%',
                    backgroundColor: '#2b2b2b',
                    borderRadius: 5,
                }}
            >
                <List>
                    <ListItem disablePadding>
                        <ListItemButton
                            sx={{
                                color: 'white',
                            }}
                        >
                            <ListItemIcon>
                                <SportsEsports sx={{color: 'white'}}/>
                            </ListItemIcon>
                            <ListItemText
                                primary="Romote control"
                                slotProps={{
                                    primary: {
                                        sx: { fontWeight: 'bold' },
                                    },
                                }}
                            />
                        </ListItemButton>
                    </ListItem>
                    <Divider sx={{backgroundColor: '#737373FF'}}/>
                    <ListItem disablePadding>
                        <ListItemButton
                            sx={{
                                color: 'white',
                            }}
                            onClick={() => navigate('/brightness')}
                        >
                            <ListItemIcon>
                                <TipsAndUpdatesIcon sx={{color: 'white'}}/>
                            </ListItemIcon>
                            <ListItemText
                                primary="Brightness measurement"
                                slotProps={{
                                    primary: {
                                        sx: { fontWeight: 'bold' },
                                    },
                                }}
                            />
                        </ListItemButton>
                    </ListItem>
                    <Divider sx={{backgroundColor: '#737373FF'}}/>
                    <ListItem disablePadding>
                        <ListItemButton
                            sx={{
                                color: 'white',
                            }}
                            onClick={() => navigate('/about')}
                        >
                            <ListItemIcon>
                                <InfoIcon sx={{color: 'white'}}/>
                            </ListItemIcon>
                            <ListItemText
                                primary="About"
                                slotProps={{
                                    primary: {
                                        sx: { fontWeight: 'bold' },
                                    },
                                }}
                            />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Box>
    )
}

export default Home;
