import { screen } from '@testing-library/react';
import NavBar from './navBar';
import { BrowserRouter } from 'react-router-dom';
import { render } from '../test-utils';
test('renders nav bar', () => {
    render(<BrowserRouter>
        <NavBar />
    </BrowserRouter>);
    expect(screen.getByText(/Top Jobs/i)).toBeInTheDocument();
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/ContactUs/i)).toBeInTheDocument();
    const subTitle = screen.getAllByText(/Jobs/i)[1];
    expect(subTitle).toBeInTheDocument();
});
