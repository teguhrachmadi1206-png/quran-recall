import "../app/globals.css"

const Header = () => {
    return (
        <header>
            <h1 className="title">Quran Recall</h1>
            <span className="title-desc">Test your memorization, one ayah at a time.</span>
            <div className="options-icon">
                <div className="bullet"></div>
                <div className="bullet"></div>
                <div className="bullet"></div>
            </div>
        </header>
    )
}

export default Header