import React from 'react';
import './Video.css';

const Videosection = () => {
  const videoId = 'https://www.youtube.com/embed/liJVSwOiiwg?si=vCmEa9rM-MNaeNzF&autoplay=1'; // Added autoplay parameter

  return (
    <div className='video-main'>
      <div
        style={{
          width: '100vw',
          height: '100vh',
          overflow: 'hidden',
          margin: 'auto',
          backgroundAttachment: 'fixed',
        }}
      >
        <iframe
          title="YouTube Video"
          style={{ width: '86%', height: '80%', marginLeft: '8%', backgroundAttachment: 'fixed' }}
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
