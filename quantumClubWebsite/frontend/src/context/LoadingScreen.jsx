import { useState, useEffect } from "react";

const LoadingScreen = ({ onFinish }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black z-50">
      <video 
        className="w-full h-full object-fit"
        autoPlay
        muted
        playsInline
        onEnded={onFinish} // Hide loading screen after video ends
      >
        <source src="/loading-video.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default LoadingScreen;
