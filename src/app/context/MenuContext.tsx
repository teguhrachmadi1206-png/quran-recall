'use client';
import React, { createContext, useContext, useState } from 'react';
import { Language } from '@/types/config';

interface MenuContextType {
    isMenuOpen: boolean;
    setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
    language: Language;
    setLanguage: React.Dispatch<React.SetStateAction<Language>>;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export function MenuProvider({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [language, setLanguage] = useState<Language>("en");
    return (
        <MenuContext.Provider value={{ isMenuOpen, setIsMenuOpen, language, setLanguage }}>
            {children}
        </MenuContext.Provider>
    );
}

export const useMenu = () => {
    const context = useContext(MenuContext);
    if (!context) {
        throw new Error('useMenu must be used within a MenuProvider');
    }
    return context;
}