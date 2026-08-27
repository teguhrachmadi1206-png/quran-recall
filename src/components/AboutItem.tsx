import { aboutTextObj } from "@/types/config";
import "@/app/styles/aboutItem.css"

interface AboutItemProps {
    text: aboutTextObj
}

export default function AboutItem({ text }: AboutItemProps) {
    return (
        <div className="about-item-container">
            <div className="about-item-header">
                <h2 className="about-item-title">{text.header}{text.headerAddition && <span>{text.headerAddition}</span>}</h2>
                {text.mainDesc.map((desc, index) => <p key={index} className="about-item-header-desc">{desc}</p>)}
            </div>
            {text.descItems && <div className="about-item-desc-container">
                {text.descItems.map(item =>
                    <div className="about-desc-item" key={item.itemId}>
                        <h3 className="about-desc-sub-header">{item.subHeader}</h3>
                        {item.subDescs.map((desc, index) => <p key={index} className="about-sub-desc">{desc}</p>)}
                    </div>
                )}
            </div>}
        </div>
    )
}
