"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { TextTransition } from './TextTransition';

interface ManifestoProps {
    manifesto: string;
    date: string;
}

export const Manifesto: React.FC<ManifestoProps> = ({ manifesto, date }) => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.2 }}
        className="text-center max-w-xl space-y-4"
    >
        <div className="h-24 md:h-28 flex items-center justify-center">
            <TextTransition>
              <p className="font-serif text-2xl md:text-4xl text-[#2b2b2b] leading-tight italic antialiased drop-shadow-sm">
                {manifesto}
              </p>
            </TextTransition>
        </div>
        
        <div className="h-4">
          <TextTransition>
            <span className="font-sans text-[9px] md:text-[11px] tracking-[0.25em] text-light-text uppercase pt-2">
                {date}
            </span>
          </TextTransition>
        </div>
    </motion.div>
);
