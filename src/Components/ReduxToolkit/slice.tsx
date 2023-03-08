import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

type alertType = {
    type: string,
    title: string,
    message: string,
    show: boolean,
    display: boolean,
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
    alert: alertType,
};

const initialAlert: alertType = {
    type: "",
    title: "",
    message: "",
    show: false,
    display: false,
}

const initialstate: stateType = {
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

export const fetchData = createAsyncThunk("fetchingPassword", async (url: string) => {
    const response = await axios.get(url);
    const password = await response.data.password;
    return password;
});

const stateSlice = createSlice({
    name: 'data',
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
    extraReducers: builder => {
        builder
            .addCase(fetchData.pending, () => {

            })
            .addCase(fetchData.fulfilled, (state, action) => {
                return {
                    ...state,
                    password: action.payload
                };
            })
            .addCase(fetchData.rejected, (state) => {
                return {
                    ...state,
                    alert: {
                        type: 'e',
                        message: "Api not working right now. Please generate password without API",
                        title: "Error",
                        show: true,
                        display: true,
                    },
                }
            });
    },
})

export const { uppercase, lowercase, symbol, numeric, length, api, password, alert, alertOff, alertreset } = stateSlice.actions;

export default stateSlice;