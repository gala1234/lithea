"use client";

import { useState, useEffect } from 'react';
import { translations, Language, Content } from '@/content/translations';

export function useLanguage(): {
    language: Language;
    setLanguage: (lang: Language) => void;
    content: Content;
} {
    const [language, setLanguage] = useState<Language>('en');

    useEffect(() => {
        const userLang = navigator.language || (navigator as any).userLanguage;
        if (userLang && userLang.startsWith('es')) {
            setLanguage('es');
        }
    }, []);

    const content = translations[language];

    return { language, setLanguage, content };
}
