import Header from '@/app/_components/header';
import { Providers } from '@/providers';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Yes Chef',
  description: 'AI-powered culinary chat assistant with Echo billing integration',
  icons: {
    icon: '/yes-chef favicon.png',
    shortcut: '/yes-chef favicon.png',
    apple: '/yes-chef favicon.png',
  },
  openGraph: {
    title: 'Yes Chef',
    description: 'AI-powered culinary chat assistant with Echo billing integration',
    url: 'https://yeschef.app',
    siteName: 'Yes Chef',
    images: [
      {
        url: '/yes-chef favicon.png',
        width: 512,
        height: 512,
        alt: 'Yes Chef - AI Culinary Assistant',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Yes Chef',
    description: 'AI-powered culinary chat assistant with Echo billing integration',
    images: ['/yes-chef favicon.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex h-screen flex-col antialiased`}
      >
        <Providers>
          <Header title="Yes Chef" />
          <div className="min-h-0 flex-1">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
