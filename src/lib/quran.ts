import type { SurahEN, SurahID, SurahHead, SurahData } from "@/types/quran"

export async function getSurahENList(): Promise<SurahHead[]> {
    const response = await fetch("https://equran.id/api/en/surah")

    if (!response.ok) {
        throw new Error("Failed to fetch surah list")
    }

    const data = await response.json()
    const numberAndTitle: SurahHead[] = []
    data.data.forEach((surah: SurahEN) =>
        numberAndTitle.push({
            'number': surah.number,
            'title': surah.englishName
        }))

    return numberAndTitle
}

export async function getSurahIDList(): Promise<SurahHead[]> {
    const response = await fetch("https://equran.id/api/v2/surat")

    if (!response.ok) {
        throw new Error("Gagal mengambil daftar surat")
    }

    const data = await response.json()
    const numberAndTitle: SurahHead[] = []
    data.data.forEach((surah: SurahID) =>
        numberAndTitle.push({
            'number': surah.nomor,
            'title': surah.namaLatin
        }))
    return numberAndTitle
}

export async function getSurahDetailEN(surahNumber: string): Promise<SurahData> {
    const response = await fetch(`https://equran.id/api/en/surah/${surahNumber}`)

    if (!response.ok) {
        throw new Error("Failed to fetch surah data")
    }

    const data = await response.json()
    const surahData: SurahData = {
        number: data.data.number,
        title: data.data.englishName,
        titleTranslation: data.data.englishNameTranslation,
        numberOfAyahs: data.data.numberOfAyahs,
        ayahs: data.data.ayahs
    }
    return surahData
}

export async function getSurahDetailID(surahNumber: string): Promise<SurahData> {
    const response = await fetch(`https://equran.id/api/v2/surat/${surahNumber}`)

    if (!response.ok) {
        throw new Error("Failed to fetch surah data")
    }

    const data = await response.json()
    const surahData: SurahData = {
        number: data.data.nomor,
        title: data.data.namaLatin,
        titleTranslation: data.data.arti,
        numberOfAyahs: data.data.jumlahAyat,
        ayahs: data.data.ayat
    }
    return surahData
}