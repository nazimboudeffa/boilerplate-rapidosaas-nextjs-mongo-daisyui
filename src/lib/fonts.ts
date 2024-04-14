import {
    Montserrat as FontHeading,
    JetBrains_Mono as FontMono,
    Inter as FontSans,
} from "next/font/google"

export const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
})

export const fontHeading = FontHeading({
    subsets: ["latin"],
    variable: "--font-heading",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export const fontMono = FontMono({
    subsets: ["latin"],
    variable: "--font-mono",
})