import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Devindi Uthapala | QA & Test Automation Engineer",
  description:
    "Portfolio of Devindi Uthapala — QA & Test Automation Engineer specializing in Selenium, Playwright, Cypress, API & performance testing, with a strong full-stack foundation.",
  keywords: [
    "Devindi Uthapala",
    "QA Engineer",
    "Quality Assurance",
    "Test Automation",
    "Selenium",
    "Playwright",
    "Cypress",
    "Postman",
    "API Testing",
    "Software Testing",
    "Uwa Wellassa University",
  ],
  authors: [{ name: "Devindi Uthapala" }],
  openGraph: {
    title: "Devindi Uthapala | QA & Test Automation Engineer",
    description:
      "Detail-obsessed QA & Test Automation Engineer crafting flawless user experiences.",
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
