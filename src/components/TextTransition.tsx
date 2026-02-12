"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TextTransitionProps {
  children: React.ReactNode;
  className?: string;
}

export const TextTransition: React.FC<TextTransitionProps> = ({ children, className }) => (
    <AnimatePresence mode="wait">
        <motion.div
            key={String(children)} 
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.5 }}
            className={className}
        >
            {children}
        </motion.div>
    </AnimatePresence>
);
