import { createSlice } from "@reduxjs/toolkit";
import data from "../data.json";


const products = createSlice({
    name: "product",
    initialState: {
        loading: false,
        products: data,
        error: {},
        cart: [],
        totalTax: 0,
        totalPrice: 0,
        totalQuantity: 0
    },
    reducers: {
        addToCart: (state, action) => {
            state.products.map(item => {
                if (action.payload == item.id) {
                    state.cart = [...state.cart, item]
                }
            })
            state.cart.map(item2 => {
                if (item2.id == action.payload) {
                    state.totalTax += Number(item2.tax)
                    state.totalPrice += Number(item2.price)
                }
            })
        },
        removeFromCart: (state, action) => {
            state.cart.map(item2 => {
                if (item2.id == action.payload) {
                    state.totalTax -= Number(item2.tax)
                    state.totalPrice -= Number(item2.price)
                }
            })
            const newArr = state.cart.filter(item => item.id !== action.payload)
            state.cart = newArr
        },
        increaseQuantity: (state, action) => {
            let actualPrice;
            state.products.map(item => {
                if (item.id == action.payload) {
                    actualPrice = item.price
                }
            })
            state.cart.map(item => {
                if (item.id == action.payload) {
                    if (item.quantity < 5) {
                        item.quantity += 1
                        item.price += actualPrice
                        state.totalPrice += actualPrice
                    }
                }
            })
        },
        decreaseQuantity: (state, action) => {
            let actualPrice;
            state.products.map(item => {
                if (item.id == action.payload) {
                    actualPrice = item.price
                }
            })
            state.cart.map(item => {
                if (item.id == action.payload) {
                    if (item.quantity > 1) {
                        item.quantity -= 1
                        item.price = item.price - (item.price / item.quantity)
                        state.totalPrice -= actualPrice
                    } if (item.quantity == 1) {
                        item.price = actualPrice
                    }
                }
            })
        },
        checkout: (state) => {
            state.cart = []
            state.totalPrice = 0
            state.totalTax = 0
            state.totalQuantity = 0
        }
    }
})

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, checkout } = products.actions

export default products.reducer