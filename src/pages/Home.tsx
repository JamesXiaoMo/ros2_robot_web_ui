import Box from "@mui/material/Box";
import {ModelCard} from "../components/3dModelCard.tsx";
import AppBarComponent from "../components/appBar.tsx";
import BatteryGauge from "react-battery-gauge";
import {Divider, Typography} from "@mui/material";

const Home = () => {
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.backgroundColor = '#0f0f0f';
    return (
        <Box sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <AppBarComponent />
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
                <Typography variant={"h5"} sx={{color:'white', fontWeight:'bold', paddingRight: 1}}>12.0V</Typography>
                <Divider
                    orientation={"vertical"}
                    sx={{
                        borderColor: '#737373FF',
                    }}
                />
                <BatteryGauge
                value={90}
                max={100}
                width={100}
                animated={true}
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
                />
                <Divider
                    orientation={"vertical"}
                    sx={{
                        borderColor: '#737373FF',
                    }}
                />
                <Typography variant={"h5"} sx={{color:'white', fontWeight:'bold', paddingLeft: 1}}>0.0A</Typography>
            </Box>
            <List>

            </List>
        </Box>
    )
}

export default Home;
