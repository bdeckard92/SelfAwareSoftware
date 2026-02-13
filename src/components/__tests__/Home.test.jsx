import { render, screen } from '@testing-library/react';
import Home from '../home/Home';

describe('Home', () => {
  it('renders the main page heading', () => {
    render(<Home />);

    expect(screen.getByRole('heading', { name: /the self aware software engineer/i })).toBeInTheDocument();
  });
});
