import { render, screen } from '@testing-library/react';
import store from '../store';
import { Provider } from 'react-redux';
import { BrowserRouter, MemoryRouter, Routes } from 'react-router-dom';
import Homepage from './homepage';
test('renders home page ', () => {
    render(
        <MemoryRouter>
             <Homepage />
        </MemoryRouter>        
    );
    expect(screen.getByText(/Jobs/i)).toBeInTheDocument();
    expect(screen.getByText(/ContactUs/i)).toBeInTheDocument();
    expect(screen.getByText(/Coming Soon.../i)).toBeInTheDocument();
});