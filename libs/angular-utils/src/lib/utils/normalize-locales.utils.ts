// Utility to normalize locales array for OneCX
export function normalizeLocales(locales: string[] | undefined): string[] {
  const result: string[] = [];
  if (!locales || locales.length === 0) {
    // Use browser settings if locales is undefined or empty
    const browserLang: any = window.navigator.languages;
    locales = browserLang || [window.navigator.language || 'en'];
  }
  locales = locales ?? ['en'];
  for (const loc of locales) {
    if (!result.includes(loc)) {
      result.push(loc);
      const base = loc.split('-')[0];
      if (!result.includes(base)) {
        result.push(base);
      }
    }
  }
  return result;
}
