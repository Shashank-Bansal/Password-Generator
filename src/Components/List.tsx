import { Box, FormControlLabel, Switch, FormGroup, TextField, Typography } from '@mui/material';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { uppercase, lowercase, symbol, numeric, length, api, alert, alertOff } from './ReduxToolkit/slice';
import { RootState } from './ReduxToolkit/store';
// import { useContext } from 'react';
// import { AppContext } from './ContextApi/Context';

// import { makeStyles } from "@mui/styles";
// const useStyles = makeStyles({
//     switch: {
//         display: "flex",
//         justifyContent: "space-between",
//     },
// });

const StyledFormControlLabel = styled(FormControlLabel)(() => ({
    display: "flex",
    justifyContent: "space-between",  
    paddingRight: "2%",
}));

const StyledTypography = styled(Typography)(({theme}) => ({
    fontFamily: 'Poppins',
    [theme.breakpoints.only('xs')]: { // 0
        width: '250%',
    },
    [theme.breakpoints.only('sm')]: { // 600
        width: '360%'
    },
    [theme.breakpoints.only('md')]: { // 900
        width: '440%'
    },
    [theme.breakpoints.only('lg')]: { // 1200
        width: '500%'
    },
    [theme.breakpoints.only('xl')]: { // 1536
        width: '500%'
    },
}));



const List: React.FC = () => {
    // const con = useContext(AppContext);
    const dispatch = useDispatch();
    const con = useSelector((state: RootState) => state);
    // const data = useSelector((state: any) => state.store);

    // const classes = useStyles();

    function debounce(t: number = 300) {
        let timer: any;
        return function () {
            clearTimeout(timer);
            timer = setTimeout(() => {
                if (con.state.max < con.state.length) {
                    alertController('alert', 'w', `Password length should not exceed ${con.state.max}`, "Warning");
                    return;
                }
                if (con.state.min > con.state.length) {
                    alertController('alert', 'w', `Password length should be greater than or equal to ${con.state.min}`, "Warning");
                    return;
                }

                // con.dispatch({
                //     type: 'alertOff',
                // })

                dispatch(alertOff());
            }, t);
        };
    }

    function alertController(
        type: string,
        alertType: string,
        message: string,
        title: string,
    ): void {
        // con.dispatch({
        //     type: type,
        //     alertType: alertType,
        //     message: message,
        //     title: title,
        // })

        dispatch(alert({
            alertType: alertType,
            message: message,
            title: title,
        }));
        
        setTimeout(() => {
            // con.dispatch({
            //     type: 'alertOff',
            //     // type: 'alertreset',
            // })

            dispatch(alertOff());
        }, 4000);
    }

    const list = [
        {
            label: 'Add Uppercase Letters',
            checked: con.state.upper,
            type: "uppercase",
        },
        {
            label: 'Add Lowercase Letters',
            checked: con.state.lower,
            type: "lowercase",
        },
        {
            label: 'Include Numbers',
            checked: con.state.number,
            type: "numeric",
        },
        {
            label: 'Include Symbols',
            checked: con.state.symbol,
            type: "symbol",
        },
        {
            label: 'Use API',
            checked: con.state.api,
            type: "api",
        },
    ]

    function handle(type: string) : void {
        if (type === 'uppercase') {
            dispatch(uppercase());
            return;
        }
        if (type === 'lowercase') {
            dispatch(lowercase());
            return;
        }
        if (type === 'numeric') {
            dispatch(numeric());
            return;
        }
        if (type === 'symbol') {
            dispatch(symbol());
            return;
        }
        if (type === 'api') {
            dispatch(api());
            return;
        }
        
        return;
    }

    return (
        <Box>
            <FormGroup>
                <TextField
                    type="number"
                    size='small'
                    value={con.state.length}
                    InputProps={{
                        inputProps: {
                            max: con.state.max, 
                            min: con.state.min
                        },
                        startAdornment: <StyledTypography variant="body1">Password Length</StyledTypography>
                    }}
                    fullWidth
                    required
                    error={(con.state.length !== undefined || con.state.length != null) && ((con.state.max < con.state.length) || (con.state.min > con.state.length))}
                    helperText={(con.state.max < con.state.length ? `Password length should not exceed ${con.state.max}`: (con.state.min > con.state.length ? `Password length should be greater than or equal to ${con.state.min}` : `Password length must be between ${con.state.min} and ${con.state.max} characters in length` ))}
                    onKeyUp={debounce(1000)}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                        // const v = (e.target as HTMLTextAreaElement).value;
                        // if (con.state.max < ((e.target as HTMLTextAreaElement).value as unknown as number)) {
                        //     alert("Password length should not exceed 30");
                        //     return;
                        // }
                        // if (con.state.min > ((e.target as HTMLTextAreaElement).value as unknown as number)) {
                        //     // setTimeout(()=>{alert("Password length should not exceed 30")}, 2000);
                        //     debounce(2000);

                        //     return;
                        // }

                        // con.dispatch({
                        //     type: 'length',
                        //     value: (e.target as HTMLTextAreaElement).value,
                        // })
                        // const v = (e.target as HTMLTextAreaElement).value;
                        dispatch(length({value: (e.target as HTMLTextAreaElement).value}));
                    }}
                />

                <Slider
                    // value={con.state.length}
                    value={(con.state.length < con.state.min) ? con.state.min : (con.state.length > con.state.max) ? con.state.max : con.state.length}
                    min={con.state.min}
                    max={con.state.max}
                    onChange={(e, v) => {
                        // con.dispatch({
                        //     type: 'length',
                        //     value: v,
                        // })
                        
                        dispatch(length({value: v}));
                    }}
                />

                {list.map((l) =>
                    // <FormControlLabel
                    <StyledFormControlLabel
                        key={l.label}
                        label={l.label}
                        // className={classes.switch}
                        labelPlacement="start"
                        control={<Switch
                            checked={l.checked}
                            onChange={() => {
                                // con.dispatch({
                                //     type: l.type,
                                // });

                                handle(l.type);
                            }}
                        />}
                    />
                )}
            </FormGroup>
        </Box>
    );
}

export default List;