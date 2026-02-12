"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { TextTransition } from './TextTransition';

interface PageFooterProps {
  footerText: string;
}

export const PageFooter: React.FC<PageFooterProps> = ({ footerText }) => (
    <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.2 }}
        className="absolute bottom-6 w-full text-center"
    >
        <div className="flex flex-col items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-primary/40"></span>
            <div className="h-3">
              <TextTransition>
                <span className="font-sans text-[8px] tracking-[0.3em] text-medium-text uppercase opacity-70">
                  {footerText}
                </span>
              </TextTransition>
            </div>
        </div>
    </motion.footer>
);
