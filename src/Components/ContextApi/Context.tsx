import { createContext, useReducer } from "react";

const initialAlert = {
    type: "",
    title: "",
    message: "",
    show: false,
    display: false,
}

const initialstate = {
    upper: true,
    lower: false,
    number: false,
    symbol: false,
    length: 16,
    min: 6,
    max: 30,
    password: "",
    api: false,
    alert: initialAlert,
};

type stateType = {
    upper: boolean;
    lower: boolean;
    number: boolean;
    symbol: boolean;
    length: number;
    min: number,
    max: number,
    password: string,
    api: boolean,
    alert: {
        type: string,
        title: string,
        message: string,
        show: boolean,
        display: boolean,
    }
};

interface Props {
    children: React.ReactNode;
}

// const AppContext = createContext<stateType>(initialstate);
const AppContext = createContext<{
    state: stateType;
    dispatch: React.Dispatch<any>;
}> ({
    state: initialstate,
    dispatch: () => null,
});

// const reducer = (state: stateType, action: actionType) => {
const reducer = (state: any, action: any,) => {
    if (action.type === "uppercase") {
        return {
            ...state,
            upper: !state.upper 
        };
    }

    if (action.type === "lowercase") {
        return {
            ...state,
            lower: !state.lower 
        };
    }

    if (action.type === "numeric") {
        return {
            ...state,
            number: !state.number 
        };
    }

    if (action.type === "symbol") {
        return {
            ...state,
            symbol: !state.symbol 
        };
    }

    if (action.type === "length") {
        return {
            ...state,
            length: action.value
        };
    }

    if (action.type === "password"){
        return {
            ...state,
            password: action.password
        };
    }

    if (action.type === "api"){
        return {
            ...state,
            api: !state.api
        };
    }

    if (action.type === "alert") {
        return {
            ...state, 
            alert: {
                type: action.alertType,
                message: action.message,
                title: action.title,
                show: true,
                display: true,
            },
        }
    }

    if (action.type === "alertOff") {
        return {
            ...state, 
            alert: {
                ...state.alert,
                show: false,
            },
        }
    }

    if (action.type === 'alertreset') {
        return {
            ...state,
            alert: initialAlert,
        }
    }

    return state;
};

function AppProvider(props: Props) {
    const [state, dispatch] = useReducer(reducer, initialstate);
    // console.log('dispatch');
    // const updateUpper = () => {
    //     return dispatch({
    //         type: "uppercase",
    //     });
    // };
    // const updateLower = () => {
    //     return dispatch({
    //         type: "lowercase",
    //     });
    // };
    // const updateNumeric = () => {
    //     return dispatch({
    //         type: "numeric",
    //     });
    // };
    // const updateSymbol = () => {
    //     return dispatch({
    //         type: "symbol",
    //     });
    // };

    return (
        <AppContext.Provider
            value={{
                state,
                dispatch,
                // updateUpper,
                // updateLower,
                // updateNumeric,
                // updateSymbol,
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
}

export default AppProvider;
export { AppContext };