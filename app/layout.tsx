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

export const metadata: Metadata = {
  title: {
    default: "Samea Rasuli | Front-End Developer",
    template: "%s | Samea Rasuli",
  },

  description:
    "Samea Rasuli is a Front-End Developer and Computer Science student passionate about creating modern, responsive, and user-friendly web experiences.",

  keywords: [
    "Samea Rasuli",
    "Front-End Developer",
    "Web Developer",
    "Computer Science Student",
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Portfolio",
  ],

  authors: [
    {
      name: "Samea Rasuli",
    },
  ],

  creator: "Samea Rasuli",

  openGraph: {
    title: "Samea Rasuli | Front-End Developer",
    description:
      "Explore my portfolio, projects, technical skills, and experience in front-end development.",
    siteName: "Samea Rasuli Portfolio",
    type: "website",
    locale: "en_US",
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
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}