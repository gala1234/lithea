"use client";

import React, { useState } from 'react';
import { DESKTOP_VIDEO_URL, MOBILE_VIDEO_URL, NOISE_SVG_URL } from '@/content/constants';

export const BackgroundVideo = () => {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    return (
        <div className="absolute inset-0 z-0 w-full h-full overflow-hidden bg-[#eaddcf]">
            {/* Security CSS to hide native controls if they happen to appear */}
            <style>
                {`
                    video::-webkit-media-controls { display: none !important; }
                    video::-webkit-media-controls-start-playback-button { display: none !important; -webkit-appearance: none; }
                `}
            </style>

            <video
                /* The 'key' prop is vital for React to properly reconcile the video during hydration */
                key={MOBILE_VIDEO_URL}
                autoPlay
                muted
                loop
                playsInline
                className={`object-cover w-full h-full pointer-events-none transition-opacity duration-700 ${
                    isVideoLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                onLoadedData={() => setIsVideoLoaded(true)}
            >
                <source src={MOBILE_VIDEO_URL} type="video/mp4" media="(max-width: 768px)" />
                <source src={DESKTOP_VIDEO_URL} type="video/mp4" />
            </video>

            {/* Color Layer for Contrast (New Style: Bone/Off-white at 60% opacity) */}
            <div className="absolute inset-0 bg-[#F2EFE9]/60 z-10"></div>

            {/* Noise Texture */}
            <div
                className="absolute inset-0 opacity-[0.08] pointer-events-none mix-blend-multiply z-20"
                style={{ 
                    backgroundImage: `url(${NOISE_SVG_URL})` 
                }}
            ></div>

            {/* Bottom Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#F8F7F2]/90 via-[#F8F7F2]/50 to-transparent z-30"></div>
        </div>
    );
};