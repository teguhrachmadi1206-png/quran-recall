'use client'

import { SurahData } from "@/types/quran";

interface DetailSectionProps {
    surahData: SurahData | undefined
}

const DetailSection = ({ surahData }: DetailSectionProps) => {
    return (
        <section className="detail-section">
            <audio />
            <h2 className="sub-title">Ayah Detail</h2>
            <div className="display-ayah">
                <div className="detail-btn-container">
                    <button className="main-btn toggle">Show Arabic</button>
                    <button className="main-btn toggle">Show Latin</button>
                    <button className="main-btn toggle">Show Translation</button>
                    <button className="main-btn toggle all">Show All</button>
                </div>
                <div className="show-detail">
                    <div className="detail-title-row">
                        <h3 className="detail-title" >
                            <span>1.</span><span>{surahData?.title} ({surahData?.titleTranslation}): 1</span>
                        </h3>
                        <button className='audio-button'>▶ Audio</button>
                    </div>
                    <div className="show-ayah">
                        <span></span>
                        <p className="arabic-ayah" >Test Arabic</p>
                        <span></span>
                        <p className="latin-ayah" >Test Latin</p>
                        <span></span>
                        <p className="translate-ayah" >Test Translation</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DetailSection