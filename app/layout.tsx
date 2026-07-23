import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://betvault.in'),
  title: "Bet Vault — Cricket Betting IDs, Sorted Fast",
  description: "One WhatsApp message and your Bet Vault ID is live in minutes. Cricket, football, casino — one login, real people on the other end.",
  keywords: "cricket betting ID, IPL betting ID, online betting ID India, Bet Vault",
  openGraph: {
    title: "Bet Vault — Cricket Betting IDs, Sorted Fast",
    description: "One WhatsApp message and your ID is live in minutes. One login, every market.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Bebas+Neue&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
