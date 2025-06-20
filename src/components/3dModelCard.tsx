import {Box} from "@mui/material";
import Spline from '@splinetool/react-spline';

export const ModelCard = () => {
    return (
        <Box sx={{
            width: '100%',
            height: 390,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'black',
        }}>
            <Spline scene="https://prod.spline.design/zhvQIFgCxk5EtUqk/scene.splinecode" />
        </Box>
    )
}
