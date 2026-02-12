"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TextTransition } from './TextTransition';
import { joinWaitlist } from '../app/actions/waitlist';

interface WaitlistFormProps {
    placeholder: string;
    successMessage: string;
}

export const WaitlistForm: React.FC<WaitlistFormProps> = ({ placeholder, successMessage }) => {
    const [email, setEmail] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        // Creamos el FormData que espera tu Action
        const formData = new FormData();
        formData.append('email', email);

        const result = await joinWaitlist(formData);

        if (result.success) {
            setIsSubmitted(true);
        } else {
            alert("Error: " + result.error);
        }
        
        setIsLoading(false);
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
                        placeholder={isLoading ? "Sending..." : placeholder}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        disabled={isLoading}
                        className="w-full bg-white/80 backdrop-blur-xl border border-primary-light text-text placeholder:text-placeholder-text font-sans text-xs py-4 px-6 rounded-none focus:outline-none focus:bg-white/90 focus:border-primary transition-all duration-500 text-center shadow-lg shadow-primary/5 disabled:opacity-50"
                    />
                    <button
                        type="submit"
                        aria-label="Submit email"
                        disabled={isLoading}
                        className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 disabled:hidden"
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