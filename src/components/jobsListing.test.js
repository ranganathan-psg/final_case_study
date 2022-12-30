import { screen } from '@testing-library/react';
import JobsListing from './jobsListing';
import store from '../store';
import { render } from '../test-utils';
import { Provider } from 'react-redux';
test('renders job listing ', () => {
    render(<Provider store={store}>
        <JobsListing />
    </Provider>);
    expect(screen.getByText(/Recommended Jobs/i)).toBeInTheDocument();
});

