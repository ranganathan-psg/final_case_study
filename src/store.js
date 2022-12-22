import { configureStore } from "@reduxjs/toolkit";
import reducer from "./redux/reducer";
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3001',
    timeout: 2000,
});

const store = configureStore({
    reducer : reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(
        {
            thunk: {
                extraArgument: axiosInstance,
            }
        }
    )
});

export default store;