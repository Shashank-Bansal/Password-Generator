import { configureStore } from "@reduxjs/toolkit";
import stateSlice from "./slice";

const stateStore = configureStore({
    reducer: {
        state : stateSlice.reducer,
    },
});

export default stateStore;
export type RootState = ReturnType<typeof stateStore.getState>;