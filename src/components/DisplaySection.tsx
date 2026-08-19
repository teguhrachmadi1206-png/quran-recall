'use-client'

interface DisplaySectionProps {
    currentAyah: string
}

export default function DisplaySection({ currentAyah }: DisplaySectionProps) {
    return (
        <section className="display-section">
            <div className="sub-title-row">
                <h2 className="sub-title">Ayah Number:</h2>
                <span>0 Ayahs left</span>
            </div>
            <div className="display-number">
                <div className="display-list">
                    <span></span>
                </div>
                <h2 className="main-number">{currentAyah}</h2>
            </div>
        </section>
    )
}
