import { createSlice } from "@reduxjs/toolkit";

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
    min: 4,
    max: 30,
    password: "",
    api: false,
    alert: initialAlert,
};

// type stateType = {
//     upper: boolean;
//     lower: boolean;
//     number: boolean;
//     symbol: boolean;
//     length: number;
//     min: number,
//     max: number,
//     password: string,
//     api: boolean,
//     alert: {
//         type: string,
//         title: string,
//         message: string,
//         show: boolean,
//         display: boolean,
//     }
// };

const stateSlice = createSlice({
    name: 'state',
    initialState: initialstate,
    reducers: {
        uppercase(state) {
            return {
                ...state,
                upper: !state.upper,
            };
        },

        lowercase(state) {
            return {
                ...state,
                lower: !state.lower,
            };
        },

        numeric(state) {
            return {
                ...state,
                number: !state.number,
            };
        },

        symbol(state) {
            return {
                ...state,
                symbol: !state.symbol,
            };
        },

        length(state, action) {
            return {
                ...state,
                length: action.payload.value,
            };
        },

        password(state, action) {
            return {
                ...state,
                password: action.payload.password,
            };
        },

        api(state) {
            return {
                ...state,
                api: !state.api,
            };
        },

        alert(state, action) {
            return {
                ...state,
                alert: {
                    type: action.payload.alertType,
                    message: action.payload.message,
                    title: action.payload.title,
                    show: true,
                    display: true,
                },
            }
        },

        alertOff(state) {
            return {
                ...state,
                alert: {
                    ...state.alert,
                    show: false,
                },
            }
        },

        alertreset(state) {
            return {
                ...state,
                alert: initialAlert,
            }
        },
    },
})

export const { uppercase, lowercase, symbol, numeric, length, api, password, alert, alertOff, alertreset } = stateSlice.actions;

export default stateSlice;