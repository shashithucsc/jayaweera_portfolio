import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Devindi Jayaweera | QA & Software Testing Portfolio",
  description:
    "Portfolio of Devindi Jayaweera — Final-year Computer Science & Technology undergraduate at Uva Wellassa University specializing in Quality Assurance, Playwright & Postman Test Automation, and Full-Stack Web Development.",
  keywords: [
    "Devindi Jayaweera",
    "QA Engineer",
    "Quality Assurance",
    "Software Testing",
    "Playwright",
    "Postman",
    "Manual Testing",
    "Test Automation",
    "Uva Wellassa University",
    "React.js",
    "Django",
    "Node.js",
  ],
  authors: [{ name: "Devindi Jayaweera" }],
  openGraph: {
    title: "Devindi Jayaweera | QA & Software Testing Portfolio",
    description:
      "Computer Science & Technology undergraduate specializing in QA, Test Automation (Playwright, Postman), and Full-Stack Development.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500;1,600;1,700&family=Poppins:wght@300;400;500;600;700&display=swap"
        />
      </head>
      <body className="antialiased bg-ink text-cream">{children}</body>
    </html>
  );
}
