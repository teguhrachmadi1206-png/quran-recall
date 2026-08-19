
type Audio = {
    [audioId: string]: string
}

type AyahEN = {
    numberInSurah: number
    textArabic: string
    textLatin: string
    textEnglish: string
    audio: Audio
}

type OtherSurahEN = {
    number: number
    name: string
    englishName: string
    numberOfAyahs: number
}

type AyahID = {
    nomorAyat: number
    teksArab: string
    teksLatin: string
    teksIndonesia: string
    audio: Audio[]
}

type OtherSurahID = {
    nomor: number
    nama: string
    namaLatin: string
    jumlahAyat: number
}

export type SurahEN = {
    number: number
    name: string
    englishName: string
    englishNameTranslation: string
    numberOfAyahs: number
    revelationType: string
    audioFull: Audio[]
}

export type SurahDetailEN = {
    number: number
    name: string
    englishName: string
    englishNameTranslation: string
    numberOfAyahs: number
    revelationType: string
    audioFull: Audio[]
    ayahs: AyahEN[]
    nextSurah?: OtherSurahEN | false
    previousSurah?: OtherSurahEN | false
}

export type SurahID = {
    nomor: number
    nama: string
    namaLatin: string
    jumlahAyat: number
    tempatTurun: string
    arti: string
    deskripsi: string
    audioFull: Audio[]
}

export type SurahDetailID = {
    nomor: number
    nama: string
    namaLatin: string
    jumlahAyat: number
    tempatTurun: string
    arti: string
    deskripsi: string
    audioFull: Audio[]
    ayat: AyahID[]
    suratSelanjutnya?: OtherSurahID | false
    suratSebelumnya?: OtherSurahID | false
}

export type SurahHead = {
    number: number
    title: string
}

export type SurahList = SurahHead[]

type AyahData = {
    number: number
    arabic: string
    latin: string
    translation: string
    audio: Audio[]
}

export type SurahData = {
    number: number
    title: string
    titleTranslation: string
    numberOfAyahs: number
    ayahs: AyahData[]
}

export type InputConfig = {
    firstAyah: number
    lastAyah: number
    noRepeat: boolean
}