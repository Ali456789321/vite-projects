import { configureStore } from '@reduxjs/toolkit'
import counterReducer  from '../features/showData'

export const store = configureStore({
    reducer: {
        counter: counterReducer
    }
})