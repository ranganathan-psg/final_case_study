import {  screen } from '@testing-library/react';
import store from '../store';
import { render } from '../test-utils';
import { Provider } from 'react-redux';
import ApplyJob from './applyJob';
test('renders home page ', () => {
    render(
        <Provider store={store}>
        <ApplyJob show={true} />
    </Provider>        
    );
    const subTitle = screen.getAllByText(/APPLY JOB/i)[0];
    expect(subTitle).toBeInTheDocument();
    expect(screen.getByText(/Name/i)).toBeInTheDocument();
    expect(screen.getByText(/Phone Number/i)).toBeInTheDocument();
    expect(screen.getByText(/Email address/i)).toBeInTheDocument();
    expect(screen.getByText(/Experience/i)).toBeInTheDocument();
    const add = screen.getAllByText(/Address/i)[0];
    expect(add).toBeInTheDocument();
});