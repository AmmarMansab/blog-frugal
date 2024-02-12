import React from 'react';
import './Video.css';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

const Videosection = () => {
  return (
    <ParallaxProvider>
      <Parallax className="parallax-container relative h-[90vh] w-full overflow-hidden mb-24">
        <div className="absolute inset-0 bg-gray-900 opacity-50"></div>

        <div className="absolute inset-0">

          <video className="w-full h-full object-cover" autoPlay="true" loop >
            <source src='https://player.vimeo.com/external/307324667.sd.mp4?s=55b690a28d28a196cc6a3f32ec06c9d697f66e21&profile_id=164&oauth2_token_id=57447761' type="video/mp4" />
          </video>
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold"></h1>
        </div>
      </Parallax>
    </ParallaxProvider>
  );
};

export default Videosection;
