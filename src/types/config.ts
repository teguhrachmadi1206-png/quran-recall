
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

export type aboutItemDesc = {
    itemId: number
    subHeader: string
    subDescs: string[]
}

export type aboutTextObj = {
    header: string
    headerAddition?: string
    mainDesc: string[]
    descItems?: aboutItemDesc[]
}