export function ThemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            try {
              var theme = localStorage.getItem('theme') || 'system';
              var isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
              document.documentElement.classList.add(isDark ? 'dark' : 'light');
            } catch (e) {}
          })();
        `,
      }}
    />
  )
}
