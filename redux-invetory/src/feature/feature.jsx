import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    products: [
        {
            id: 1,
            name: "tv",
            price: 45000,
            qty: 0,
            category: "electronics"
        }
    ],
    editVal: null
}

const inventorySlice = createSlice({
    name: "inventory",
    initialState,
    reducers: {
        add: (state, actions) => {
            const newProduct = {
                id: new Date().getTime(),
                ...actions.payload
            }

            state.products.push(newProduct)
        },
        deleteProduct: (state, actions) => {
            state.products = state.products.filter((p) => p.id !== actions.payload)
        },
        setEditVal: (state, actions) => {
            state.editVal = state.products.find((l) => l.id === actions.payload)

        },
        handleEdit: (state, actions) => {
            const index = state.products.findIndex((p) => p.id === state.editVal.id)

            if (index !== -1) {
                state.products[index] = actions.payload
            }


            state.editVal = null

        }
    }
})

export const { add, deleteProduct, setEditVal, handleEdit } = inventorySlice.actions

export default inventorySlice.reducer