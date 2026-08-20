'use-client'

import { DisplayData, InputConfig } from "@/types/quran"

interface DisplaySectionProps {
    inputConfig: InputConfig
    data: DisplayData
}

export default function DisplaySection({ inputConfig, data }: DisplaySectionProps) {
    return (
        <section className="display-section">
            <div className="sub-title-row">
                <h2 className="sub-title">Ayah Number:</h2>
                {inputConfig.noRepeat && data.ayahList.length > 0 && <span>{data.ayahList.length - data.history.length} Ayahs left</span>}
            </div>
            <div className="display-number">
                <div className="display-list">
                    {data.history
                        ? data.history.map((num, index) =>
                            <span
                                className="list-number"
                                key={index}                            >
                                {num}
                            </span>
                        )
                        : null
                    }
                </div>
                {data.currentAyah > 0 && <h2 className="main-number">{data.currentAyah}</h2>}
            </div>
        </section>
    )
}
