"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Language } from '@/content/translations';

interface LanguageSelectorProps {
    language: Language;
    setLanguage: (lang: Language) => void;
}

const LanguageButton: React.FC<{
    lang: Language;
    currentLang: Language;
    setLanguage: (lang: Language) => void;
}> = ({ lang, currentLang, setLanguage }) => (
    <button
        onClick={() => setLanguage(lang)}
        className={`transition-colors duration-500 ${currentLang === lang ? "text-primary" : "text-disabled-text hover:text-medium-text"}`}
    >
        {lang.toUpperCase()}
    </button>
);

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ language, setLanguage }) => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute top-6 right-6 z-50 flex items-center gap-3 font-sans text-[10px] tracking-[0.2em] font-medium"
    >
        <LanguageButton lang="es" currentLang={language} setLanguage={setLanguage} />
        <span className="text-divider font-light">|</span>
        <LanguageButton lang="en" currentLang={language} setLanguage={setLanguage} />
    </motion.div>
);
