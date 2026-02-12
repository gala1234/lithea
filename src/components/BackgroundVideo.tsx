"use client";

import React, { useState, useEffect, useRef } from 'react';
import { DESKTOP_VIDEO_URL, MOBILE_VIDEO_URL, NOISE_SVG_URL } from '@/content/constants';

export const BackgroundVideo = () => {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        // Force autoplay execution for iOS/Safari low-power modes
        const video = videoRef.current;
        if (video) {
            // Ensure muted is set before play attempt
            video.muted = true;
            video.play().catch((e) => {
                console.debug("Autoplay prevented:", e);
            });
        }
    }, []);

    return (
        <div className="absolute inset-0 z-0 w-full h-full overflow-hidden bg-[#eaddcf]">
            {/* Critical CSS to hide native iOS controls/play button */}
            <style>
                {`
                    video::-webkit-media-controls { display: none !important; }
                    video::-webkit-media-controls-start-playback-button { display: none !important; -webkit-appearance: none; }
                `}
            </style>

            <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                // pointer-events-none prevents user interaction that might trigger controls
                className={`object-cover w-full h-full pointer-events-none transition-opacity duration-[2000ms] ${
                    isVideoLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                onCanPlay={() => setIsVideoLoaded(true)}
            >
                <source src={MOBILE_VIDEO_URL} type="video/mp4" media="(max-width: 768px)" />
                <source src={DESKTOP_VIDEO_URL} type="video/mp4" />
            </video>

            {/* Overlays */}
            <div className="absolute inset-0 bg-[#F2EFE9]/60 z-10"></div>

            <div
                className="absolute inset-0 opacity-[0.08] pointer-events-none mix-blend-multiply z-20"
                style={{ 
                    backgroundImage: `url(${NOISE_SVG_URL})` 
                }}
            ></div>

            <div className="absolute inset-0 bg-gradient-to-t from-[#F8F7F2]/90 via-[#F8F7F2]/50 to-transparent z-30"></div>
        </div>
    );
};