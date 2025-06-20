import {AppBar, Avatar, Box} from "@mui/material";
import {Toolbar} from "@mui/material";
import {Typography} from "@mui/material";

interface AppBarProps {
    title: string;
}

export default function AppBarComponent({title}: AppBarProps) {
    return (
        <AppBar position="static" >
            <Toolbar sx={{ backgroundColor: '#0f0f0f' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Avatar alt="icon" src="/src/assets/robot_white.png" sx={{width:24, height:24, paddingBottom:0.6}}/>
                <Typography variant="h5" sx={{ color: 'white' }}>
                    {title}
                </Typography>
              </Box>
            </Toolbar>
        </AppBar>
    );
}
