import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NavBar from '../navigation/NavBar';

describe('NavBar', () => {
  it('renders the home link', () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>,
    );

    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
  });
});
