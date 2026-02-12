"use client";

import React, { useState, useEffect, useRef } from 'react';
import { DESKTOP_VIDEO_URL, MOBILE_VIDEO_URL, NOISE_SVG_URL } from '@/content/constants';

// Replace this with a high-quality .jpg or .webp of the first frame of your video
const FALLBACK_POSTER = "/path-to-your-poster-image.jpg"; 

export const BackgroundVideo = () => {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        // Attempt to play the video manually
        const attemptPlay = async () => {
            try {
                await video.play();
            } catch (error) {
                // If autoplay is blocked (e.g., Low Power Mode), 
                // the poster image will be displayed automatically.
                console.warn("Autoplay was prevented by the browser/OS:", error);
            }
        };

        attemptPlay();
    }, []);

    return (
        <div className="absolute inset-0 z-0 w-full h-full overflow-hidden bg-[#eaddcf]">
            {/* CSS to hide native iOS play buttons and controls */}
            <style>
                {`
                    video::-webkit-media-controls { display: none !important; }
                    video::-webkit-media-controls-start-playback-button { display: none !important; -webkit-appearance: none; }
                `}
            </style>

            <video
                ref={videoRef}
                key={MOBILE_VIDEO_URL}
                autoPlay
                muted
                loop
                playsInline
                poster={FALLBACK_POSTER} // Critical: Shows this image if video is blocked
                onCanPlayThrough={() => setIsVideoLoaded(true)}
                className={`object-cover w-full h-full pointer-events-none transition-opacity duration-1000 ${
                    isVideoLoaded ? 'opacity-100' : 'opacity-100' 
                }`} // Setting opacity-100 by default so the poster is visible immediately
            >
                <source src={MOBILE_VIDEO_URL} type="video/mp4" media="(max-width: 768px)" />
                <source src={DESKTOP_VIDEO_URL} type="video/mp4" />
            </video>

            {/* Design Overlays */}
            <div className="absolute inset-0 bg-[#F2EFE9]/60 z-10" />
            
            <div
                className="absolute inset-0 opacity-[0.08] pointer-events-none mix-blend-multiply z-20"
                style={{ backgroundImage: `url(${NOISE_SVG_URL})` }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#F8F7F2]/90 via-[#F8F7F2]/50 to-transparent z-30" />
        </div>
    );
};