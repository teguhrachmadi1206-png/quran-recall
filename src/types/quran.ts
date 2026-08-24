
interface AyahAudio {
    [audioId: string]: string
}

export type AyahEN = {
    numberInSurah: number
    textArabic: string
    textLatin: string
    textEnglish: string
    audio: AyahAudio
}

type OtherSurahEN = {
    number: number
    name: string
    englishName: string
    numberOfAyahs: number
}

export type AyahID = {
    nomorAyat: number
    teksArab: string
    teksLatin: string
    teksIndonesia: string
    audio: AyahAudio
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
    audioFull: AyahAudio
}

export type SurahDetailEN = {
    number: number
    name: string
    englishName: string
    englishNameTranslation: string
    numberOfAyahs: number
    revelationType: string
    audioFull: AyahAudio
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
    audioFull: AyahAudio
}

export type SurahDetailID = {
    nomor: number
    nama: string
    namaLatin: string
    jumlahAyat: number
    tempatTurun: string
    arti: string
    deskripsi: string
    audioFull: AyahAudio
    ayat: AyahID[]
    suratSelanjutnya?: OtherSurahID | false
    suratSebelumnya?: OtherSurahID | false
}

export type SurahHead = {
    number: number
    title: string
}

export type SurahList = SurahHead[]

export type AyahData = {
    number: number
    arabic: string
    latin: string
    translation: string
    audio: AyahAudio
}

export type SurahData = {
    number: number
    title: string
    titleTranslation: string
    numberOfAyahs: number
    ayahs: AyahData[]
}

export type AyahTafsirID = {
    ayat: number
    teks: string
}

export type AyahTafsir = {
    ayah: number
    tafsir: string
}