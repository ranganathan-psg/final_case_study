import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducer from './redux/reducer'
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3001',
    timeout: 2000,
});

function render(
    ui,
    {
        initialState,
        store = createStore(reducer, applyMiddleware(thunk.withExtraArgument(axiosInstance))),
        ...renderOptions
    } = {}
) {
    function Wrapper({ children }) {
        return <Provider store={store}>{children}</Provider>
    }
    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { render }