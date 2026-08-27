export const elementsText = {
    en: {
        desc: "Test your Quran memorization, one ayah at a time.",
        language: "Language:",
        howToUse: "How to Use",
        closeOptions: "Close",
        selectSurah: "-- Choose surah --",
        start: "Start Murajaah",
        daily: "Daily Dhikr",
        another: "Get Another",
        subTitle1: "Surah:",
        subTitle2: "Ayah Number:",
        subTitle3: "Ayah Detail:",
        noRepeat: "No Repeat",
        ayahsLeft: "ayahs left",
        nextSurahBtn: "Next Surah",
        generateBtn: {
            generate: "Generate",
            next: "Next Ayah",
        },
        arabicBtn: {
            show: "Show Arabic",
            hide: "Hide Arabic",
        },
        latinBtn: {
            show: "Show Latin",
            hide: "Hide Latin",
        },
        translationBtn: {
            show: "Show Translation",
            hide: "Hide Translation",
        },
        showAllBtn: {
            show: "Show All",
            hide: "Hide All",
        },
        message: {
            chooseSurah: "Please choose a surah first",
            invalidNumber: "Invalid number input",
            noNumber: "No number left",
            fetchListFail: "Failed to fetch surah list",
            fetchSurahFail: "Failed to fetch surah data",
            unknownError: "An unknown error occurred"
        },
        copyright: "© 2026 Teguh Rachmadi. All Rights Reserved",
        feedback: "Please send your feedback for improvements",
    },
    id: {
        desc: "Uji hafalan Quranmu per ayat, satu demi satu",
        language: "Bahasa:",
        howToUse: "Cara Penggunaaan",
        closeOptions: "Tutup",
        selectSurah: "-- Pilih surat --",
        start: "Mulai Murajaah",
        daily: "Dzikir Harian",
        another: "Ayat Lainnya",
        subTitle1: "Surat:",
        subTitle2: "Nomor Ayat:",
        subTitle3: "Detil Ayat:",
        noRepeat: "Tidak Diulang",
        ayahsLeft: "ayat tersisa",
        nextSurahBtn: "Surat Berikutnya",
        generateBtn: {
            generate: "Mulai Acak",
            next: "Ayat Selanjutnya",
        },
        arabicBtn: {
            show: "Tampilkan Teks Arab",
            hide: "Sembunyikan Teks Arab",
        },
        latinBtn: {
            show: "Tampilkan Teks Latin",
            hide: "Sembunyikan Teks Latin",
        },
        translationBtn: {
            show: "Tampilkan Terjemah",
            hide: "Sembunyikan Terjemah",
        },
        showAllBtn: {
            show: "Tampilkan Semua",
            hide: "Sembunyikan Semua",
        },
        message: {
            chooseSurah: "Silakan pilih surat terlebih dahulu",
            invalidNumber: "Input nomor tidak valid",
            noNumber: "Tidak ada nomor tersisa",
            fetchListFail: "Gagal mengambil daftar surat",
            fetchSurahFail: "Gagal mengambil data surat",
            unknownError: "Terjadi error yang tidak diketahui"
        },
        copyright: "© 2026 Teguh Rachmadi. All Rights Reserved",
        feedback: "Berikan kritik dan saran untuk pengembangan",
    },
};

export const aboutText = {
    en: {
        aboutWebText: {
            header: "About Quran Recall",
            headerAddition: " (Ver1.0)",
            mainDesc: [
                "Quran Recall is a simple tool designed to help with Qur'an memorization and murajaah practice. Unlike a typical Qur'an app, Quran Recall is designed to test your ability to recall individual verses by presenting verse numbers randomly within a range you choose.",
                "The idea is simple: to help you discover whether you can truly recall a verse on its own, rather than only remembering it as part of a sequence.",
                "This website was created as a personal project and will continue to evolve based on real-world use and user feedback.",
            ],
            descItems: [
                {
                    itemId: 1,
                    subHeader: "Language",
                    subDescs: [
                        "Available in English and Indonesian."
                    ]
                },
                {
                    itemId: 2,
                    subHeader: "Features",
                    subDescs: [
                        "Daily Dhikr displays one random verse from the entire Qur'an.",
                        "(Indonesian only) For selected verses, tafsir from the Indonesian Ministry of Religious Affairs' Qur'an resources can be viewed by clicking `Learn More` next to the surah name.",
                        "Murajaah provides a practice tool for memorizing Qur'an verses through random verse selection."
                    ]
                },
            ],
        },
        howToText: {
            header: "How to Use Murajaah App",
            headerAddition: " (Ver1.0)",
            mainDesc: [
                "Follow the steps below to generate random verses from the Quran easily:"
            ],
            descItems: [
                {
                    itemId: 1,
                    subHeader: "Choose Surah",
                    subDescs: [
                        "Choose a surah from the available list. The application will load the total number of ayahs for the selected surah automatically.",
                        "You may define a custom ayah range by choosing first and second number at the right side of 'surah selection'.",
                    ]
                },
                {
                    itemId: 2,
                    subHeader: "Select Random Mode",
                    subDescs: [
                        "Repeat Mode ('No Repeat' unchecked): Allows the same ayah to appear more than once.",
                        "No-Repeat Mode ('No Repeat' checked): Ensures each ayah appears only once until all ayahs in the range are exhausted.",
                    ]
                },
                {
                    itemId: 3,
                    subHeader: "Generate Random Ayah",
                    subDescs: [
                        "Click the 'Generate' button to display a random verse based on your settings.",
                        "Click the 'Next Number' button to display a next random verse based on your settings.",
                    ]
                },
                {
                    itemId: 4,
                    subHeader: "Ayah Details",
                    subDescs: [
                        "Click 'show' buttons for toggle display of 'Arabic Text', 'Latin Text', 'Translation' or all detail of the current Ayah.",
                        "Click the 'Next Number' button to display a next random verse based on your settings.",
                    ]
                },
            ]
        }
    },
    id: {
        aboutWebText: {
            header: "Tentang Quran Recall",
            headerAddition: " (Ver1.0)",
            mainDesc: [
                "Quran Recall adalah alat sederhana untuk membantu latihan menghafal dan murajaah Al-Qur'an. Berbeda dari aplikasi Al-Qur'an pada umumnya, Quran Recall dirancang untuk menguji kemampuan mengingat ayat secara mandiri dengan menampilkan nomor ayat secara acak dalam rentang yang kamu tentukan.",
                "Tujuannya sederhana: membantu kamu mengetahui apakah sebuah ayat benar-benar sudah dikuasai, bukan hanya diingat karena mengikuti urutan ayat sebelumnya.",
                "Website ini dibuat sebagai proyek pribadi dan terus dikembangkan berdasarkan pengalaman penggunaan serta masukan dari pengguna.",
            ],
            descItems: [
                {
                    itemId: 1,
                    subHeader: "Bahasa",
                    subDescs: ["Tersedia dalam Bahasa Inggris dan Indonesia."]
                },
                {
                    itemId: 2,
                    subHeader: "Fitur",
                    subDescs: [
                        "Dzikir Harian menampilkan satu ayat secara acak dari seluruh ayat Al-Quran",
                        "(Khusus Bahasa Indonesia) Pada ayat-ayat tertentu dapat menampilkan tafsir yang bersumber dari Quran Kemenag dengan cara klik `Lebih Lanjut` pada samping nama surat.",
                        "Aplikasi Murajaah untuk latihan menghafal ayat Quran secara acak."
                    ]
                },
            ],
        },
        howToText: {
            header: "Cara Penggunaan Murajaah App",
            headerAddition: " (Ver1.0)",
            mainDesc: [
                "Ikuti langkah-langkah berikut untuk menampilkan ayat Al-Qur’an secara acak:",
            ],
            descItems: [
                {
                    itemId: 1,
                    subHeader: "Pilih Surat",
                    subDescs: [
                        "Pilih surat dari daftar yang tersedia. Aplikasi akan otomatis memuat jumlah ayat pada surat tersebut.",
                        "Anda dapat menentukan rentang ayat yang akan diacak dengan memilih nomor awal dan akhir pada sebelah kanan 'pemilihan surat'.",
                    ]
                },
                {
                    itemId: 2,
                    subHeader: "Pilih Mode Acak",
                    subDescs: [
                        "Mode Pengulangan ('Tidak Diulang' tidak diceklis): Ayat yang sama bisa muncul kembali.",
                        "Mode Tanpa Pengulangan ('Tidak Diulang' diceklis): Setiap ayat hanya akan muncul satu kali sampai semua ayat dalam rentang habis.",
                    ]
                },
                {
                    itemId: 3,
                    subHeader: "Pengacakan Ayat",
                    subDescs: [
                        "Klik tombol 'Acak' untuk menampilkan ayat secara acak sesuai pengaturan.",
                        "Klik tombol 'Nomor Selanjutnya' untuk menampilkan ayat selanjutnya secara acak sesuai pengaturan.",
                    ]
                },
                {
                    itemId: 4,
                    subHeader: "Detail Ayat",
                    subDescs: [
                        "Klik tombol 'Tampilkan' untuk menampilkan atau menyembunyikan 'Teks Arab', 'Teks Latin', 'Terjemahan' atau semua detil dari ayat yang terpilih.",
                        "Anda dapat menampilkan seluruh detil dari ayat-ayat sebelumnya dengan cara klik nomor ayat pada daftar ayat yang sudah muncul.",
                    ]
                },
            ]
        }
    },
}
