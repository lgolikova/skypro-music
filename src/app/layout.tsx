import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import ReduxProvider from "../store/ReduxProvider";

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Skypro Music",
    description: "Listen to your favorite music",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <ReduxProvider>
                <body
                    className={`${montserrat.variable}`}
                    suppressHydrationWarning
                >
                    {children}
                </body>
            </ReduxProvider>
        </html>
    );
}
