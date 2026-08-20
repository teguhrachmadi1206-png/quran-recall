'use-client'

import { DisplayData } from "@/types/quran"

interface DisplaySectionProps {
    data: DisplayData
}

export default function DisplaySection({ data }: DisplaySectionProps) {
    return (
        <section className="display-section">
            <div className="sub-title-row">
                <h2 className="sub-title">Ayah Number:</h2>
                <span>0 Ayahs left</span>
            </div>
            <div className="display-number">
                <div className="display-list">
                    <span></span>
                </div>
                {data.currentAyah > 0 && <h2 className="main-number">{data.currentAyah}</h2>}
            </div>
        </section>
    )
}
