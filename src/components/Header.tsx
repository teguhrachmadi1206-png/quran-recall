'use client'
import { useState, useEffect } from "react";
import { usePathname, useSearchParams } from 'next/navigation';
import { useMenu } from "@/app/context/MenuContext";
import elementsText from "@/lib/text"
import "@/app/styles/header.css"
import Link from 'next/link';

export default function Header() {
    const { isMenuOpen, setIsMenuOpen } = useMenu()
    const { language, setLanguage } = useMenu()

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <header>
            <h2 className="title">Quran Recall</h2>
            <span className="title-desc">{elementsText[language].desc}</span>
            <div className="menu-container">
                <div className="flag-container">
                    <div
                        className={`flag${language === "en" ? ' active' : ''}`}
                        onClick={() => setLanguage('en')}>
                        <span>EN</span>
                    </div>
                    <div
                        className={`flag${language === "id" ? ' active' : ''}`}
                        onClick={() => setLanguage('id')}>
                        <span>ID</span>
                    </div>
                </div>
                <div className="options-icon" onClick={toggleMenu}>
                    <div className="bullet"></div>
                    <div className="bullet"></div>
                    <div className="bullet"></div>
                    {isMenuOpen && <div className="menu">
                        <Link href="/">
                            <span className="menu-item">Home</span>
                        </Link>
                        <Link href="/murajaah">
                            <span className="menu-item">Murajaah</span>
                        </Link>
                        <Link href="/about">
                            <span className="menu-item">About</span>
                        </Link>
                    </div>}
                </div>
            </div>

        </header>
    )
}
