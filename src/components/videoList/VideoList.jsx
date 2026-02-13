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

  let renderVideos = videos.map((video) => (
    <li key={video.id}>
        <p>{video.title}{" "}</p>  
      <iframe
        width="560"
        height="315"
        src={video.vUrl}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </li>
  ));
  return (
    <>
      <h2>Video Library</h2>
      <ul>{renderVideos}</ul>
    </>
  );
};

export default VideoList;
