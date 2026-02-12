"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TextTransition } from './TextTransition';

interface WaitlistFormProps {
    placeholder: string;
    successMessage: string;
}

export const WaitlistForm: React.FC<WaitlistFormProps> = ({ placeholder, successMessage }) => {
    const [email, setEmail] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Submitted email:", email);
        setIsSubmitted(true);
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.6 }}
            className="mt-14 w-full max-w-sm h-16 flex items-center justify-center"
        >
            {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="relative group w-full">
                    <input
                        type="email"
                        placeholder={placeholder}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full bg-light-bg/60 backdrop-blur-md border border-primary-light text-text placeholder:text-placeholder-text font-sans text-xs py-4 px-6 rounded-none focus:outline-none focus:bg-light-bg/90 focus:border-primary transition-all duration-500 text-center shadow-lg shadow-primary/5"
                    />
                    <button
                        type="submit"
                        aria-label="Submit email"
                        className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"
                    >
                        <span className="text-primary hover:text-primary-hover text-xl">→</span>
                    </button>
                </form>
            ) : (
                <TextTransition>
                    <div className="text-center font-serif text-lg italic text-primary bg-white/30 backdrop-blur-sm py-2 px-4 rounded">
                        {successMessage}
                    </div>
                </TextTransition>
            )}
        </motion.div>
    );
};
