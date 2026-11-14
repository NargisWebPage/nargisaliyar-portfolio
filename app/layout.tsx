import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
variable: "--font-inter",
subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
variable: "--font-space-grotesk",
subsets: ["latin"],
});

const siteUrl = "https://nargisaliyar-portfolio.vercel.app/";

export const metadata: Metadata = {
metadataBase: new URL(siteUrl),

title: {
default: "Nargis Aliyar | Front-End Developer",
template: "%n | Nargis Aliyar",
},

description:
"I'm Nargis Aliyar, a Front-End Developer passionate about building modern, responsive, and user-friendly web experiences.",
alternates: {
canonical: "/",
},

icons: {
icon: "/icon.png",
shortcut: "/icon.png",
apple: "/icon.png",
},

authors: [{ name: "Nargis" }],
creator: "Nargis",
publisher: "Nargis Aliyar",

openGraph: {
title: "Nargis Aliyar | Front-End Developer",
description:
"Explore my portfolio, projects, technical skills, and experience in front-end development.",
url: siteUrl,
siteName: "Nargis Aliyar Portfolio",
images: [
{
url: "/opengraph-image.png",
width: 1200,
height: 630,
alt: "Nargis Aliyar - Front-End Developer Portfolio",
},
],
locale: "en_US",
type: "website",
},

twitter: {
card: "summary_large_image",
title: "Nargis Aliyar | Front-End Developer",
description:
"Explore my portfolio, projects, technical skills, and experience in front-end development.",
images: ["/opengraph-image.png"],
},




robots: {
index: true,
follow: true,
googleBot: {
index: true,
follow: true,
},
},
};

export default function RootLayout({
children,
}: LayoutProps<"/">) {
return (
<html
lang="en"
className={`dark ${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
> <body className="min-h-full flex flex-col"> <ThemeProvider>{children}</ThemeProvider> </body> </html>
);
}