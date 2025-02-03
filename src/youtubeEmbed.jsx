import React from 'react';

const YouTubeEmbed = () => {
  return (
    <div className="w-full max-w-[100vh] mx-auto p-1 bg-[#330386] hover:from-[#330386] hover:to-purple-900 rounded-lg shadow-lg border border-gray-600"> 
      <div 
        className="mt-4 shadow-xl rounded-lg overflow-hidden" 
        style={{ 
          position: 'relative', 
          paddingBottom: '56.25%', 
          height: 0 
        }}
      >
        <iframe
          src="https://www.youtube.com/embed/sKjV2WWduzo?si=ysCytuCy_JTSWUbE"
          title="About HB SPACE TL"
          className="absolute top-0 left-0 w-full h-full" 
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default YouTubeEmbed;