import Script from 'next/script';
import './globals.css';

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || '';

export const metadata = {
  metadataBase: new URL('https://andriipetruk.com'),
  title: {
    default: 'Andrii Petruk — Systems Researcher, Infrastructure Architect, AI Systems Builder',
    template: '%s | Andrii Petruk'
  },
  description:
    'Personal research lab of Andrii Petruk — systems research, LLM reasoning safety, cloud-native architecture, distributed systems, reliable infrastructure, and autonomous infrastructure.',
  keywords: [
    'Andrii Petruk',
    'Andrii Petruk research',
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
    'DevOps',
    'AI infrastructure',
    'KubX',
    'architecture reasoning benchmark'
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
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Andrii Petruk — Systems Researcher, Infrastructure Architect, AI Systems Builder' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Andrii Petruk — Systems Researcher & AI Systems Builder',
    description:
      'Research, essays, and projects on reliable AI, cloud-native systems, and autonomous infrastructure.',
    images: [{ url: '/og-image.jpg', alt: 'Andrii Petruk — Systems Researcher, Infrastructure Architect, AI Systems Builder' }]
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
    <html lang="en">
      <body>
        {children}
        {GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
