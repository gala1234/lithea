"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image'; // Optimized Next.js Image
import { DESKTOP_VIDEO_URL, MOBILE_VIDEO_URL, NOISE_SVG_URL } from '@/content/constants';

// 1. Place your image in the /public folder (e.g., public/poster-mobile.jpg)
const FALLBACK_POSTER = "/poster-mobile.jpg"; 

export const BackgroundVideo = () => {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const handlePlay = async () => {
            try {
                // Next.js hydration can sometimes delay the play() call
                await video.play();
                setIsVideoPlaying(true);
            } catch (err) {
                // Low Power Mode detected or autoplay blocked
                console.warn("Autoplay prevented. Showing Next.js optimized poster.");
                setIsVideoPlaying(false);
            }
        };

        handlePlay();
    }, []);

    return (
        <div className="absolute inset-0 z-0 w-full h-full overflow-hidden bg-[#eaddcf]">
            <style>
                {`
                    video::-webkit-media-controls { display: none !important; }
                    video::-webkit-media-controls-start-playback-button { display: none !important; -webkit-appearance: none; }
                    video { pointer-events: none !important; }
                `}
            </style>

            {/* 2. NEXT.JS OPTIMIZED POSTER 
               - 'priority' makes it load immediately
               - 'fill' makes it cover the container
            */}
            <div className={`absolute inset-0 z-0 transition-opacity duration-1000 ${
                isVideoPlaying ? 'opacity-0' : 'opacity-100'
            }`}>
                <Image
                    src={FALLBACK_POSTER}
                    alt="Lithoramica Background"
                    fill
                    priority
                    className="object-cover"
                    sizes="100vw"
                />
            </div>

            {/* 3. VIDEO ELEMENT */}
            <video
                ref={videoRef}
                key={MOBILE_VIDEO_URL}
                autoPlay
                muted
                loop
                playsInline
                onPlaying={() => setIsVideoPlaying(true)}
                className={`absolute inset-0 z-0 object-cover w-full h-full transition-opacity duration-1000 ${
                    isVideoPlaying ? 'opacity-100' : 'opacity-0'
                }`}
            >
                <source src={MOBILE_VIDEO_URL} type="video/mp4" media="(max-width: 768px)" />
                <source src={DESKTOP_VIDEO_URL} type="video/mp4" />
            </video>

            {/* Design Layers (High Z-Index to stay on top) */}
            <div className="absolute inset-0 bg-[#F2EFE9]/60 z-10" />
            <div
                className="absolute inset-0 opacity-[0.08] pointer-events-none mix-blend-multiply z-20"
                style={{ backgroundImage: `url(${NOISE_SVG_URL})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#F8F7F2]/90 via-[#F8F7F2]/50 to-transparent z-30" />
        </div>
    );
};