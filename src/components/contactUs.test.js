import {  screen } from '@testing-library/react';
import ContactsUs from './contactsUs';
import store from '../store';
import { render } from '../test-utils';
import { Provider } from 'react-redux';
test('renders home page ', () => {
    render(
        <Provider store={store}>
        <ContactsUs />
    </Provider>        
    );
    const subTitle = screen.getAllByText(/Contact Us/i)[0];
    expect(subTitle).toBeInTheDocument();
    expect(screen.getByText(/Feel Free to contact us any time. We will get back to you as soon as we can!./i)).toBeInTheDocument();
    expect(screen.getByText(/Contact Info/i)).toBeInTheDocument();
    expect(screen.getByText(/info@topjobs.com/i)).toBeInTheDocument();
    expect(screen.getByText(/Find Us on Google Map/i)).toBeInTheDocument();
    expect(screen.getByText(/Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quo beatae quasi assumenda, expedita aliquam minima tenetur maiores neque incidunt repellat aut voluptas hic dolorem sequi ab porro, quia error./i)).toBeInTheDocument();
});