'use client'
import { useMenu } from "@/app/context/MenuContext";
import elementsText from "@/lib/text"
import "@/app/styles/howToUse.css"

export default function HowToUse() {
    const { language, setLanguage } = useMenu()

    return (
        <div className="how-to-use-container">
            <div className="how-to-use-header">
                <h2 className="how-to-title">{elementsText[language].howToDesc.header}<span>{elementsText[language].howToDesc.version}</span></h2>
                <p className="how-to-header-desc">{elementsText[language].howToDesc.mainDesc}</p>
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
        </div>
    )
}
