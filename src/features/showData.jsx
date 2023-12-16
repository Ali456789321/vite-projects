import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


let URL = "https://fakestoreapi.com/products"

export const getUserdata = createAsyncThunk('getData', async () => {
    const response = await fetch(URL)
    const data = response.json()

    try {
        return data
    } catch (error) {
        console.log(error);
    }
})

const initialState = {
    cart: [],
    loading: false,
    error: null,
    cartItems: [],
    value: 1,
    total: 0,
    Addnotification: '',
    Remnotification: '',
    ThankYou: ''
}



export const CounterSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const value = state.value;
            const previousId = action.payload.id;
            const newItem = action.payload;
            const existingProduct = state.cartItems.find(item => item.id === previousId);
            
            if (!existingProduct) {
                state.cartItems.push({ ...newItem, value });
                state.Addnotification = 'Item Added In the Cart'

            } else {
               state.Addnotification = 'Item Already Exist In The Cart'
            }
            state.total = state.cartItems.reduce((total, item) => {
                return total + item.value * item.price;
            }, 0);
        },
        removeItem: (state, action) => {
            const previousId = action.payload.id

            state.cartItems = state.cartItems.filter(item => item.id !== previousId)
             
            state.Remnotification = 'item removed'

            const number = state.total = state.cartItems.reduce((total, item) => {
                return Math.round((total + item.value * item.price) * 100) / 100
            }, 0)

        },
        increaseQuantity: (state, action) => {
            const itemId = action.payload.id
            const existingProduct = state.cartItems.find(item => item.id == itemId)
            if (existingProduct) {
                existingProduct.value += 1
            }

            const number = state.total = state.cartItems.reduce((total, item) => {
                return Math.round((total + item.value * item.price) * 100) / 100
            }, 0)
        },
        decreaseQuantity: (state, action) => {
            const itemId = action.payload.id;
            const existingProductIndex = state.cartItems.findIndex(item => item.id === itemId);

            if (existingProductIndex !== -1) {
                const existingProduct = state.cartItems[existingProductIndex];
                if (existingProduct.value === 1) {
                    state.cartItems.splice(existingProductIndex, 1);
                  
                } else if (existingProduct.value > 1) {
                    existingProduct.value -= 1;
                }

                state.total = state.cartItems.reduce((total, item) => {
                    return Math.round((total + item.value * item.price) * 100) / 100;
                }, 0);
            }
        },
        buyNow: (state) => {
            state.cartItems = []
           
             
            if(state.total == 0) {
                state.ThankYou = 'Your Cart Is Empty'
            }else {
                state.ThankYou = 'Thnak You for buying'
            }

            state.total = state.cartItems.reduce((total, item) => {
                return Math.round((total + item.value * item.price) * 100) / 100;
            }, 0);
        }
    },
    extraReducers: {
        [getUserdata.pending]: (state) => {
            state.loading = true
        },
        [getUserdata.fulfilled]: (state, action) => {
            state.loading = false
            state.cart = action.payload
        },
        [getUserdata.rejected]: (state) => {
            state.loading = false
            state.error = action.payload
        }
    }
})

export const { addItem, removeItem, increaseQuantity, decreaseQuantity, buyNow } = CounterSlice.actions
export default CounterSlice.reducer