import type { Metadata } from "next";
import MurajaahApp from "@/components/MurajaahApp";

export const metadata: Metadata = {
    title: "Murajaah",
    description:
        "Practice Qur'an memorization by recalling verses randomly within a selected range.",
};

export default function Murajaah() {
    return (
        <main>
            <MurajaahApp />
        </main>
    );
}
