
export type InputConfig = {
    firstAyah: number
    lastAyah: number
    noRepeat: boolean
}

export type DisplayData = {
    ayahList: number[]
    currentAyah: number
    currentIndex: number
    history: number[]
}

export type DetailConfig = {
    displayArabic: boolean
    displayLatin: boolean
    displayTranslation: boolean
}

export type Language = "en" | "id"