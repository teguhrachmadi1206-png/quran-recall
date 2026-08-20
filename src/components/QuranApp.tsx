'use client'
import { useState, useEffect } from "react"
import { SurahHead, SurahData, InputConfig, Language, DisplayData } from "@/types/quran";
import { getSurahDetailEN, getSurahDetailID, getSurahENList, getSurahIDList } from "@/lib/quran"
import Header from "@/components/Header";
import InputSection from "@/components/InputSection";
import DisplaySection from "@/components/DisplaySection";
import DetailSection from "@/components/DetailSection";

export default function QuranApp() {
    const [language, setLanguage] = useState<Language>("id")
    const [surahList, setSurahList] = useState<SurahHead[]>([])
    const [selectedSurah, setSelectedSurah] = useState("0")
    const [surahData, setSurahData] = useState<SurahData>()
    const [inputConfig, setInputConfig] = useState<InputConfig>({ firstAyah: 1, lastAyah: 1, noRepeat: true })
    const [displayData, setDisplayData] = useState<DisplayData>({ ayahList: [], currentIndex: 0, currentAyah: 0, history: [] })
    const [detailConfig, setDetailConfig] = useState()

    useEffect(() => {
        async function fetchSurahList() {
            let datas
            switch (language) {
                case "id":
                    datas = await getSurahIDList()
                    break
                case "en":
                    datas = await getSurahENList()
                    break
            }
            setSurahList(datas)
        }
        fetchSurahList()
    }, [language])

    useEffect(() => {
        async function fetchSurahData() {
            let data
            switch (language) {
                case "id":
                    data = await getSurahDetailID(selectedSurah)
                    break
                case "en":
                    data = await getSurahDetailEN(selectedSurah)
                    break
            }
            setSurahData(data)
            setInputConfig({ firstAyah: 1, lastAyah: data.numberOfAyahs, noRepeat: true })
        }
        if (selectedSurah !== "0") {
            fetchSurahData()
        }
    }, [selectedSurah])

    useEffect(() => {
        clearSession()
    }, [language, selectedSurah, inputConfig])

    function clearSession() {
        setDisplayData({ ayahList: [], currentIndex: 0, currentAyah: 0, history: [] })
    }

    return (
        <>
            <Header />
            <div className="main">
                <InputSection
                    surahList={surahList}
                    surah={selectedSurah}
                    selectSurah={setSelectedSurah}
                    surahData={surahData}
                    config={inputConfig}
                    setConfig={setInputConfig}
                    displayData={displayData}
                    setDisplayData={setDisplayData} />
                <DisplaySection
                    inputConfig={inputConfig}
                    data={displayData} />
                <DetailSection
                    sessionData={displayData}
                    surahData={surahData} />
            </div>
        </>
    )
}
