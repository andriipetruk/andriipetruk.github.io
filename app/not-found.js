export const metadata = {
  title: 'Page not found',
  robots: { index: false, follow: true }
};

export default function NotFound() {
  return (
    <main>
      <section className="section" style={{ minHeight: '70vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <p className="eyebrow">404</p>
        <h1>This page doesn’t exist.</h1>
        <p className="lead" style={{ maxWidth: 560 }}>
          The page you’re looking for moved or never existed. Head back to the homepage.
        </p>
        <div className="actions">
          <a href="/">Back to home</a>
        </div>
      </section>
    </main>
  );
}
