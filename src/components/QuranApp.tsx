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
import elementsText from "@/lib/text";

export default function QuranApp() {
    const [language, setLanguage] = useState<Language>("id")
    const [isOptionOpened, setIsOptionOpened] = useState(false)
    const [surahList, setSurahList] = useState<SurahHead[]>([])
    const [selectedSurah, setSelectedSurah] = useState("0")
    const [surahData, setSurahData] = useState<SurahData>()
    const [inputConfig, setInputConfig] = useState<InputConfig>({ firstAyah: 1, lastAyah: 1, noRepeat: true })
    const [displayData, setDisplayData] = useState<DisplayData>({ ayahList: [], currentIndex: 0, currentAyah: 0, history: [] })
    const [detailConfig, setDetailConfig] = useState({ displayArabic: false, displayLatin: false, displayTranslation: false })
    const [isFetching, setIsFetching] = useState(false)
    const [message, setMessage] = useState("")

    useEffect(() => {
        async function fetchSurahList() {
            setIsFetching(true)
            let datas
            try {
                switch (language) {
                    case "id":
                        datas = await getSurahIDList(setMessage)
                        break
                    case "en":
                        datas = await getSurahENList(setMessage)
                        break
                }
                setSurahList(datas)
            } catch (err) {
                if (err instanceof Error) {
                    setMessage(elementsText[language].message.fetchListFail)
                } else {
                    setMessage(elementsText[language].message.unknownError)
                }
            } finally {
                setIsFetching(false)
            }
        }
        fetchSurahList()
    }, [language])

    useEffect(() => {
        async function fetchSurahData() {
            setIsFetching(true)
            try {
                let data
                switch (language) {
                    case "id":
                        data = await getSurahDetailID(selectedSurah, setMessage)
                        break
                    case "en":
                        data = await getSurahDetailEN(selectedSurah, setMessage)
                        break
                }
                if (surahData?.number !== data.number) {
                    setSurahData(data)
                    setInputConfig({ firstAyah: 1, lastAyah: data.numberOfAyahs, noRepeat: true })
                } else {
                    setSurahData(data)
                }
            } catch (err) {
                if (err instanceof Error) {
                    setMessage(elementsText[language].message.fetchSurahFail)
                } else {
                    setMessage(elementsText[language].message.unknownError)
                }
            } finally {
                setIsFetching(false)
            }
        }
        if (selectedSurah !== "0") {
            fetchSurahData()
        }
    }, [selectedSurah, language])

    useEffect(() => {
        clearSession()
    }, [selectedSurah, inputConfig])

    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => {
                setMessage("")
            }, 2000)

            return () => clearTimeout(timer)
        }
    }, [message])

    function clearSession() {
        setDisplayData({ ayahList: [], currentIndex: 0, currentAyah: 0, history: [] })
        setDetailConfig({ displayArabic: false, displayLatin: false, displayTranslation: false })
    }

    return (
        <>
            <Header
                setIsOptionOpened={setIsOptionOpened}
                language={language}
                setLanguage={setLanguage} />
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
                    language={language}
                    setMessage={setMessage}
                    isFetching={isFetching} />
                <DisplaySection
                    inputConfig={inputConfig}
                    data={displayData}
                    setData={setDisplayData}
                    detailConfig={detailConfig}
                    setDetailConfig={setDetailConfig}
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
                {message && <p className="message">{message}</p>}
            </div>
        </>
    )
}
