import { render, screen } from '@testing-library/react';
import Blog from '../blog/Blog';

describe('Blog', () => {
  it('renders the blog page title', () => {
    render(<Blog />);

    expect(screen.getByRole('heading', { name: /blog posts/i })).toBeInTheDocument();
  });
});
