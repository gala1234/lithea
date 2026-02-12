"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { TextTransition } from './TextTransition';

interface BrandBlockProps {
    subtitle: string;
}

export const BrandBlock: React.FC<BrandBlockProps> = ({ subtitle }) => (
    <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-center backdrop-blur-[2px] p-8 rounded-full border border-white/20 bg-white/10 shadow-2xl shadow-black/5"
    >
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-[0.15em] text-primary drop-shadow-sm">
            LITHEA
        </h1>
        <div className="mt-3 h-4">
          <TextTransition>
            <span className="font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase text-subtle-text font-medium ml-1">
              {subtitle}
            </span>
          </TextTransition>
        </div>
    </motion.div>
);
