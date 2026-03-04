import { fireEvent, render, screen } from '@testing-library/react';
import Blog from '../blog/Blog';

vi.mock('../../utils/blogs.jsx', () => ({
  default: [
    {
      episode: 1,
      title: 'React Performance Tips',
      dateCreated: '2026-01-01',
      body: (
        <article>
          <header>
            <h1>React subtitle</h1>
          </header>
          <p>Body one</p>
        </article>
      ),
    },
    {
      episode: 2,
      title: 'Career Growth for Engineers',
      dateCreated: '2026-02-01',
      body: (
        <article>
          <header>
            <h1>Career subtitle</h1>
          </header>
          <p>Body two</p>
        </article>
      ),
    },
  ],
}));

describe('Blog', () => {
  it('renders the blog page title', () => {
    render(<Blog />);

    expect(screen.getByRole('heading', { name: /blog posts/i })).toBeInTheDocument();
  });

  it('happy path: renders a blog keyword search input', () => {
    render(<Blog />);

    expect(screen.getByRole('searchbox', { name: /search blog posts/i })).toBeInTheDocument();
  });

  it('happy path: filters blog cards by title keyword', () => {
    render(<Blog />);
    const searchInput = screen.getByRole('searchbox', { name: /search blog posts/i });

    fireEvent.change(searchInput, { target: { value: 'react' } });

    expect(screen.getByRole('heading', { name: /react performance tips/i })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: /career growth for engineers/i })).not.toBeInTheDocument();
  });

  it('happy path: filters blog cards by body keyword', () => {
    render(<Blog />);
    const searchInput = screen.getByRole('searchbox', { name: /search blog posts/i });

    fireEvent.change(searchInput, { target: { value: 'body two' } });

    expect(screen.getByRole('heading', { name: /career growth for engineers/i })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: /react performance tips/i })).not.toBeInTheDocument();
  });

  it('sad path: shows no blog cards for a non-matching keyword', () => {
    render(<Blog />);
    const searchInput = screen.getByRole('searchbox', { name: /search blog posts/i });

    fireEvent.change(searchInput, { target: { value: 'does-not-exist' } });

    expect(screen.queryAllByRole('heading', { level: 2 })).toHaveLength(0);
  });
});
