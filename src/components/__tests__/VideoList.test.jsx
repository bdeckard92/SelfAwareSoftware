import { fireEvent, render, screen } from '@testing-library/react';
import VideoList from '../videoList/VideoList';

vi.mock('../../utils/videos.jsx', () => ({
  default: [
    {
      id: 1,
      title: 'React Hooks Crash Course',
      vUrl: 'https://www.youtube.com/embed/one',
    },
    {
      id: 2,
      title: 'System Design Basics',
      vUrl: 'https://www.youtube.com/embed/two',
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

  it('sad path: shows no videos for a non-matching keyword', () => {
    render(<VideoList />);
    const searchInput = screen.getByRole('searchbox', { name: /search videos/i });

    fireEvent.change(searchInput, { target: { value: 'kubernetes' } });

    expect(screen.queryAllByRole('listitem')).toHaveLength(0);
  });
});
