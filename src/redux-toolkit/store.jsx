import { configureStore } from "@reduxjs/toolkit";
import mealSlice from "./mealSlice/mealSlice.jsx";

const store = configureStore({
    reducer: {
        meal:mealSlice
    }
})

export default store;