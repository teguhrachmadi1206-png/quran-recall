import { Language } from "@/types/config"
import elementsText from "@/lib/text"

interface HeaderProps {
    setIsOptionOpened: React.Dispatch<React.SetStateAction<boolean>>
    language: Language
}

export default function Header({ setIsOptionOpened, language }: HeaderProps) {
    return (
        <header>
            <h1 className="title">Quran Recall</h1>
            <span className="title-desc">{elementsText[language].desc}</span>
            <div className="options-icon" onClick={() => setIsOptionOpened(true)}>
                <div className="bullet"></div>
                <div className="bullet"></div>
                <div className="bullet"></div>
            </div>
        </header>
    )
}
