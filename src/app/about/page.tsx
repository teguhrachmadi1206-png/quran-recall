import type { Metadata } from "next";
import AboutContent from "@/components/AboutContent";

export const metadata: Metadata = {
    title: "About",
    description: "Learn more about Quran Recall.",
};

export default function About() {
    return (
        <main>
            <AboutContent />
        </main>
    );
}
