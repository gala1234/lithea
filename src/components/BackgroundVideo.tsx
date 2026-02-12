"use client";

import React, { useState } from 'react';
import { DESKTOP_VIDEO_URL, MOBILE_VIDEO_URL, NOISE_SVG_URL } from '@/content/constants';

export const BackgroundVideo = () => {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    return (
        <div className="absolute inset-0 z-0 w-full h-full overflow-hidden bg-[#eaddcf]">
            <video
                autoPlay
                muted
                loop
                playsInline
                onLoadedData={() => setIsVideoLoaded(true)}
                className={`object-cover w-full h-full transition-opacity duration-[2000ms] ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
                key={MOBILE_VIDEO_URL}
            >
                <source src={MOBILE_VIDEO_URL} type="video/mp4" media="(max-width: 768px)" />
                <source src={DESKTOP_VIDEO_URL} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-white/40 mix-blend-overlay"></div>
            <div
                className="absolute inset-0 opacity-[0.07] pointer-events-none mix-blend-multiply"
                style={{ backgroundImage: NOISE_SVG_URL }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-light-bg/90 via-light-bg/50 to-transparent"></div>
        </div>
    );
};
