import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from '../home/Home';

describe('Home', () => {
  it('renders the main page heading', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { name: /the self aware software engineer/i })).toBeInTheDocument();
  });
});
