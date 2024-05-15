import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name : 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        // state will be modified according to action
        addItem: (state, action) =>{
            // mutating the state here
            state.items.push(action.payload);
        },
        removeItem: (state)=>{
            state.items.pop();
        },
        clearCart: (state) => {
            state.items.length = 0;
        },
    }
});

console.log(cartSlice);


export default cartSlice.reducer;
export const {addItem, removeItem, clearCart} =  cartSlice.actions;