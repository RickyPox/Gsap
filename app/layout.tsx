import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
    title: "Velvet Pour",
    description: "A GSAP COURSE TO LEARN",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
