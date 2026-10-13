import { locales, defaultLocale } from '@/i18n/config';

// Static export has no server redirects: pick the browser language client-side.
const script = `
(function () {
  var supported = ${JSON.stringify(locales)};
  var langs = navigator.languages || [navigator.language || ''];
  for (var i = 0; i < langs.length; i++) {
    var l = (langs[i] || '').slice(0, 2).toLowerCase();
    if (supported.indexOf(l) !== -1) { location.replace('/' + l + '/'); return; }
  }
  location.replace('/${defaultLocale}/');
})();`;

export default function RootRedirect() {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: script }} />
      <noscript>
        <meta httpEquiv="refresh" content={`0; url=/${defaultLocale}/`} />
      </noscript>
    </>
  );
}
