import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/user.slice';
import thunk from 'redux-thunk';


export default configureStore({
    middleware: [thunk],
    reducer: {
        user: userReducer,
    },
})