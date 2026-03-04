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
    {
      episode: 3,
      title: 'Planning for Growth',
      dateCreated: '2025-12-15',
      body: (
        <article>
          <header>
            <h1>Planning subtitle</h1>
          </header>
          <p>Body three</p>
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

  it('sad path: sanitizes script-like input while still allowing safe search text', () => {
    render(<Blog />);
    const searchInput = screen.getByRole('searchbox', { name: /search blog posts/i });

    fireEvent.change(searchInput, { target: { value: '<script>react</script>' } });

    expect(screen.getByRole('heading', { name: /react performance tips/i })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: /career growth for engineers/i })).not.toBeInTheDocument();
  });

  it('happy path: toggles blog sort order from newest to oldest to oldest to newest', () => {
    render(<Blog />);

    const beforeToggle = screen.getAllByRole('heading', { level: 2 }).map((heading) => heading.textContent);
    expect(beforeToggle).toEqual([
      'Career Growth for Engineers',
      'React Performance Tips',
      'Planning for Growth',
    ]);

    fireEvent.click(screen.getByRole('button', { name: /sort:/i }));

    const afterToggle = screen.getAllByRole('heading', { level: 2 }).map((heading) => heading.textContent);
    expect(afterToggle).toEqual([
      'Planning for Growth',
      'React Performance Tips',
      'Career Growth for Engineers',
    ]);
  });

  it('sad path: shows no blog cards for a non-matching keyword', () => {
    render(<Blog />);
    const searchInput = screen.getByRole('searchbox', { name: /search blog posts/i });

    fireEvent.change(searchInput, { target: { value: 'does-not-exist' } });

    expect(screen.queryAllByRole('heading', { level: 2 })).toHaveLength(0);
  });
});
