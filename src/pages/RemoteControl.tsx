import AppBarComponent from "../components/appBar.tsx";
import Box from "@mui/material/Box";
import Joystick, {Direction} from "rc-joystick";
import {useEffect, useRef, useState} from "react";
import {publishTwist} from "../ros2/rosBridge.ts";
import Button from '@mui/material/Button';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import RotateRightIcon from '@mui/icons-material/RotateRight';

export default function RemoteControl() {
    const joystickContainerRef = useRef<HTMLDivElement>(null);
    const [x, setX] = useState(0.0)
    const [y, setY] = useState(0.0)
    // const [rotation, setRotation] = useState(0.0)

    useEffect(() => {
        const container = joystickContainerRef.current;
        if (container) {
            const handleTouchMove = (e: TouchEvent) => {
                e.preventDefault();
            };
            container.addEventListener("touchmove", handleTouchMove, { passive: false });

            return () => {
                container.removeEventListener("touchmove", handleTouchMove);
            };
        }
    }, []);

    const handleChange = (val: {
        direction: Direction;
        angle: number | undefined;
        distance: number;
    }) => {
        if (val.angle !== undefined) {
            const radians = (val.angle * Math.PI) / 180;
            setX(Math.cos(radians) * val.distance);
            setY(Math.sin(radians) * val.distance);
        } else {
            setX(0);
            setY(0);
        }
        publishTwist(x/130, y/130, 0)
        console.log("Angle:", val.angle);
        console.log("Direction:", val.direction);
        console.log("Distance:", val.distance);
        console.log("X:", x/130);
        console.log("Y:", y/130);
    };
    return (
        <Box
            sx={{
                width: "100%",
                gap: 2,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
            }}
        >
            <AppBarComponent title={"RemoteControl"} />
            <Box
                sx={{
                    width: "95%",
                    height: 300,
                    backgroundColor: "#2b2b2b",
                    borderRadius: 5,
                    paddingBottom: 3,
                    paddingTop: 3,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    gap:5
                }}
                ref={joystickContainerRef}
            >
                <Joystick
                    baseRadius={125}
                    controllerRadius={50}
                    autoReset={true}
                    onChange={handleChange}
                />
                <Box
                    sx={{
                        width:'100%',
                        height:10,
                        display:'flex',
                        flexDirection:'row',
                        justifyContent:'center',
                        alignItems:'center',
                        gap:8,
                    }}

                >
                    <Button
                        startIcon={<RotateLeftIcon />}
                        sx={{
                            color: "white",  // 控制按钮文字和图标颜色
                        }}
                    >
                        Turn left
                    </Button>
                    <Button
                        startIcon={<RotateRightIcon />}
                        sx={{
                            color: "white",  // 控制按钮文字和图标颜色
                        }}
                    >
                        Turn right
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}
