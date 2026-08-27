'use client'
import { useMenu } from "@/app/context/MenuContext";
import { aboutText, elementsText } from "@/lib/text";
import AboutItem from "@/components/AboutItem";
import Link from 'next/link';

export default function About() {
    const { language, setLanguage } = useMenu()

    return (
        <main>
            <div className="about-page">
                <AboutItem text={aboutText[language].aboutWebText} />
                <AboutItem text={aboutText[language].howToText} />
                <div className="feedback-container">
                    <Link className="main-btn gold"
                        href="https://docs.google.com/forms/d/e/1FAIpQLSeDJxnP9lDfwGXhX22tDyhl_WCryrqveEM85vLsEt_hOYis7g/viewform?usp=publish-editor"
                        target="_blank">
                        {elementsText[language].feedback}
                    </Link>
                </div>
            </div>
        </main>
    );
}
