import type { SurahEN, SurahID, SurahHead, SurahData, AyahEN, AyahID, AyahData } from "@/types/quran"

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
    const ayahDatas: AyahData[] = []
    await data.data.ayahs.forEach((ayah: AyahEN) => {
        ayahDatas.push({
            number: ayah.numberInSurah,
            arabic: ayah.textArabic,
            latin: ayah.textLatin,
            translation: ayah.textEnglish,
            audio: ayah.audio,
        })
    })

    const surahData: SurahData = {
        number: data.data.number,
        title: data.data.englishName,
        titleTranslation: data.data.englishNameTranslation,
        numberOfAyahs: data.data.numberOfAyahs,
        ayahs: ayahDatas,
    }

    return surahData
}

export async function getSurahDetailID(surahNumber: string): Promise<SurahData> {
    const response = await fetch(`https://equran.id/api/v2/surat/${surahNumber}`)

    if (!response.ok) {
        throw new Error("Failed to fetch surah data")
    }

    const data = await response.json()
    const ayahDatas: AyahData[] = []
    await data.data.ayat.forEach((ayah: AyahID) => {
        ayahDatas.push({
            number: ayah.nomorAyat,
            arabic: ayah.teksArab,
            latin: ayah.teksLatin,
            translation: ayah.teksIndonesia,
            audio: ayah.audio,
        })
    })

    const surahData: SurahData = {
        number: data.data.nomor,
        title: data.data.namaLatin,
        titleTranslation: data.data.arti,
        numberOfAyahs: data.data.jumlahAyat,
        ayahs: ayahDatas
    }

    return surahData
}