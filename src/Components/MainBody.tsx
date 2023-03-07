import { Card, Grid, Typography } from '@mui/material';
import List from './List';
import GeneratorButton from './GeneratorButton';
import DisplayPassword from './DisplayPassword';
import AlertComponent from './Alert';
import { styled } from '@mui/system';
import { useSelector } from 'react-redux';
import { RootState } from './ReduxToolkit/store';
// import { Container } from '@mui/system';
// import { AppContext } from './ContextApi/Context';
// import { useContext } from 'react';

import { red, green, blue } from '@mui/material/colors';


const StyledCard = styled(Card)(({ theme }) => ({
    // width: {
    //         lg: 450,
    //         xl: 470,
    // },
    // width: '400px',
    // [theme.breakpoints.down('md')]: {
    //     backgroundColor: red[500],
    // },
    // [theme.breakpoints.up('md')]: {
    //     backgroundColor: blue[500],
    // },
    // [theme.breakpoints.up('lg')]: {
    //     backgroundColor: green[500],
    // },
}));

const MainBody: React.FC = () => {
    // const con = useContext(AppContext);
    const con = useSelector((state: RootState) => state);
    return (
        <StyledCard
        // <Card
            sx={{p: 5}}
        >

            {/* <Container> */}
            <Grid container direction={"column"} spacing={3}>
                <Grid item ><Typography variant="h4" component='h1' color="#4d606e" align="center" sx={{ fontWeight: 'bold' }}> Password Generator </Typography></Grid>
                <Grid item> <DisplayPassword /> </Grid>
                <Grid item> <List /> </Grid>
                <Grid item> <GeneratorButton /> </Grid>
                {(con.state.alert.display) && <Grid item> <AlertComponent /> </Grid>}
            </Grid>
            {/* </Container> */}
        {/* </Card> */}
        </StyledCard>
    );
}

export default MainBody; 