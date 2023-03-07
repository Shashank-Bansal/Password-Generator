import Button from "@mui/material/Button";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Generate from "./Generate";
import { alert, alertOff, alertreset, password } from "./ReduxToolkit/slice";
import { RootState } from "./ReduxToolkit/store";
// import { useContext } from "react";
// import { AppContext } from "./ContextApi/Context";

const GeneratorButton: React.FC = () => {
    // const con = useContext(AppContext);
    const con = useSelector((state: RootState) => state);
    const dispatch = useDispatch();

    function alertController(
        type: string,
        alertType: string,
        message: string,
        title: string,
        show: boolean,
    ): void {
        // con.dispatch({
        //     type: type,
        //     alertType: alertType,
        //     message: message,
        //     title: title,
        //     show: show,
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

    function checkAndGenerate() {
        if (con.state.length < con.state.min) {
            // alert("Password length should be greater than 5");
            alertController('alert', 'e', `Password length should be greater than or equal than ${con.state.min}`, "Error", true);
            return;
        }

        if (con.state.length > con.state.max) {
            // alert("Password length should not exceed 30");
            alertController('alert', 'e', `Password length should not exceed ${con.state.max}`, "Error", true);
            return;
        }

        if (!con.state.upper && !con.state.lower && !con.state.number && !con.state.symbol) {
            // alertController('alert', 'e', "Please select one or more options from the choices listed above", "Error", true);
            alertController('alert', 'i', "Kindly choose one or more options from the selection provided above", "Info", true);
            return;
        }

        // con.dispatch({
        //     type: 'alertreset',
        // })
        
        dispatch(alertreset());

        if (con.state.api) {
            let url = `https://www.psswrd.net/api/v1/password/?length=${con.state.length}&lower=`;
            url += con.state.lower ? '1' : '0';
            url += '&upper='
            url += con.state.upper ? '1' : '0';
            url += '&int='
            url += con.state.number ? '1' : '0';
            url += '&special='
            url += con.state.symbol ? '1' : '0'

            const fetchApi = async () => {
                try {
                    const response = await axios.get(url);
                    // console.log(response);
                    const s = response.data.password as string;
                    // console.log(s);
                    // con.dispatch({
                    //     type: "password",
                    //     password: s,
                    // })

                    dispatch(password({password: s}));
                }
                catch (e) {
                    // alert("Api not working right now. Please generate password without API.")
                    alertController('alert', 'e', "Api not working right now. Please generate password without API.", "Error", true);
                }
            }
            fetchApi();

            return;
        }

        // con.dispatch({
        //     type: "password",
        //     password: Generate(
        //         con.state.upper,
        //         con.state.lower,
        //         con.state.number,
        //         con.state.symbol,
        //         con.state.length,
        //     )
        // })

        dispatch(password({
            password: Generate(
                con.state.upper,
                con.state.lower,
                con.state.number,
                con.state.symbol,
                con.state.length,
            )
        }));
    }

    return (
        <Button
            variant="contained"
            onClick={checkAndGenerate}
            fullWidth
        >
            Generate Password
        </Button>
    );
}

export default GeneratorButton;