import { SurahList, SurahHead, SurahData } from "@/types/quran";
import { DetailConfig, DisplayData, InputConfig, Language } from "@/types/config";
import { generateRandomList, generateRandomNumber } from "@/lib/hooks";
import { elementsText } from "@/lib/text"
import "@/app/styles/inputSection.css"

interface InputSectionProps {
    surahList: SurahList
    surah: string
    selectSurah: React.Dispatch<React.SetStateAction<string>>
    surahData: SurahData | undefined
    config: InputConfig
    setConfig: React.Dispatch<React.SetStateAction<InputConfig>>
    displayData: DisplayData
    setDisplayData: React.Dispatch<React.SetStateAction<DisplayData>>
    setDetailConfig: React.Dispatch<React.SetStateAction<DetailConfig>>
    language: Language
    setMessage: React.Dispatch<React.SetStateAction<string>>
    isFetching: boolean
}

export default function InputSection({
    surahList,
    surah,
    selectSurah,
    surahData,
    config,
    setConfig,
    displayData,
    setDisplayData,
    setDetailConfig,
    language,
    setMessage,
    isFetching
}: InputSectionProps) {
    const ayahRange = surahData && Array.from({ length: surahData.numberOfAyahs }, (_, i) => i + 1)
    const isLastSurah = Number(surah) === 114
    const isSessionFinished = !isLastSurah && config.noRepeat && config.firstAyah === 1 && config.lastAyah === surahData?.numberOfAyahs
        && displayData.history.length === (config.lastAyah - config.firstAyah + 1)
    const invalidConfig = config.firstAyah >= config.lastAyah

    function newSessionNoRepeat() {
        const list = generateRandomList(config.firstAyah, config.lastAyah)
        setDisplayData({
            ayahList: list,
            currentIndex: 0,
            currentAyah: list[0],
            history: [list[0]]
        })
    }

    function newSessionWithRepeat() {
        const current = generateRandomNumber(config.firstAyah, config.lastAyah)
        setDisplayData({
            ayahList: [],
            currentIndex: 0,
            currentAyah: current,
            history: [current]
        })
    }

    function nextNumberNoRepeat() {
        if (displayData.history.length === (config.lastAyah - config.firstAyah + 1)) {
            setMessage(elementsText[language].message.noNumber)
            return
        } else {
            setDisplayData((prev) => ({
                ...prev,
                currentIndex: prev.currentIndex + 1,
                currentAyah: prev.ayahList[prev.currentIndex + 1],
                history: [...prev.history, prev.ayahList[prev.currentIndex + 1]]
            }))
            setDetailConfig({
                displayArabic: false,
                displayLatin: false,
                displayTranslation: false,
            })
        }
    }

    function nextNumberWithRepeat() {
        const current = generateRandomNumber(config.firstAyah, config.lastAyah)
        setDisplayData((prev) => ({
            ...prev,
            currentAyah: current,
            history: [...prev.history, current]
        }))
        setDetailConfig({
            displayArabic: false,
            displayLatin: false,
            displayTranslation: false,
        })
    }

    function mainButtonHandler() {
        if (surah === "0") {
            setMessage(elementsText[language].message.chooseSurah)
            return
        }
        if (invalidConfig) {
            setMessage(elementsText[language].message.invalidNumber)
            return
        }
        if (config.noRepeat) {
            if (displayData.history.length > 0) {
                nextNumberNoRepeat()
            } else {
                newSessionNoRepeat()
            }
        } else {
            if (displayData.history.length > 0) {
                nextNumberWithRepeat()
            } else {
                newSessionWithRepeat()
            }
        }
    }

    function nextSurahHandler() {
        selectSurah(prev => `${Number(prev) + 1}`)
    }

    return (
        <section className="input-section">
            <h2 className="sub-title">{elementsText[language].subTitle1}</h2>
            <div className="input-data">
                <div className="select-container">
                    <select
                        name="surah"
                        className="input-item"
                        onChange={(e) => selectSurah(e.currentTarget.value)}
                        value={surah}
                    >
                        <option value={0} disabled hidden>{elementsText[language].selectSurah}</option>
                        {surahList.map((surah: SurahHead) =>
                            <option key={surah.number} value={surah.number}>{surah.number}. {surah.title}</option>
                        )}
                    </select>
                    <select
                        name="first-number"
                        className="input-number input-item"
                        value={config.firstAyah}
                        onChange={(e) => setConfig((prev) => ({
                            ...prev,
                            firstAyah: Number(e.target.value)
                        }))}>
                        {surahData && ayahRange?.map(number =>
                            <option key={number} value={number}>{number}</option>
                        )}
                    </select>
                    <select
                        name="second-number"
                        className="input-number input-item"
                        value={config.lastAyah}
                        onChange={(e) => setConfig((prev) => ({
                            ...prev,
                            lastAyah: Number(e.target.value)
                        }))}>
                        {surahData && ayahRange?.map(number =>
                            <option key={number} value={number}>{number}</option>
                        )}
                    </select>
                </div>
                <div className="checkbox-container">
                    <input
                        type="checkbox"
                        id="no-repeat"
                        className="main-box input-item"
                        onChange={(e) => setConfig((prev) => ({
                            ...prev,
                            noRepeat: !prev.noRepeat
                        }))}
                        checked={config.noRepeat} />
                    <label htmlFor="no-repeat">{elementsText[language].noRepeat}</label>
                </div>
            </div>
            <div className="input-buttons-container">
                <button
                    className={`main-btn gold${isFetching ? ' disabled' : ''}`}
                    onClick={mainButtonHandler}
                    disabled={isFetching}>
                    {displayData.currentAyah > 0
                        ? elementsText[language].generateBtn.next
                        : elementsText[language].generateBtn.generate}
                </button>
                {isSessionFinished && <button
                    className={`main-btn${isFetching ? ' disabled' : ''}`}
                    onClick={nextSurahHandler}
                    disabled={isFetching}>
                    {elementsText[language].nextSurahBtn}
                </button>}
            </div>
        </section>
    )
}
