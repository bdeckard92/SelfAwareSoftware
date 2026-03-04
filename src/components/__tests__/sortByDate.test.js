import { sortByDate, SORT_ORDER } from '../../utils/sortByDate';

describe('sortByDate', () => {
  const blogPosts = [
    { episode: 1, title: 'Post 1', dateCreated: '2026-02-05' },
    { episode: 2, title: 'Post 2', dateCreated: '2026-02-12' },
    { episode: 3, title: 'Post 3', dateCreated: '2026-02-01' },
  ];

  const videos = [
    { id: 1, title: 'Video 1', datePublished: '2026-02-05' },
    { id: 2, title: 'Video 2', datePublished: '2026-02-25' },
    { id: 3, title: 'Video 3', datePublished: '2026-02-11' },
  ];

  it('happy path: sorts blog posts newest to oldest', () => {
    const sorted = sortByDate(blogPosts, 'dateCreated', SORT_ORDER.NEWEST);

    expect(sorted.map((post) => post.episode)).toEqual([2, 1, 3]);
  });

  it('happy path: sorts blog posts oldest to newest', () => {
    const sorted = sortByDate(blogPosts, 'dateCreated', SORT_ORDER.OLDEST);

    expect(sorted.map((post) => post.episode)).toEqual([3, 1, 2]);
  });

  it('happy path: sorts videos newest to oldest', () => {
    const sorted = sortByDate(videos, 'datePublished', SORT_ORDER.NEWEST);

    expect(sorted.map((video) => video.id)).toEqual([2, 3, 1]);
  });

  it('happy path: sorts videos oldest to newest', () => {
    const sorted = sortByDate(videos, 'datePublished', SORT_ORDER.OLDEST);

    expect(sorted.map((video) => video.id)).toEqual([1, 3, 2]);
  });

  it('sad path: pushes entries with invalid or missing dates to the end', () => {
    const mixed = [
      { id: 1, datePublished: 'not-a-date' },
      { id: 2, datePublished: '2026-02-11' },
      { id: 3 },
      { id: 4, datePublished: '2026-02-25' },
    ];

    const sorted = sortByDate(mixed, 'datePublished', SORT_ORDER.NEWEST);

    expect(sorted.map((video) => video.id)).toEqual([4, 2, 1, 3]);
  });

  it('sad path: does not mutate the original array', () => {
    const original = [...blogPosts];

    sortByDate(blogPosts, 'dateCreated', SORT_ORDER.OLDEST);

    expect(blogPosts).toEqual(original);
  });
});