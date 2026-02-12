import { render, screen } from '@testing-library/react';
import VideoList from '../videoList/VideoList';

describe('VideoList', () => {
  it('renders the video library heading', () => {
    render(<VideoList />);

    expect(screen.getByRole('heading', { name: /video library/i })).toBeInTheDocument();
  });
});
