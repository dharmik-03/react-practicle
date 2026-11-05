import { configureStore } from "@reduxjs/toolkit";
import inventorySlice  from "../feature/feature.jsx"

const store = configureStore({
    reducer: {
        inventory: inventorySlice
    }
})

export default store