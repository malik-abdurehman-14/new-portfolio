import './globals.css';
import type { Metadata } from 'next';
import {
  Inter,
  Space_Grotesk,
  JetBrains_Mono,
} from 'next/font/google';

import { SmoothScrollProvider } from '@/components/providers/smooth-scroll';
import { CursorGlow } from '@/components/providers/cursor-glow';
import { ScrollProgress } from '@/components/providers/scroll-progress';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://abdurehman-dev.netlify.app'),

  title: {
    default: 'Abdurehman Malik — Full Stack & Mobile App Developer',
    template: '%s | Abdurehman Malik',
  },

  description:
    'Portfolio of Abdurehman Malik, a full stack web and mobile app developer building modern websites, scalable web applications, SaaS platforms, APIs, and cross-platform mobile apps.',

  icons: {
    icon: '/favicon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },

  keywords: [
    'Abdurehman Malik',
    'Full Stack Developer',
    'Web Application Developer',
    'Mobile App Developer',
    'SaaS Developer',
    'Next.js Developer',
    'React Developer',
    'React Native Developer',
    'Node.js Developer',
    'TypeScript Developer',
    'Frontend Developer',
    'Backend Developer',
    'API Developer',
    'Pakistan Web Developer',
  ],

  authors: [
    {
      name: 'Abdurehman Malik',
    },
  ],

  creator: 'Abdurehman Malik',
  publisher: 'Abdurehman Malik',

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: 'Abdurehman Malik — Full Stack & Mobile App Developer',
    description:
      'Building modern websites, scalable web applications, SaaS platforms, backend systems, and cross-platform mobile apps.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Abdurehman Malik Portfolio',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Abdurehman Malik — Full Stack & Mobile App Developer',
    description:
      'Building modern websites, web applications, SaaS platforms, and mobile apps using scalable technologies.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <SmoothScrollProvider>
          <ScrollProgress />
          <CursorGlow />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}