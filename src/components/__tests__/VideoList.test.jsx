import { fireEvent, render, screen } from '@testing-library/react';
import VideoList from '../videoList/VideoList';

vi.mock('../../utils/videos.jsx', () => ({
  default: [
    {
      id: 1,
      title: 'React Hooks Crash Course',
      datePublished: '2026-02-05',
      vUrl: 'https://www.youtube.com/embed/one',
    },
    {
      id: 2,
      title: 'System Design Basics',
      datePublished: '2026-02-25',
      vUrl: 'https://www.youtube.com/embed/two',
    },
    {
      id: 3,
      title: 'Career Planning Deep Dive',
      datePublished: '2025-12-15',
      vUrl: 'https://www.youtube.com/embed/three',
    },
  ],
}));

describe('VideoList', () => {
  it('renders the video library heading', () => {
    render(<VideoList />);

    expect(screen.getByRole('heading', { name: /video library/i })).toBeInTheDocument();
  });

  it('happy path: renders a video keyword search input', () => {
    render(<VideoList />);

    expect(screen.getByRole('searchbox', { name: /search videos/i })).toBeInTheDocument();
  });

  it('happy path: filters videos by keyword', () => {
    render(<VideoList />);
    const searchInput = screen.getByRole('searchbox', { name: /search videos/i });

    fireEvent.change(searchInput, { target: { value: 'react' } });

    expect(screen.getByRole('heading', { name: /react hooks crash course/i })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: /system design basics/i })).not.toBeInTheDocument();
  });

  it('sad path: sanitizes script-like input while preserving searchable text', () => {
    render(<VideoList />);
    const searchInput = screen.getByRole('searchbox', { name: /search videos/i });

    fireEvent.change(searchInput, { target: { value: '<script>react</script>' } });

    expect(screen.getByRole('heading', { name: /react hooks crash course/i })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: /system design basics/i })).not.toBeInTheDocument();
  });

  it('happy path: toggles video sort order from newest to oldest to oldest to newest', () => {
    render(<VideoList />);

    const beforeToggle = screen.getAllByRole('heading', { level: 3 }).map((heading) => heading.textContent);
    expect(beforeToggle).toEqual([
      'System Design Basics',
      'React Hooks Crash Course',
      'Career Planning Deep Dive',
    ]);

    fireEvent.click(screen.getByRole('button', { name: /sort:/i }));

    const afterToggle = screen.getAllByRole('heading', { level: 3 }).map((heading) => heading.textContent);
    expect(afterToggle).toEqual([
      'Career Planning Deep Dive',
      'React Hooks Crash Course',
      'System Design Basics',
    ]);
  });

  it('sad path: shows no videos for a non-matching keyword', () => {
    render(<VideoList />);
    const searchInput = screen.getByRole('searchbox', { name: /search videos/i });

    fireEvent.change(searchInput, { target: { value: 'kubernetes' } });

    expect(screen.queryAllByRole('listitem')).toHaveLength(0);
  });
});
