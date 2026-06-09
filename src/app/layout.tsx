import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    preload: false,
});

export const metadata: Metadata = {
    title: "Mozammel | Full-Stack Developer Portfolio",
    description:
        "Welcome to my full-stack developer portfolio and custom Headless CMS engine.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth" suppressHydrationWarning>
            <body className={inter.className}>{children}</body>
        </html>
    );
}