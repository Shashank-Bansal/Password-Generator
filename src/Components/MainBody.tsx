import { Card, Chip, Divider, Grid, Typography } from '@mui/material';
import List from './List';
import GeneratorButton from './GeneratorButton';
import DisplayPassword from './DisplayPassword';
import AlertComponent from './Alert';
import { useSelector } from 'react-redux';
import { RootState } from './ReduxToolkit/store';
import RandomGenerator from './RandomGenerator';
// import { AppContext } from './ContextApi/Context';
// import { useContext } from 'react';

const MainBody: React.FC = () => {
    // const con = useContext(AppContext);
    const con = useSelector((state: RootState) => state);
    return (
        <Card sx={{ p: 5 }} >
            <Grid container direction={"column"} spacing={3}>
                <Grid item ><Typography variant="h4" component='h1' color="#4d606e" align="center" sx={{ fontWeight: 'bold' }}> Password Generator </Typography></Grid>
                <Grid item> <DisplayPassword /> </Grid>
                <Grid item> <List /> </Grid>
                <Grid item> <GeneratorButton /> </Grid>
                {(con.state.alert.display) && <Grid item> <AlertComponent /> </Grid>}
                <Grid item> <Divider> <Chip label="OR" /> </Divider> </Grid>
                <Grid item> <RandomGenerator /> </Grid>
            </Grid>
        </Card>
    );
}

export default MainBody; 