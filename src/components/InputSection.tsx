'use client'

import { useState } from "react";
import { SurahList, SurahHead, SurahData, InputConfig } from "@/types/quran";

interface InputSectionProps {
    surahList: SurahList
    selectedSurah: string
    selectSurah: React.Dispatch<React.SetStateAction<string>>
    surahData: SurahData | undefined
    config: InputConfig
    setConfig: React.Dispatch<React.SetStateAction<InputConfig>>
}

export default function InputSection({
    surahList,
    selectedSurah,
    selectSurah,
    surahData,
    config,
    setConfig
}: InputSectionProps) {

    const ayahRange = surahData && Array.from({ length: surahData.numberOfAyahs }, (_, i) => i + 1)

    return (
        <section className="input-section">
            <h2 className="sub-title">Surah:</h2>
            <div className="input-data">
                <div className="select-container">
                    <select
                        name="surah"
                        className="input-item"
                        onChange={(e) => selectSurah(e.currentTarget.value)}
                        value={selectedSurah}
                    >
                        <option value={0} disabled hidden>-- Choose Surah --</option>
                        {surahList.map((surah: SurahHead) =>
                            <option key={surah.number} value={surah.number}>{surah.number}. {surah.title}</option>
                        )}
                    </select>
                    <select
                        name="first-number"
                        className="input-number input-item"
                        value={config.firstAyah}
                        onChange={(e) => setConfig((prev) => ({
                            ...prev,
                            firstAyah: Number(e.target.value)
                        }))}>
                        {surahData && ayahRange?.map(number =>
                            <option key={number} value={number}>{number}</option>
                        )}
                    </select>
                    <select
                        name="second-number"
                        className="input-number input-item"
                        value={config.lastAyah}
                        onChange={(e) => setConfig((prev) => ({
                            ...prev,
                            lastAyah: Number(e.target.value)
                        }))}>
                        {surahData && ayahRange?.map(number =>
                            <option key={number} value={number}>{number}</option>
                        )}
                    </select>
                </div>
                <div className="checkbox-container">
                    <input
                        type="checkbox"
                        id="no-repeat"
                        className="main-box input-item"
                        onChange={(e) => setConfig((prev) => ({
                            ...prev,
                            noRepeat: !prev.noRepeat
                        }))}
                        checked={config.noRepeat} />
                    <label htmlFor="no-repeat">No Repeat</label>
                </div>
            </div>
            <div className="buttons">
                <button className="main-btn">Generate
                </button>
                <button className="main-btn">Next Surah
                </button>
            </div>
        </section>
    )
}
