export const dynamic = 'force-static';

export default function manifest() {
  return {
    name: 'Andrii Petruk — Personal Research Lab',
    short_name: 'Andrii Petruk',
    description:
      'Systems research, LLM reasoning safety, cloud-native architecture, distributed systems, and autonomous infrastructure.',
    start_url: '/',
    display: 'standalone',
    background_color: '#09090b',
    theme_color: '#09090b',
    icons: [
      { src: '/icon.svg', type: 'image/svg+xml', sizes: 'any' },
      { src: '/apple-icon.png', type: 'image/png', sizes: '180x180' }
    ]
  };
}
