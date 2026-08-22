import { Language } from "@/types/config"
import elementsText from "@/lib/text"

interface OptionsProps {
    setIsOptionOpened: React.Dispatch<React.SetStateAction<boolean>>
    language: Language
    setLanguage: React.Dispatch<React.SetStateAction<Language>>
}

export default function Options({ setIsOptionOpened, language, setLanguage }: OptionsProps) {
    return (
        <div className="options-box">
            <div className="options-header">
                <div className="lang-container">
                    <label htmlFor="select-lang">{elementsText[language].language}</label>
                    <select name="language" id="select-lang" className="select-lang" value={language} onChange={(e) => setLanguage(e.currentTarget.value as Language)}>
                        <option value="en">English</option>
                        <option value="id">Indonesia</option>
                    </select>
                </div>
                <button className="main-btn how-to-btn" onClick={() => setIsOptionOpened(false)}>{elementsText[language].closeOptions}</button>
            </div>
            <div className="how-to-use-header">
                <h2 className="how-to-main-header">{elementsText[language].howToDesc.header}<span>{elementsText[language].howToDesc.version}</span></h2>
                <p className="how-to-desc">{elementsText[language].howToDesc.mainDesc}</p>
            </div>
            <div className="how-to-desc-container">
                <div className="how-to-desc-item">
                    <h3 className="how-to-sub-header">{elementsText[language].howToDesc.subHeader1}</h3>
                    <p className="how-to-desc">{elementsText[language].howToDesc.subDesc1A}</p>
                    <p className="how-to-desc">{elementsText[language].howToDesc.subDesc1B}</p>
                </div>
                <div className="how-to-desc-item">
                    <h3 className="how-to-sub-header">{elementsText[language].howToDesc.subHeader2}</h3>
                    <p className="how-to-desc">{elementsText[language].howToDesc.subDesc2A}</p>
                    <p className="how-to-desc">{elementsText[language].howToDesc.subDesc2B}</p>
                </div>
                <div className="how-to-desc-item">
                    <h3 className="how-to-sub-header">{elementsText[language].howToDesc.subHeader3}</h3>
                    <p className="how-to-desc">{elementsText[language].howToDesc.subDesc3A}</p>
                    <p className="how-to-desc">{elementsText[language].howToDesc.subDesc3B}</p>
                </div>
                <div className="how-to-desc-item">
                    <h3 className="how-to-sub-header">{elementsText[language].howToDesc.subHeader4}</h3>
                    <p className="how-to-desc">{elementsText[language].howToDesc.subDesc4A}</p>
                    <p className="how-to-desc">{elementsText[language].howToDesc.subDesc4B}</p>
                </div>
            </div>
            <div className="copyright">
                <p>© 2026 Teguh Rachmadi. All Rights Reserved</p>
            </div>
        </div>
    )
}
