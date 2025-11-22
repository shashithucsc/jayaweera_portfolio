import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Devindi Uthapala - Cyber Security & Full Stack Developer | Portfolio",
  description: "Passionate Computer Science undergraduate specializing in Cyber Security, Digital Forensics, Secure Software Development, and Modern Web Technologies.",
  keywords: ["Devindi Uthapala", "Cyber Security", "Full Stack Developer", "Uwa Wellassa University", "React", "Next.js", "Secure Coding", "Digital Forensics"],
  authors: [{ name: "Devindi Uthapala" }],
  openGraph: {
    title: "Devindi Uthapala - Cyber Security & Full Stack Developer Portfolio",
    description: "Passionate Computer Science undergraduate specializing in Cyber Security and Modern Web Technologies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
