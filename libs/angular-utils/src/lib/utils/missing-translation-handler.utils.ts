import { MissingTranslationHandler, MissingTranslationHandlerParams } from "@ngx-translate/core";
import { normalizeLocales } from './normalize-locales.utils';
import { Observable, of, throwError } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';

export class FallbackMissingTranslationHandler implements MissingTranslationHandler {
  handle(params: MissingTranslationHandlerParams): Observable<any> {
    const userLocales = normalizeLocales(undefined); // or pass user locales if available
    const translations = params.translateService.translations;
    const langs = [...userLocales, 'en'];

    function tryLoad(langsToTry: string[]): Observable<any> {
      if (!langsToTry.length) return throwError(() => 'Not found');
      const locale = langsToTry[0];
      const localeTranslations = translations[locale];
      if (localeTranslations && localeTranslations[params.key]) {
        return of(localeTranslations[params.key]);
      }
      // Try next locale
      return tryLoad(langsToTry.slice(1));
    }

    return tryLoad(langs).pipe(
      catchError(() => of(params.key))
    );
  }
}