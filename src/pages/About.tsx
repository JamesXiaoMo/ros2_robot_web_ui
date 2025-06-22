import AppBarComponent from "../components/appBar.tsx";
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';

export default function About() {
    return(
        <Box sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
        }}>
            <AppBarComponent title={"About"}/>
            <Box
                sx={{
                    width: '90%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'start',
                }}
            >
                <Typography
                    sx={{
                        color:'white',
                        fontWeight:'bold',
                        fontSize: 30,
                    }}
                >ROS2 Robot Web UI</Typography>
                <Typography
                    sx={{
                        color:'white',
                        fontSize: 10,
                    }}
                >
                    Designed by WUYUNGANG in Fukuyama University, Oki Lab, 2025.
                </Typography>
                <Typography
                    sx={{
                        color:'white',
                        fontSize: 18,
                        paddingTop: 2,
                    }}
                >
                    &nbsp;&nbsp;ROS2 Robot Web UI is developed using React and controls nodes and topics in ROS2 through rosBridge.
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingTop: 2,
                        gap: 1,
                    }}
                >
                    <GitHubIcon sx={{color: 'white', fontSize: 30}}/>
                    <Typography
                        component="a"
                        href="https://github.com/JamesXiaoMo/ros2_robot_web_ui"
                        target="_blank" // 在新标签页打开
                        rel="noopener noreferrer"
                        sx={{
                            color: 'white',
                            textDecoration: 'none',
                            textDecorationLine: 'underline',
                        }}
                    >
                        Github
                    </Typography>

                </Box>
            </Box>
        </Box>
    )
}