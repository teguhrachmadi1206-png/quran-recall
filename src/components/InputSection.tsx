'use client'

import { useState } from "react";
import { SurahList, SurahHead, SurahData, InputConfig, DisplayData } from "@/types/quran";
import { generateRandomList, generateRandomNumber } from "@/lib/hooks";

interface InputSectionProps {
    surahList: SurahList
    surah: string
    selectSurah: React.Dispatch<React.SetStateAction<string>>
    surahData: SurahData | undefined
    config: InputConfig
    setConfig: React.Dispatch<React.SetStateAction<InputConfig>>
    displayData: DisplayData
    setDisplayData: React.Dispatch<React.SetStateAction<DisplayData>>
}

export default function InputSection({
    surahList,
    surah,
    selectSurah,
    surahData,
    config,
    setConfig,
    displayData,
    setDisplayData
}: InputSectionProps) {
    const ayahRange = surahData && Array.from({ length: surahData.numberOfAyahs }, (_, i) => i + 1)
    const isSessionFinished = config.firstAyah === 1 && config.lastAyah === surahData?.numberOfAyahs
        && displayData.history.length === (config.lastAyah - config.firstAyah + 1)
    const isLastSurah = Number(surah) === 114
    const invalidConfig = config.firstAyah >= config.lastAyah

    function newSessionNoRepeat() {
        const list = generateRandomList(config.firstAyah, config.lastAyah)
        setDisplayData({
            ayahList: list,
            currentIndex: 0,
            currentAyah: list[0],
            history: [list[0]]
        })
    }

    function newSessionWithRepeat() {
        const current = generateRandomNumber(config.firstAyah, config.lastAyah)
        setDisplayData({
            ayahList: [],
            currentIndex: 0,
            currentAyah: current,
            history: [current]
        })
    }

    function nextNumberNoRepeat() {
        if (displayData.history.length === (config.lastAyah - config.firstAyah + 1)) {
            return
        } else {
            setDisplayData((prev) => ({
                ...prev,
                currentIndex: prev.currentIndex + 1,
                currentAyah: prev.ayahList[prev.currentIndex + 1],
                history: [...prev.history, prev.ayahList[prev.currentIndex + 1]]
            }))
        }
    }

    function nextNumberWithRepeat() {
        const current = generateRandomNumber(config.firstAyah, config.lastAyah)
        setDisplayData((prev) => ({
            ...prev,
            currentAyah: current,
            history: [...prev.history, current]
        }))
    }

    function mainButtonHandler() {
        if (invalidConfig) {
            return
        }

        if (config.noRepeat) {
            if (displayData.history.length > 0) {
                nextNumberNoRepeat()
            } else {
                newSessionNoRepeat()
            }
        } else {
            if (displayData.history.length > 0) {
                nextNumberWithRepeat()
            } else {
                newSessionWithRepeat()
            }
        }
    }

    function nextSurahHandler() {
        selectSurah(prev => `${Number(prev) + 1}`)
    }

    return (
        <section className="input-section">
            <h2 className="sub-title">Surah:</h2>
            <div className="input-data">
                <div className="select-container">
                    <select
                        name="surah"
                        className="input-item"
                        onChange={(e) => selectSurah(e.currentTarget.value)}
                        value={surah}
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
                <button className="main-btn" onClick={mainButtonHandler}>Generate
                </button>
                {isSessionFinished && !isLastSurah && <button className="main-btn" onClick={nextSurahHandler}>Next Surah
                </button>}
            </div>
        </section>
    )
}
