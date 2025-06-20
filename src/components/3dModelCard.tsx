import {Paper} from "@mui/material";
import {Model} from "./3dModel.tsx";

export const ModelCard = () => {
    return (
        <Paper sx={{
            width: '100%',
            height: 390,
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'black',
        }}>
            <Model />
        </Paper>
    )
}
