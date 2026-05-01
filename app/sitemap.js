export const dynamic = 'force-static';

export default function sitemap() {
  const base = 'https://andriipetruk.com';
  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1
    }
  ];
}
