import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

type Language = 'English' | 'Marathi';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const LANGUAGE_STORAGE_KEY = 'mpcb-language';

// Declare Google Translate types
declare global {
    interface Window {
        google: {
            translate: {
                TranslateElement: new (options: {
                    pageLanguage: string;
                    includedLanguages: string;
                    autoDisplay: boolean;
                }, elementId: string) => void;
            };
        };
        googleTranslateElementInit: () => void;
    }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguageState] = useState<Language>(() => {
        const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);

        // Check cookie as source of truth if available
        const cookies = document.cookie.split(';');
        const googtrans = cookies.find(c => c.trim().startsWith('googtrans='));

        if (googtrans && googtrans.includes('/en/mr')) {
            return 'Marathi';
        }

        return (stored === 'Marathi' ? 'Marathi' : 'English') as Language;
    });

    // Initialize Google Translate script
    useEffect(() => {
        // Add Google Translate script if not already added
        if (!document.getElementById('google-translate-script')) {
            const script = document.createElement('script');
            script.id = 'google-translate-script';
            script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
            script.async = true;
            document.body.appendChild(script);

            // Initialize Google Translate
            window.googleTranslateElementInit = () => {
                new window.google.translate.TranslateElement(
                    {
                        pageLanguage: 'en',
                        includedLanguages: 'en,mr',
                        autoDisplay: false
                    },
                    'google_translate_element'
                );
            };
        }
    }, []);

    const setLanguage = (lang: Language) => {
        // Update local storage
        localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);

        // Update Cookie and Reload
        if (lang === 'Marathi') {
            document.cookie = 'googtrans=/en/mr; path=/';
            document.cookie = 'googtrans=/en/mr; path=/; domain=' + window.location.hostname;
        } else {
            // To Reset to English/Original, we clear the cookies
            document.cookie = 'googtrans=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC';
            document.cookie = 'googtrans=; path=/; domain=' + window.location.hostname + '; expires=Thu, 01 Jan 1970 00:00:00 UTC';
        }

        setLanguageState(lang);
        window.location.reload();
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {/* Hidden Google Translate element */}
            <div id="google_translate_element" style={{ display: 'none' }}></div>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
