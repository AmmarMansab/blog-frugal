import React from 'react';
import './Video.css'

const Videosection = () => {
  const videoId = 'https://www.youtube.com/embed/liJVSwOiiwg?si=vCmEa9rM-MNaeNzF'; // Replace with the actual YouTube video ID

  return (
    <div className='video-main' >
    <div
      style={{
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        // backgroundAttachment: 'fixed',
      }}
    >
      <iframe
        title="YouTube Video"
        style={{ width: '80%', height: '80%' }}
        src={videoId}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
    </div>
  );
};

export default Videosection;
