'use client'

import Header from "@/components/Header";
import InputSection from "@/components/InputSection";
import DisplaySection from "@/components/DisplaySection";
import DetailSection from "@/components/DetailSection";
import { getSurahDetailEN, getSurahDetailID, getSurahENList, getSurahIDList } from "@/lib/quran"
import { useState, useEffect } from "react"
import { SurahHead, SurahData, InputConfig } from "@/types/quran";

export default function QuranApp() {
    const [language, setLanguage] = useState("en")
    const [surahList, setSurahList] = useState<SurahHead[]>([])
    const [selectedSurah, setSelectedSurah] = useState("0")
    const [surahData, setSurahData] = useState<SurahData>()
    const [inputConfig, setInputConfig] = useState<InputConfig>({ firstAyah: 1, lastAyah: 1, noRepeat: true })
    const [display, setDisplay] = useState()
    const [detailConfig, setDetailConfig] = useState()

    useEffect(() => {
        async function fetchSurahList() {
            const datas = language === "id"
                ? await getSurahIDList()
                : await getSurahENList()
            setSurahList(datas)
        }
        fetchSurahList()
    }, [language])

    useEffect(() => {
        async function fetchSurahData() {
            const data = language === "id"
                ? await getSurahDetailID(selectedSurah)
                : await getSurahDetailEN(selectedSurah)
            setSurahData(data)
            setInputConfig({ firstAyah: 1, lastAyah: data.numberOfAyahs, noRepeat: true })
        }
        fetchSurahData()
    }, [selectedSurah])

    return (
        <>
            <Header />
            <div className="main">
                <InputSection
                    surahList={surahList}
                    selectedSurah={selectedSurah}
                    selectSurah={setSelectedSurah}
                    surahData={surahData}
                    config={inputConfig}
                    setConfig={setInputConfig} />
                <DisplaySection
                    currentAyah={selectedSurah} />
                <DetailSection
                    surahData={surahData} />
            </div>
        </>
    )
}
