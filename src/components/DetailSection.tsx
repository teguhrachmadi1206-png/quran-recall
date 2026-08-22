'use client'

import { useRef, useEffect, useState } from "react";
import { SurahData } from "@/types/quran";
import { DisplayData, DetailConfig, Language } from "@/types/config";
import elementsText from "@/lib/text";

interface DetailSectionProps {
    surahData: SurahData | undefined
    config: DetailConfig
    setConfig: React.Dispatch<React.SetStateAction<DetailConfig>>
    sessionData: DisplayData
    language: Language
}

const DetailSection = ({ surahData, config, setConfig, sessionData, language }: DetailSectionProps) => {
    const [isAudioPlayed, setIsAudioPlayed] = useState(false)
    const arabicStartRef = useRef<HTMLSpanElement>(null)
    const latinStartRef = useRef<HTMLSpanElement>(null)
    const translationStartRef = useRef<HTMLSpanElement>(null)
    const ayahDetail = surahData?.ayahs.filter(ayah => ayah.number === sessionData.currentAyah)[0]
    const audioRef = useRef<HTMLAudioElement>(null)
    const audioSrc = ayahDetail?.audio['05']
    const formattedArabic = ayahDetail
        && ayahDetail.arabic
            .replace(/[۞۩ࣖ۔ࣖۗ]/g, "")
            .replace(/[ۚ]/g, "ۚ ")

    useEffect(() => {
        arabicStartRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
    }, [config.displayArabic])

    useEffect(() => {
        latinStartRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
    }, [config.displayLatin])

    useEffect(() => {
        translationStartRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
    }, [config.displayTranslation])

    function toggleArabicHandler() {
        if (sessionData.currentAyah > 0) {
            setConfig((prev) => ({
                ...prev,
                displayArabic: !prev.displayArabic,
            }))
            stopAudio()
        }
    }

    function toggleLatinHandler() {
        if (sessionData.currentAyah > 0) {
            setConfig((prev) => ({
                ...prev,
                displayLatin: !prev.displayLatin,
            }))
        }
    }

    function toggleTranslationHandler() {
        if (sessionData.currentAyah > 0) {
            setConfig((prev) => ({
                ...prev,
                displayTranslation: !prev.displayTranslation,
            }))
        }
    }

    function toggleAllHandler() {
        if (sessionData.currentAyah > 0) {
            if (config.displayArabic || config.displayLatin || config.displayTranslation) {
                setConfig({
                    displayArabic: false,
                    displayLatin: false,
                    displayTranslation: false,
                })
                stopAudio()
            } else {
                setConfig({
                    displayArabic: true,
                    displayLatin: true,
                    displayTranslation: true,
                })
            }
        }
    }

    function toggleAudio() {
        if (audioRef.current && audioSrc && isAudioPlayed) {
            audioRef.current?.pause()
            audioRef.current.currentTime = 0
        } else {
            audioRef.current?.play()
        }
        setIsAudioPlayed(prev => !prev)
        console.log(ayahDetail)
    }

    function stopAudio() {
        if (audioRef.current) {
            audioRef.current?.pause()
            audioRef.current.currentTime = 0
        }
        setIsAudioPlayed(false)
    }

    return (
        <section className="detail-section">
            {audioSrc && sessionData.currentAyah && <audio ref={audioRef} src={audioSrc} onEnded={() => setIsAudioPlayed(false)} />}
            <h2 className="sub-title">{elementsText[language].subTitle3}</h2>
            <div className="display-ayah">
                <div className="detail-btn-container">
                    <button className="main-btn toggle" onClick={toggleArabicHandler}>
                        {elementsText[language].arabicBtn[`${config.displayArabic ? 'hide' : 'show'}`]}
                    </button>
                    <button className="main-btn toggle" onClick={toggleLatinHandler}>
                        {elementsText[language].latinBtn[`${config.displayLatin ? 'hide' : 'show'}`]}
                    </button>
                    <button className="main-btn toggle" onClick={toggleTranslationHandler}>
                        {elementsText[language].translationBtn[`${config.displayTranslation ? 'hide' : 'show'}`]}
                    </button>
                    <button className="main-btn toggle all" onClick={toggleAllHandler}>
                        {elementsText[language].showAllBtn[`${(config.displayTranslation || config.displayArabic || config.displayLatin) ? 'hide' : 'show'}`]}
                    </button>
                </div>
                <div className="show-detail">
                    <div className="detail-title-row">
                        {(config.displayArabic || config.displayLatin || config.displayTranslation) && <h3 className="detail-title" >
                            <span>{surahData?.number}.</span><span>{surahData?.title} ({surahData?.titleTranslation}): {sessionData?.currentAyah}</span>
                        </h3>}
                        {config.displayArabic && <button className='audio-button' onClick={toggleAudio}>{`${isAudioPlayed ? '◼' : '▶'}`} Audio</button>}
                    </div>
                    <div className="show-ayah">
                        <span className="span-ref" ref={arabicStartRef}></span>
                        {config.displayArabic && <p className="arabic-ayah" >{formattedArabic}</p>}
                        <span className="span-ref" ref={latinStartRef}></span>
                        {config.displayLatin && <p className="latin-ayah" >{ayahDetail?.latin}</p>}
                        <span className="span-ref" ref={translationStartRef}></span>
                        {config.displayTranslation && <p className="translate-ayah" >{ayahDetail?.translation}</p>}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DetailSection