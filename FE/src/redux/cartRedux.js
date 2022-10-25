import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState:{
        products:[],
        quantity:0,
        total:0,
    },
    reducers:{
        addProduct: (state, action) =>{
            state.quantity +=1;
            state.products.push(action.payload);
            state.total +=action.payload.price * action.payload.quantity;
        },
        clearCart: (state) =>{
            state.products = [];
            state.quantity =0;
            state.total = 0;
        },
        removeProduct: (state,action) =>{
            const producId = action.payload;
            state.products = state.products.filter((product) => product._id !== producId);   
        },
        increase: (state, { payload }) => {
            const products = state.products.find((product) => product._id === payload._id);
            products.quantity = products.quantity + 1;
        },
        decrease: (state, { payload }) => {
            const products = state.products.find((product) => product._id === payload._id);
            products.quantity = products.quantity - 1;
        },
        calculateTotal: (state) =>{
            let quantity = 0;
            let total = 0;
            state.products.forEach((product) => {
                quantity += product.quantity;
                total += product.quantity + product.price;
            });
            state.quantity = quantity;
            state.total = total;
        }
    },
});

export const {addProduct, clearCart,removeProduct, calculateTotal,increase,decrease} = cartSlice.actions;
export default cartSlice.reducer;