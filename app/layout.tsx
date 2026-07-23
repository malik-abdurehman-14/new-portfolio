import './globals.css';
import type { Metadata } from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
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
  title: 'Alex Carter — AI Automation Engineer & Full Stack Developer',
  description:
    'Premium portfolio of Alex Carter — building intelligent AI systems, AI voice agents, workflow automations, and high-end web experiences for global clients.',
  keywords: [
    'AI Automation Engineer',
    'AI Voice Agents',
    'Workflow Automation',
    'Full Stack Developer',
    'Next.js Developer',
    'AI Chatbots',
    'Business Automation',
  ],
  authors: [{ name: 'Alex Carter' }],
  openGraph: {
    title: 'Alex Carter — AI Automation Engineer & Full Stack Developer',
    description:
      'Building intelligent AI systems, voice agents, and premium web experiences for global clients.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alex Carter — AI Automation Engineer',
    description:
      'Building intelligent AI systems, voice agents, and premium web experiences.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
