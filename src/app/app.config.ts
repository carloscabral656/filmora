import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import {
  provideLucideIcons,
  LucideSearch,
  LucideUserRound,
  LucidePlay,
  LucideStar,
  LucidePlus,
  LucidePlusCircle,
  LucideHeart,
} from '@lucide/angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideLucideIcons(
      LucideSearch,
      LucideUserRound,
      LucidePlay,
      LucideStar,
      LucidePlus,
      LucideHeart,
    ),
  ],
};
