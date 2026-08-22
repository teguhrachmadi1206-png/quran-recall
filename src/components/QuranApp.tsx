'use client'
import { useState, useEffect } from "react"
import { SurahHead, SurahData } from "@/types/quran";
import { DisplayData, InputConfig, Language } from "@/types/config";
import { getSurahDetailEN, getSurahDetailID, getSurahENList, getSurahIDList } from "@/lib/quran"
import Header from "@/components/Header";
import InputSection from "@/components/InputSection";
import DisplaySection from "@/components/DisplaySection";
import DetailSection from "@/components/DetailSection";
import Options from "./Options";

export default function QuranApp() {
    const [language, setLanguage] = useState<Language>("id")
    const [isOptionOpened, setIsOptionOpened] = useState(false)
    const [surahList, setSurahList] = useState<SurahHead[]>([])
    const [selectedSurah, setSelectedSurah] = useState("0")
    const [surahData, setSurahData] = useState<SurahData>()
    const [inputConfig, setInputConfig] = useState<InputConfig>({ firstAyah: 1, lastAyah: 1, noRepeat: true })
    const [displayData, setDisplayData] = useState<DisplayData>({ ayahList: [], currentIndex: 0, currentAyah: 0, history: [] })
    const [detailConfig, setDetailConfig] = useState({ displayArabic: false, displayLatin: false, displayTranslation: false })

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
            if (surahData?.number !== data.number) {
                setSurahData(data)
                setInputConfig({ firstAyah: 1, lastAyah: data.numberOfAyahs, noRepeat: true })
            } else {
                setSurahData(data)
            }


        }
        if (selectedSurah !== "0") {
            fetchSurahData()
        }
    }, [selectedSurah, language])

    useEffect(() => {
        clearSession()
    }, [selectedSurah, inputConfig])

    function clearSession() {
        setDisplayData({ ayahList: [], currentIndex: 0, currentAyah: 0, history: [] })
        setDetailConfig({ displayArabic: false, displayLatin: false, displayTranslation: false })
    }

    return (
        <>
            <Header
                setIsOptionOpened={setIsOptionOpened}
                language={language} />
            <div className="main">
                <InputSection
                    surahList={surahList}
                    surah={selectedSurah}
                    selectSurah={setSelectedSurah}
                    surahData={surahData}
                    config={inputConfig}
                    setConfig={setInputConfig}
                    displayData={displayData}
                    setDisplayData={setDisplayData}
                    setDetailConfig={setDetailConfig}
                    language={language} />
                <DisplaySection
                    inputConfig={inputConfig}
                    data={displayData}
                    language={language} />
                <DetailSection
                    sessionData={displayData}
                    config={detailConfig}
                    setConfig={setDetailConfig}
                    surahData={surahData}
                    language={language} />
                {isOptionOpened &&
                    <Options
                        setIsOptionOpened={setIsOptionOpened}
                        language={language}
                        setLanguage={setLanguage} />}
            </div>
        </>
    )
}
