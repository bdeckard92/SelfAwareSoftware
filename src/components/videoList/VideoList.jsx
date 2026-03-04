import { useState } from 'react'
import './VideoList.css'
import videos from '../../utils/videos.jsx'
import { filterByKeywords } from '../../utils/filterByKeywords'
import { sortByDate, SORT_ORDER } from '../../utils/sortByDate'
import KeywordSearch from '../search/KeywordSearch'
import SortToggle from '../sort/SortToggle'

const VideoList = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [sortOrder, setSortOrder] = useState(SORT_ORDER.NEWEST)

  const filteredVideos = filterByKeywords(videos, searchTerm, ['title'])
  const sortedVideos = sortByDate(filteredVideos, 'datePublished', sortOrder)

  let renderVideos = [...sortedVideos]
    .map((video) => (
    <li key={video.id} className="video-card">
      <h3>{video.title}</h3>
      <div className="video-frame-wrap">
      <iframe
        src={video.vUrl}
        title={video.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      </div>
    </li>
  ));
  return (
    <>
      <h2>Video Library</h2>
      <KeywordSearch
        ariaLabel="Search videos"
        placeholder="Search videos"
        value={searchTerm}
        onChange={setSearchTerm}
      />
      <SortToggle value={sortOrder} onChange={setSortOrder} />
      <ul className="video-list">{renderVideos}</ul>
    </>
  );
};

export default VideoList;
