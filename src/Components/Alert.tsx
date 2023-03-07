import { Alert, AlertTitle, Slide } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { alertOff, alertreset } from './ReduxToolkit/slice';
import { RootState } from './ReduxToolkit/store';
// import { useContext } from 'react';
// import { AppContext } from './ContextApi/Context';

const AlertComponent: React.FC = () => {
    // const con = useContext(AppContext);
    const con = useSelector((state: RootState) => state);
    const dispatch = useDispatch();
    
    return (
        <Slide 
            direction="up"
            timeout={800}
            in={con.state.alert.show}
            easing={{
                enter: "cubic-bezier(0, 1.45, .8, 1)",
                exit: "linear"
            }}
            onExited={() =>
                // con.dispatch({
                //     type: 'alertreset',
                // })
                
                dispatch(alertreset())
            }
        >
            <Alert
                severity={con.state.alert.type === 'e' ? "error" : con.state.alert.type === 'w' ? "warning" : con.state.alert.type === 'i' ? "info" : "success"}
                onClose={() =>
                    // con.dispatch({
                    //     type: 'alertOff',
                    // })

                    dispatch(alertOff())
                }
            >
                <AlertTitle>{con.state.alert.title}</AlertTitle>
                {con.state.alert.message}
            </Alert>
        </Slide>
    );
}

export default AlertComponent;