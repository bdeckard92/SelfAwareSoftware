import './VideoList.css'

const VideoList = () => {
  const videos = [
    {
      vUrl: "https://www.youtube.com/embed/vVGseqGSU8Y?si=-2u1cjtSWIXVcBiz",
      id: 1,
      title: "Getting Better Feedback",
    },
    {vUrl: "https://www.youtube.com/embed/qJa2xHA87eM?si=aUr-xoksKGLc5TDB",
      id: 2,
      title: "Expectations at Each Software Engineer Level"
    }
  ];

  let renderVideos = [...videos]
    .sort((a, b) => b.id - a.id)
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
      <ul className="video-list">{renderVideos}</ul>
    </>
  );
};

export default VideoList;
