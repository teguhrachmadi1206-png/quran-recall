'use-client'

import { useRef, useEffect } from "react"
import { DisplayData, InputConfig, DetailConfig, Language } from "@/types/config"
import elementsText from "@/lib/text"
import "@/app/styles/displaySection.css"

interface DisplaySectionProps {
    inputConfig: InputConfig
    data: DisplayData
    setData: React.Dispatch<React.SetStateAction<DisplayData>>
    detailConfig: DetailConfig
    setDetailConfig: React.Dispatch<React.SetStateAction<DetailConfig>>
    language: Language
}

export default function DisplaySection({
    inputConfig,
    data,
    language,
    setData,
    detailConfig,
    setDetailConfig
}: DisplaySectionProps) {
    const listEndRef = useRef<HTMLSpanElement>(null)


    useEffect(() => {
        if (data.ayahList.length > 0) {
            listEndRef.current?.scrollIntoView({ behavior: "smooth", block: "center" })
        }
    }, [data.history])

    function showDetail(id: number) {
        if (id === data.currentAyah) {
            if (detailConfig.displayArabic || detailConfig.displayLatin || detailConfig.displayTranslation) {
                setDetailConfig({
                    displayArabic: false,
                    displayLatin: false,
                    displayTranslation: false
                })
            } else {
                setDetailConfig({
                    displayArabic: true,
                    displayLatin: true,
                    displayTranslation: true
                })
            }
        } else {
            setData((prev) => ({
                ...prev, currentAyah: id
            }))
            setDetailConfig({
                displayArabic: true,
                displayLatin: true,
                displayTranslation: true
            })
        }
    }

    return (
        <section className="display-section">
            <div className="sub-title-row">
                <h2 className="sub-title">{elementsText[language].subTitle2}</h2>
                {inputConfig.noRepeat && data.ayahList.length > 0 && <span>{data.ayahList.length - data.history.length} {elementsText[language].ayahsLeft}</span>}
            </div>
            <div className="display-number">
                <div className="display-list">
                    {data.history
                        ? data.history.map((num, index) =>
                            <span
                                className={`list-number${num === data.currentAyah ? ' active' : ''}`}
                                key={index}
                                onClick={() => showDetail(num)}>
                                {num}
                            </span>
                        )
                        : null
                    }
                    <span ref={listEndRef}></span>
                </div>
                {data.currentAyah > 0 && <h2 className="main-number">{data.currentAyah}</h2>}
            </div>
        </section>
    )
}
