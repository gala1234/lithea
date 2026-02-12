"use client";

import React, { useState, useEffect, useRef } from 'react';
import { DESKTOP_VIDEO_URL, MOBILE_VIDEO_URL, NOISE_SVG_URL } from '@/content/constants';

export const BackgroundVideo = () => {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current && videoRef.current.readyState >= 3) {
            setIsVideoLoaded(true);
        }
    }, []);

    return (
        <div className="absolute inset-0 z-0 w-full h-full overflow-hidden bg-[#eaddcf]">
            <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                onCanPlay={() => setIsVideoLoaded(true)}
                className={`object-cover w-full h-full transition-opacity duration-[2000ms] ${
                    isVideoLoaded ? 'opacity-100' : 'opacity-0'
                }`}
            >
                <source src={MOBILE_VIDEO_URL} type="video/mp4" media="(max-width: 768px)" />
                <source src={DESKTOP_VIDEO_URL} type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-[#F2EFE9]/60 z-10"></div>

            <div
                className="absolute inset-0 opacity-[0.08] pointer-events-none mix-blend-multiply z-20"
                style={{ 
                    backgroundImage: NOISE_SVG_URL 
                }}
            ></div>=
            <div className="absolute inset-0 bg-gradient-to-t from-[#F8F7F2]/90 via-[#F8F7F2]/50 to-transparent z-30"></div>
        </div>
    );
};