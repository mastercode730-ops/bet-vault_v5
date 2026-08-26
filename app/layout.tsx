import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.png',
    apple: '/apple-icon.png',
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://betvaultid.com'),
  title: "BetVault | Online Cricket Betting, Sports Betting & Casino",
  description: "One WhatsApp message and your Bet Vault ID is live in minutes. Cricket, football, casino — one login, real people on the other end.",
  keywords: "cricket betting ID, IPL betting ID, online betting ID India, Bet Vault",
  verification: {
    google: "tZWue2OuKHuG9JDtNVjv5oi1GLn4eZvYwYmMzFkzyX8",
  },
  openGraph: {
    title: "BetVault | Online Cricket Betting, Sports Betting & Casino",
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
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
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
