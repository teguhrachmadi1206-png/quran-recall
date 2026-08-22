import { Language } from "@/types/config"
import elementsText from "@/lib/text"
import "@/app/styles/header.css"

interface HeaderProps {
    setIsOptionOpened: React.Dispatch<React.SetStateAction<boolean>>
    language: Language
    setLanguage: React.Dispatch<React.SetStateAction<Language>>
}

export default function Header({ setIsOptionOpened, language, setLanguage }: HeaderProps) {
    return (
        <header>
            <h1 className="title">Quran Recall</h1>
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
                <button className="about-btn" onClick={() => setIsOptionOpened(true)}>About</button>
                {/* <div className="options-icon" onClick={() => setIsOptionOpened(true)}>
                    <div className="bullet"></div>
                    <div className="bullet"></div>
                    <div className="bullet"></div>
                </div> */}
            </div>
        </header>
    )
}
