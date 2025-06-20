import {AppBar, Avatar, Box} from "@mui/material";
import {Toolbar} from "@mui/material";
import {Typography} from "@mui/material";

export default function AppBarComponent() {
    return (
        <AppBar position="static" >
            <Toolbar sx={{ backgroundColor: '#0f0f0f' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Avatar alt="icon" src="/src/assets/robot_white.png" sx={{width:24, height:24, paddingBottom:0.8}}/>
                <Typography variant="h5" sx={{ color: 'white' }}>
                  ROS2 Control Panel
                </Typography>
              </Box>
            </Toolbar>
        </AppBar>
    );
}
