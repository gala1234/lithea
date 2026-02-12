"use client";

import React, { useState, useEffect, useRef } from 'react';
import { DESKTOP_VIDEO_URL, MOBILE_VIDEO_URL, NOISE_SVG_URL } from '@/content/constants';

export const BackgroundVideo = () => {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        // Attempt to play the video manually to bypass some mobile restrictions
        const playVideo = async () => {
            if (videoRef.current) {
                try {
                    await videoRef.current.play();
                } catch (err) {
                    // Autoplay likely blocked by Low Power Mode or browser settings
                    console.warn("Autoplay blocked:", err);
                }
            }
        };

        playVideo();
    }, []);

    return (
        <div className="absolute inset-0 z-0 w-full h-full overflow-hidden bg-[#eaddcf]">
            {/* Hide native iOS video controls */}
            <style>
                {`
                    video::-webkit-media-controls { display: none !important; }
                    video::-webkit-media-controls-start-playback-button { display: none !important; -webkit-appearance: none; }
                `}
            </style>

            <video
                ref={videoRef}
                key={MOBILE_VIDEO_URL} // Forces re-render if URL changes
                autoPlay
                muted
                loop
                playsInline
                onCanPlayThrough={() => setIsVideoLoaded(true)}
                className={`object-cover w-full h-full pointer-events-none transition-opacity duration-700 ${
                    isVideoLoaded ? 'opacity-100' : 'opacity-0'
                }`}
            >
                <source src={MOBILE_VIDEO_URL} type="video/mp4" media="(max-width: 768px)" />
                <source src={DESKTOP_VIDEO_URL} type="video/mp4" />
            </video>

            {/* Visual Overlays */}
            <div className="absolute inset-0 bg-[#F2EFE9]/60 z-10" />
            
            <div
                className="absolute inset-0 opacity-[0.08] pointer-events-none mix-blend-multiply z-20"
                style={{ backgroundImage: `url(${NOISE_SVG_URL})` }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#F8F7F2]/90 via-[#F8F7F2]/50 to-transparent z-30" />
        </div>
    );
};