// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { localizedString } from '@angular/compiler/src/output/output_ast';

export const environment = {
  production: false,
  locales: ['en', 'de', 'ru'],
  defaultLocale: 'ru',
};
