import AppBarComponent from "../components/appBar.tsx";
import Box from "@mui/material/Box";

export default function Power() {
    return(
        <Box sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
        }}>
            <AppBarComponent title={"Power"}/>
        </Box>
    )
}