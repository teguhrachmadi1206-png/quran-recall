'use client'
import { useState, useEffect } from 'react';
import { useMenu } from "@/app/context/MenuContext";
import { getSurahDetailEN, getSurahDetailID, getTafsirID } from "@/lib/quran"
import { generateRandomNumber } from '@/lib/hooks';
import { AyahData, AyahTafsir, SurahData } from '@/types/quran';
import elementsText from '@/lib/text';
import Link from 'next/link';
import "@/app/styles/homepage.css"

export default function Homepage() {
    const { language, setLanguage } = useMenu()
    const [randomAyah, setRandomAyah] = useState({ surah: 0, ayah: 0 })
    const [surahData, setSurahData] = useState<SurahData>()
    const [ayahData, setAyahData] = useState<AyahData>()
    const [ayahTafsir, setAyahTafsir] = useState<AyahTafsir>()
    const [showTafsir, setShowTafsir] = useState(false)
    const [isFetching, setIsFetching] = useState(false)
    const [message, setMessage] = useState("")

    useEffect(() => {
        fetchAyahData()
        if (language === 'id') {
            fetchTafsirData()
        }
        setShowTafsir(false)
    }, [language, randomAyah])

    useEffect(() => {
        getRandomAyah()
    }, [])

    async function getRandomAyah() {
        const randomSurah = (generateRandomNumber(1, 114))
        const data = await getSurahDetailEN(`${randomSurah}`, setMessage)
        setRandomAyah({ surah: randomSurah, ayah: generateRandomNumber(1, data.numberOfAyahs) })
        setShowTafsir(false)
    }

    async function fetchAyahData() {
        setIsFetching(true)
        try {
            let data
            if (randomAyah.surah > 0) {
                switch (language) {
                    case "id":
                        data = await getSurahDetailID(`${randomAyah.surah}`, setMessage)
                        break
                    case "en":
                        data = await getSurahDetailEN(`${randomAyah.surah}`, setMessage)
                        break
                }
                setSurahData(data)
                setAyahData(data.ayahs[randomAyah.ayah - 1])
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

    async function fetchTafsirData() {
        setIsFetching(true)
        try {
            let data
            if (randomAyah.surah > 0) {
                data = await getTafsirID(`${randomAyah.surah}`, setMessage)
                setAyahTafsir(data.filter(item => item.ayah === ayahData?.number)[0])
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

    return (
        <div className="homepage">
            <div className="starting-section">
                <Link href="/murajaah">
                    <button className="main-btn gold">{elementsText[language].start}</button>
                </Link>
            </div>
            <div className="random-ayah-section">
                {ayahData && <div className="random-ayah-container">
                    <h2 className="random-ayah-title">{elementsText[language].daily}</h2>
                    <div className="surah-name-container">
                        <h3 className="content-surah-name">QS {surahData?.title} ({surahData?.number}) : {ayahData?.number}{showTafsir ? " (Tafsir)" : ""}</h3>
                        {language === 'id' && ayahTafsir?.tafsir && <span className="learn-more-btn" onClick={() => setShowTafsir(!showTafsir)} >{!showTafsir ? "Lebih Lanjut" : "Kembali"}</span>}
                    </div>
                    <div className="content-container">
                        {!showTafsir && <div className="ayah-content">
                            <p className="content-arabic-ayah">{ayahData?.arabic.replace(/[۞۩ࣖ۔ࣖۗ]/g, "").replace(/[ۚ]/g, "ۚ ")}</p>
                            <p className="content-translate-ayah">{ayahData?.translation}</p>
                        </div>}
                        {language === 'id' && showTafsir && <div className="tafsir-content">
                            <p className="content-tafsir-ayah">{ayahTafsir?.tafsir}</p>
                        </div>}
                    </div>
                    <button className={`main-btn${isFetching ? " disabled" : ""}`} onClick={getRandomAyah}>{elementsText[language].another}</button>
                </div>}
            </div>
        </div >
    )
}
