'use client'

import { useRef } from "react";
import { DisplayData, SurahData } from "@/types/quran";

interface DetailSectionProps {
    surahData: SurahData | undefined
    sessionData: DisplayData
}

const DetailSection = ({ surahData, sessionData }: DetailSectionProps) => {
    const ayahDetail = surahData?.ayahs.filter(ayah => ayah.number === sessionData.currentAyah)[0]

    return (
        <section className="detail-section">
            <audio />
            <h2 className="sub-title">Ayah Detail</h2>
            <div className="display-ayah">
                <div className="detail-btn-container">
                    <button className="main-btn toggle" onClick={() => console.log(surahData)}>Show Arabic</button>
                    <button className="main-btn toggle">Show Latin</button>
                    <button className="main-btn toggle">Show Translation</button>
                    <button className="main-btn toggle all">Show All</button>
                </div>
                <div className="show-detail">
                    <div className="detail-title-row">
                        <h3 className="detail-title" >
                            <span>{surahData?.number}.</span><span>{surahData?.title} ({surahData?.titleTranslation}): {sessionData?.currentAyah}</span>
                        </h3>
                        <button className='audio-button'>▶ Audio</button>
                    </div>
                    <div className="show-ayah">
                        <span></span>
                        <p className="arabic-ayah" >{ayahDetail?.arabic}</p>
                        <span></span>
                        <p className="latin-ayah" >{ayahDetail?.latin}</p>
                        <span></span>
                        <p className="translate-ayah" >{ayahDetail?.translation}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DetailSection