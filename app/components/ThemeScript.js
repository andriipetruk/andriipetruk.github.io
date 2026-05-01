// Inline, blocking script that sets data-theme before first paint to avoid FOUC.
// Pulled out of layout.js to keep the JSX readable.
const themeInit = `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    var prefers = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    var theme = stored === 'light' || stored === 'dark' ? stored : prefers;
    document.documentElement.dataset.theme = theme;
  } catch (e) {
    document.documentElement.dataset.theme = 'dark';
  }
})();
`;

export default function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: themeInit }} />;
}
