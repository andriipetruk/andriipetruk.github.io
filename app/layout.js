import { Inter, JetBrains_Mono } from 'next/font/google';
import ThemeScript from './components/ThemeScript';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap'
});

export const metadata = {
  metadataBase: new URL('https://andriipetruk.com'),
  title: {
    default: 'Andrii Petruk — Systems Researcher · Infrastructure Architect · AI Systems Builder',
    template: '%s · Andrii Petruk'
  },
  description:
    'Personal research site of Andrii Petruk — systems research, LLM reasoning safety, cloud-native architecture, and autonomous infrastructure.',
  keywords: [
    'Andrii Petruk',
    'Systems Researcher',
    'Infrastructure Architect',
    'AI Systems Builder',
    'LLM reasoning safety',
    'AI-assisted system design',
    'cloud-native architecture',
    'autonomous infrastructure',
    'distributed systems',
    'site reliability engineering',
    'Kubernetes',
    'AI infrastructure',
    'KubX'
  ],
  authors: [{ name: 'Andrii Petruk' }],
  creator: 'Andrii Petruk',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Andrii Petruk — Systems Researcher & AI Systems Builder',
    description:
      'Research, essays, and projects on reliable AI, cloud-native systems, distributed systems, and autonomous infrastructure.',
    type: 'website',
    url: 'https://andriipetruk.com',
    siteName: 'Andrii Petruk',
    images: [{ url: '/andrii-portrait.png', width: 1200, height: 900, alt: 'Andrii Petruk portrait' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Andrii Petruk — Systems Researcher & AI Systems Builder',
    description:
      'Research, essays, and projects on reliable AI, cloud-native systems, and autonomous infrastructure.',
    images: ['/andrii-portrait.png']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className={`${inter.variable} ${mono.variable}`}>{children}</body>
    </html>
  );
}
